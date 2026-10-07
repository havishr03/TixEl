package com.eventtix.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "tickets", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"event_id", "seat_number"})
})
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; // Null if not booked yet

    @Column(name = "seat_number", nullable = false)
    private String seatNumber;

    @Column(nullable = false)
    private Double price = 0.0;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SeatCategory category = SeatCategory.STANDARD;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TicketStatus status = TicketStatus.AVAILABLE;

    // OPTIMISTIC LOCKING: This version field prevents the "Double Booking" problem.
    @Version
    private Long version;

    public enum TicketStatus {
        AVAILABLE, BOOKED, RESERVED
    }

    public enum SeatCategory {
        VIP, PREMIUM, STANDARD
    }
}
