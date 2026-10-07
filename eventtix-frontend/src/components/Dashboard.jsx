import React from 'react';
import { useLocation } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

export default function Dashboard() {
  const location = useLocation();
  const showSuccess = location.state?.newBooking;

  // Mock past bookings
  const bookings = [
    { id: 'TXN-8849', event: 'Tech Conference 2026', seats: 'VIP-A1, VIP-A2', date: 'Oct 15, 2026', total: 300, status: 'CONFIRMED' },
    { id: 'TXN-3921', event: 'Rock Concert', seats: 'STD-D4', date: 'Nov 02, 2026', total: 50, status: 'CONFIRMED' },
  ];

  return (
    <div>
      {showSuccess && (
        <div style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', padding: '1rem', borderRadius: '0.5rem', marginBottom: '2rem', borderLeft: '4px solid #10b981', display: 'flex', justifyContent: 'space-between' }}>
          <span>🎉 Payment successful! Your seats are locked and booked.</span>
          <span>Check email for PDF.</span>
        </div>
      )}

      <h1 style={{ marginBottom: '2rem' }}>My Tickets</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {bookings.map((b, i) => (
          <div key={i} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{b.event}</h3>
              <p className="text-muted" style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Seats: <strong style={{ color: 'white' }}>{b.seats}</strong></p>
              <p className="text-muted">Date: {b.date}</p>
              <p className="text-muted" style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Transaction ID: {b.id}</p>
            </div>
            
            <div style={{ background: 'white', padding: '10px', borderRadius: '8px' }}>
              <QRCodeSVG value={b.id} size={100} />
            </div>

            <div style={{ textAlign: 'right', minWidth: '120px' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '1rem' }}>${b.total}</p>
              <span style={{ padding: '0.4rem 1rem', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', borderRadius: '2rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
                {b.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
