import React from 'react';

export default function AdminUsers() {
  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>Manage Users</h1>
      
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <input 
            type="text" 
            placeholder="Search users by email..." 
            style={{ width: '300px', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} 
          />
          <button className="btn">Export CSV</button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>User ID</th>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>Email</th>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>Role</th>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>Total Bookings</th>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1rem 0' }}>#10042</td>
              <td style={{ padding: '1rem 0' }}>john.doe@example.com</td>
              <td style={{ padding: '1rem 0' }}>Customer</td>
              <td style={{ padding: '1rem 0' }}>4</td>
              <td style={{ padding: '1rem 0' }}><span style={{ color: '#34d399' }}>Active</span></td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1rem 0' }}>#10043</td>
              <td style={{ padding: '1rem 0' }}>sarah.smith@example.com</td>
              <td style={{ padding: '1rem 0' }}>Customer</td>
              <td style={{ padding: '1rem 0' }}>1</td>
              <td style={{ padding: '1rem 0' }}><span style={{ color: '#34d399' }}>Active</span></td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1rem 0' }}>#10001</td>
              <td style={{ padding: '1rem 0' }}>admin@tixel.com</td>
              <td style={{ padding: '1rem 0', color: 'var(--primary)', fontWeight: 'bold' }}>Admin</td>
              <td style={{ padding: '1rem 0' }}>0</td>
              <td style={{ padding: '1rem 0' }}><span style={{ color: '#34d399' }}>Active</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
