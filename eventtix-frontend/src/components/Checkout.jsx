import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // If user navigates here directly, redirect them
  if (!location.state) {
    return <div style={{ textAlign: 'center', marginTop: '5rem' }}><h2>No items in cart.</h2><button className="btn" onClick={() => navigate('/')}>Go Back</button></div>;
  }

  const { eventId, selectedSeats, totalPrice } = location.state;

  const handlePaymentAndBooking = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 1. In a real final project, you would call Razorpay/Stripe API here to verify payment first.
      await new Promise(r => setTimeout(r, 1500)); // Simulate payment processing

      // 2. Once payment succeeds, hit our backend to confirm seats
      const payload = { eventId: parseInt(eventId), seatNumbers: selectedSeats, userId: 1 };
      
      // Try to book via backend (this will trigger the Optimistic Locking check!)
      // const response = await axios.post('http://localhost:8080/api/bookings', payload);

      // Simulate Success for UI
      navigate('/dashboard', { state: { newBooking: true } });
      
    } catch (err) {
      setError(err.response?.data || "Booking failed! One or more seats were snatched by someone else while you were paying.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Checkout Summary</h2>
      <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '1.5rem 0' }}/>
      
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}><strong>Event ID:</strong> {eventId}</p>
        <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}><strong>Seats:</strong> {selectedSeats.join(', ')}</p>
        <p style={{ fontSize: '1.5rem', color: 'var(--accent)', marginTop: '1rem' }}><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
      </div>

      {error && <div style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#fca5a5', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', borderLeft: '4px solid #ef4444' }}>{error}</div>}

      <form onSubmit={handlePaymentAndBooking}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Card Number</label>
          <input type="text" placeholder="XXXX XXXX XXXX XXXX" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Expiry</label>
            <input type="text" placeholder="MM/YY" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>CVV</label>
            <input type="text" placeholder="XXX" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
          </div>
        </div>

        <button type="submit" className="btn" style={{ width: '100%', fontSize: '1.1rem' }} disabled={loading}>
          {loading ? 'Processing Payment...' : `Pay $${totalPrice.toFixed(2)}`}
        </button>
      </form>
    </div>
  );
}
