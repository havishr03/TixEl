package com.eventtix.repository;

import com.eventtix.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {
    List<Ticket> findByEventId(Long eventId);
    Optional<Ticket> findByEventIdAndSeatNumber(Long eventId, String seatNumber);
    List<Ticket> findByUserId(Long userId);
}
