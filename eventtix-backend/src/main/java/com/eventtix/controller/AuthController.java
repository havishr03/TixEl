package com.eventtix.controller;

import com.eventtix.model.User;
import com.eventtix.repository.UserRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        if (userRepository.findByUsername(request.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already exists");
        }

        User user = new User();
        user.setUsername(request.getEmail()); // Using email as username
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword()); // In production, hash this!

        userRepository.save(user);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Optional<User> userOpt = userRepository.findByUsername(request.getEmail());
        
        if (userOpt.isPresent() && userOpt.get().getPassword().equals(request.getPassword())) {
            // In a real app, return a JWT token here
            return ResponseEntity.ok(userOpt.get());
        }
        
        return ResponseEntity.status(401).body("Invalid credentials");
    }

    @Data
    public static class RegisterRequest {
        private String fullName;
        private String email;
        private String password;
    }

    @Data
    public static class LoginRequest {
        private String email;
        private String password;
    }
}
