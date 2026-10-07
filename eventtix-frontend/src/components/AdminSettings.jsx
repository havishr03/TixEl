import React from 'react';

export default function AdminSettings() {
  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>Platform Settings</h1>
      
      <div className="card" style={{ maxWidth: '600px' }}>
        <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>General Settings</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontWeight: 'bold' }}>Maintenance Mode</p>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>Disable booking across the platform.</p>
            </div>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input type="checkbox" style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }} />
            </label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontWeight: 'bold' }}>Email Notifications</p>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>Send PDF tickets to users automatically.</p>
            </div>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }} />
            </label>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Platform Fee Percentage (%)</label>
            <input type="number" defaultValue="5" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
          </div>

          <button className="btn" style={{ marginTop: '1rem' }}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
