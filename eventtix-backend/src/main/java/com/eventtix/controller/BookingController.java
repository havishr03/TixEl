package com.eventtix.controller;

import com.eventtix.model.Ticket;
import com.eventtix.service.BookingService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
@RequiredArgsConstructor
@CrossOrigin(origins = "*") // For development with React
public class BookingController {

    private final BookingService bookingService;

    @PostMapping
    public ResponseEntity<?> bookSeats(@RequestBody BookingRequest request) {
        try {
            java.util.List<Ticket> tickets = bookingService.bookSeats(request.getEventId(), request.getSeatNumbers(), request.getUserId());
            return ResponseEntity.ok(tickets);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @Data
    public static class BookingRequest {
        private Long eventId;
        private java.util.List<String> seatNumbers;
        private Long userId;
    }
}
