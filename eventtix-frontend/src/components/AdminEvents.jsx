import React, { useState } from 'react';

export default function AdminEvents() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Manage Events</h1>
        <button className="btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Create New Event'}
        </button>
      </div>

      {showForm && (
        <div className="card" style={{ marginBottom: '3rem', animation: 'slideIn 0.3s' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Create New Event</h3>
          <form onSubmit={(e) => { e.preventDefault(); setShowForm(false); alert('Event created successfully!'); }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Event Name</label>
                <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Date & Time</label>
                <input type="datetime-local" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Venue Layout Preset</label>
                <select style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}>
                  <option>Grand Arena (1000 seats)</option>
                  <option>Comedy Club (150 seats)</option>
                  <option>City Stadium (5000 seats)</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Base Ticket Price ($)</label>
                <input type="number" min="0" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
              </div>
            </div>
            <button type="submit" className="btn">Publish Event</button>
          </form>
        </div>
      )}

      <div className="card">
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>Event Name</th>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>Date</th>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>Capacity</th>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>Status</th>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1rem 0' }}>Tech Conference 2026</td>
              <td style={{ padding: '1rem 0' }}>Oct 15, 2026</td>
              <td style={{ padding: '1rem 0' }}>850 / 1000</td>
              <td style={{ padding: '1rem 0' }}><span style={{ color: '#34d399' }}>Active</span></td>
              <td style={{ padding: '1rem 0' }}><button className="btn" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>Edit</button></td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1rem 0' }}>Rock Concert</td>
              <td style={{ padding: '1rem 0' }}>Nov 02, 2026</td>
              <td style={{ padding: '1rem 0' }}>4,900 / 5000</td>
              <td style={{ padding: '1rem 0' }}><span style={{ color: '#f59e0b' }}>Selling Fast</span></td>
              <td style={{ padding: '1rem 0' }}><button className="btn" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
