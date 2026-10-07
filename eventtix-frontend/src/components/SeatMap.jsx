import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MOCK_LAYOUT = [
  { row: 'A', seats: 10, category: 'VIP', price: 150 },
  { row: 'B', seats: 12, category: 'VIP', price: 150 },
  { row: 'C', seats: 12, category: 'PREMIUM', price: 100 },
  { row: 'D', seats: 14, category: 'STANDARD', price: 50 },
  { row: 'E', seats: 14, category: 'STANDARD', price: 50 },
];

export default function SeatMap() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState(['A-5', 'B-2', 'C-10']); 
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState('');

  // Calculate total price based on selected seats and mock layout
  const calculateTotal = () => {
    let total = 0;
    selectedSeats.forEach(seatId => {
      const row = seatId.split('-')[0];
      const layoutRow = MOCK_LAYOUT.find(l => l.row === row);
      if (layoutRow) total += layoutRow.price;
    });
    return total;
  };

  const handleSeatClick = (seatId) => {
    if (bookedSeats.includes(seatId)) return;
    
    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(s => s !== seatId); // Deselect
      } else {
        return [...prev, seatId]; // Select multiple
      }
    });
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) return;
    
    // In a full project, we navigate to a checkout page first before calling the API
    navigate('/checkout', { 
      state: { 
        eventId: id, 
        selectedSeats: selectedSeats, 
        totalPrice: calculateTotal() 
      } 
    });
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  return (
    <div className="card" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Select Your Seats</h2>
        <button className="btn" onClick={() => navigate(-1)} style={{ background: 'transparent', border: '1px solid var(--text-muted)' }}>
          Back
        </button>
      </div>
      
      <div className="seat-map-container">
        <div className="stage">STAGE</div>
        
        <div className="layout">
          {MOCK_LAYOUT.map((rowDef) => (
            <div key={rowDef.row} className="seat-row" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '80px', color: 'var(--text-muted)', fontSize: '0.8rem', textAlign: 'right' }}>
                {rowDef.category} (${rowDef.price})
              </span>
              <span style={{ width: '20px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{rowDef.row}</span>
              {Array.from({ length: rowDef.seats }).map((_, idx) => {
                const seatId = `${rowDef.row}-${idx + 1}`;
                const isBooked = bookedSeats.includes(seatId);
                const isSelected = selectedSeats.includes(seatId);
                
                let className = 'seat ';
                if (isBooked) className += 'booked';
                else if (isSelected) className += 'selected';
                else className += 'available';

                return (
                  <div 
                    key={seatId} 
                    className={className}
                    onClick={() => handleSeatClick(seatId)}
                    title={isBooked ? 'Booked' : `${seatId} - $${rowDef.price}`}
                  >
                  </div>
                );
              })}
              <span style={{ width: '20px' }}></span>
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="seat available" style={{ width: '20px', height: '20px' }}></div> Available
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="seat selected" style={{ width: '20px', height: '20px' }}></div> Selected
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="seat booked" style={{ width: '20px', height: '20px' }}></div> Booked
          </div>
        </div>

        {selectedSeats.length > 0 && (
          <div style={{ marginTop: '2rem', textAlign: 'center', animation: 'slideIn 0.3s' }}>
            <h3>Selected: {selectedSeats.join(', ')}</h3>
            <p className="text-muted" style={{ marginBottom: '1rem' }}>Total Price: ${calculateTotal()}</p>
            <button className="btn" onClick={handleBooking} disabled={loading}>
              {loading ? 'Processing...' : `Confirm Booking (${selectedSeats.length})`}
            </button>
          </div>
        )}
      </div>

      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}
    </div>
  );
}
