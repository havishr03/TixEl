package com.eventtix.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "venue_layouts")
@Data
public class VenueLayout {
    
    @Id
    private String id;
    
    private String venueName;
    
    // Represents a dynamic grid/layout. 
    // e.g. [{"row": "A", "seats": 20}, {"row": "B", "seats": 25}]
    // or even a 2D array representing SVG coordinates.
    // This unstructured data is perfect for MongoDB.
    private List<Section> sections;
    
    @Data
    public static class Section {
        private String name;
        private int rows;
        private int seatsPerRow;
        // Could also have specific coordinates or shapes
    }
}
