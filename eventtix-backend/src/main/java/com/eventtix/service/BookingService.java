package com.eventtix.service;

import com.eventtix.model.Ticket;
import com.eventtix.model.User;
import com.eventtix.repository.TicketRepository;
import com.eventtix.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.orm.ObjectOptimisticLockingFailureException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final TicketRepository ticketRepository;
    private final UserRepository userRepository;

    /**
     * Attempts to book multiple seats for an event.
     * Transactional ensures that if any part fails (like optimistic locking), the whole transaction rolls back.
     */
    @Transactional
    public java.util.List<Ticket> bookSeats(Long eventId, java.util.List<String> seatNumbers, Long userId) {
        // 1. Fetch user
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        java.util.List<Ticket> bookedTickets = new java.util.ArrayList<>();

        for (String seatNumber : seatNumbers) {
            // 2. Fetch the ticket by event and seat
            Ticket ticket = ticketRepository.findByEventIdAndSeatNumber(eventId, seatNumber)
                    .orElseThrow(() -> new RuntimeException("Seat " + seatNumber + " not found for this event"));

            // 3. Check if already booked
            if (ticket.getStatus() != Ticket.TicketStatus.AVAILABLE) {
                throw new RuntimeException("Seat " + seatNumber + " is already booked or reserved");
            }

            // 4. Update the ticket
            ticket.setUser(user);
            ticket.setStatus(Ticket.TicketStatus.BOOKED);

            // 5. Save the ticket.
            // If another thread updated this same ticket,
            // JPA will compare the @Version field and throw an ObjectOptimisticLockingFailureException.
            try {
                bookedTickets.add(ticketRepository.save(ticket));
            } catch (ObjectOptimisticLockingFailureException e) {
                throw new RuntimeException("Double booking detected! Someone else just booked seat " + seatNumber);
            }
        }
        
        return bookedTickets;
    }
}
