# TixEl 🎟️

A full-stack event ticket booking platform built with React and Spring Boot.

TixEl allows users to browse events, select seats, and book tickets through a React frontend connected to a Spring Boot REST API.

## 🚀 Live Demo

👉 [Try TixEl Live](YOUR_LIVE_DEMO_URL)

## 📸 Screenshots

### Event Discovery

![Event Discovery](screenshots/Screenshot%20%2854%29.png)

### Interactive Seat Selection

![Seat Selection](screenshots/Screenshot%20%2855%29.png)

### My Tickets

![My Tickets](screenshots/Screenshot%20%2857%29.png)

### Admin Dashboard

![Admin Dashboard](screenshots/Screenshot%20%2859%29.png)

### Event Management

![Event Management](screenshots/Screenshot%20%2860%29.png)

## ✨ Features

### User Features

- User registration and login
- Browse available events
- View event details
- Interactive seat selection
- Ticket booking
- View booking information

### Admin Features

- Admin authentication
- Create and manage events
- View registered users
- Admin dashboard
- Manage event information

### Booking System

- Real-time seat availability
- Prevents duplicate seat bookings
- Transactional ticket booking
- Concurrency-safe booking

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Axios
- React Router
- HTML
- CSS

### Backend

- Java 17
- Spring Boot
- Spring Data JPA
- Hibernate
- REST APIs

### Databases

- MySQL
- MongoDB

### Tools

- Maven
- Git
- GitHub
- Postman

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │       :5173         │
                    └──────────┬──────────┘
                               │
                              Axios
                               │
                    ┌──────────▼──────────┐
                    │   Spring Boot API   │
                    │       :8080         │
                    └──────────┬──────────┘
                               │
                 ┌─────────────┴─────────────┐
                 │                           │
        ┌────────▼────────┐        ┌────────▼────────┐
        │      MySQL      │        │     MongoDB     │
        │                 │        │                 │
        │ Users           │        │ Venue Layouts   │
        │ Events          │        │                 │
        │ Tickets         │        │                 │
        └─────────────────┘        └─────────────────┘