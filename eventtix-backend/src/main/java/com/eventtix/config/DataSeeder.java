package com.eventtix.config;

import com.eventtix.model.Event;
import com.eventtix.model.Ticket;
import com.eventtix.model.User;
import com.eventtix.repository.EventRepository;
import com.eventtix.repository.TicketRepository;
import com.eventtix.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final EventRepository eventRepository;
    private final TicketRepository ticketRepository;

    @Override
    public void run(String... args) throws Exception {
        // Only seed if empty
        if (userRepository.count() == 0) {
            // Seed Admin User
            User admin = new User();
            admin.setUsername("admin@eventtix.com");
            admin.setEmail("admin@eventtix.com");
            admin.setPassword("admin123");
            userRepository.save(admin);

            // Seed Normal User (ID 2 usually, but auto-increment can vary)
            User demoUser = new User();
            demoUser.setUsername("demo@user.com");
            demoUser.setEmail("demo@user.com");
            demoUser.setPassword("demo123");
            userRepository.save(demoUser);

            // Seed Event
            Event event1 = new Event();
            event1.setName("Tech Conference 2026");
            event1.setDescription("The biggest tech event of the year.");
            event1.setEventDate(LocalDateTime.now().plusDays(30));
            event1 = eventRepository.save(event1);

            // Seed Tickets for Event 1 (Mocking a small layout: Rows A and B)
            String[] rows = {"A", "B", "C"};
            int seatsPerRow = 10;
            
            for (String row : rows) {
                for (int i = 1; i <= seatsPerRow; i++) {
                    Ticket ticket = new Ticket();
                    ticket.setEvent(event1);
                    ticket.setSeatNumber(row + "-" + i);
                    ticket.setStatus(Ticket.TicketStatus.AVAILABLE);
                    
                    if (row.equals("A")) {
                        ticket.setCategory(Ticket.SeatCategory.VIP);
                        ticket.setPrice(150.0);
                    } else if (row.equals("B")) {
                        ticket.setCategory(Ticket.SeatCategory.PREMIUM);
                        ticket.setPrice(100.0);
                    } else {
                        ticket.setCategory(Ticket.SeatCategory.STANDARD);
                        ticket.setPrice(50.0);
                    }
                    
                    ticketRepository.save(ticket);
                }
            }
            
            System.out.println("Data seeding completed successfully!");
        }
    }
}
