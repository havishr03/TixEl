package com.eventtix.controller;

import com.eventtix.model.Ticket;
import com.eventtix.repository.TicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class DashboardController {

    private final TicketRepository ticketRepository;

    @GetMapping("/tickets/{userId}")
    public ResponseEntity<List<Ticket>> getUserTickets(@PathVariable Long userId) {
        List<Ticket> tickets = ticketRepository.findByUserId(userId);
        return ResponseEntity.ok(tickets);
    }
}
