import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import SeatMap from './components/SeatMap'
import Checkout from './components/Checkout'
import Dashboard from './components/Dashboard'
import AdminPanel from './components/AdminPanel'
import Login from './components/Login'
import AdminLogin from './components/AdminLogin'
import './index.css'

const MOCK_EVENTS = [
  { id: 1, name: "Tech Conference 2026", date: "Oct 15, 2026", venue: "Grand Arena", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
  { id: 2, name: "Rock Concert", date: "Nov 02, 2026", venue: "City Stadium", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80" },
  { id: 3, name: "Standup Comedy", date: "Dec 10, 2026", venue: "Comedy Club", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&q=80" }
];

function EventList() {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(to right, var(--primary), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Experience Live Events
        </h1>
        <p className="text-muted" style={{ fontSize: '1.2rem' }}>Book the best seats for the most exclusive events in town.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {MOCK_EVENTS.map(event => (
          <div key={event.id} className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <img src={event.image} alt={event.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '1.5rem' }}>
              <h2>{event.name}</h2>
              <p className="text-muted" style={{ margin: '0.5rem 0 1.5rem 0' }}>📅 {event.date} <br/>📍 {event.venue}</p>
              <Link to={`/event/${event.id}`}>
                <button className="btn" style={{ width: '100%' }}>Select Seats</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Navigation() {
  const navigate = useNavigate();
  // Simulating auth state
  const isAuthenticated = true;
  const isAdmin = true;

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '3rem' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="brand-logo">TIX<span>EL</span></div>
      </Link>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" style={{ color: 'var(--text-light)', textDecoration: 'none', fontWeight: '600' }}>My Tickets</Link>
            {/* The standard Nav now redirects admins to their specific login page, or directly if already authed. */}
            {isAdmin && <Link to="/admin/login" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>Admin Portal</Link>}
            <button className="btn" style={{ padding: '0.6rem 1.2rem', background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', boxShadow: 'none' }} onClick={() => navigate('/login')}>Logout</button>
          </>
        ) : (
          <Link to="/login"><button className="btn">Login</button></Link>
        )}
      </div>
    </nav>
  );
}

import AdminLayout from './components/AdminLayout'
import AdminEvents from './components/AdminEvents'
import AdminUsers from './components/AdminUsers'
import AdminSettings from './components/AdminSettings'

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <Routes>
          {/* Standalone Admin Login (No sidebars or standard navs) */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Routes with distinct layout */}
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/events" element={<AdminEvents />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
          </Route>

          {/* User Routes with standard Navigation */}
          <Route element={
            <div className="app-container">
              <Navigation />
              <Outlet />
            </div>
          }>
            <Route path="/" element={<EventList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/event/:id" element={<SeatMap />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
