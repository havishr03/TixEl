package com.eventtix.repository;

import com.eventtix.model.VenueLayout;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VenueLayoutRepository extends MongoRepository<VenueLayout, String> {
}
