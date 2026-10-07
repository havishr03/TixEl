import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { name: 'Mon', total: 4000 },
  { name: 'Tue', total: 3000 },
  { name: 'Wed', total: 2000 },
  { name: 'Thu', total: 2780 },
  { name: 'Fri', total: 8890 },
  { name: 'Sat', total: 12390 },
  { name: 'Sun', total: 14490 },
];

export default function AdminPanel() {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1>Dashboard Overview</h1>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div className="card" style={{ borderTop: '4px solid var(--primary)' }}>
          <p className="text-muted">Total Revenue</p>
          <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>$124,500</h2>
          <p style={{ color: '#34d399', fontSize: '0.9rem' }}>+14% this month</p>
        </div>
        <div className="card" style={{ borderTop: '4px solid var(--accent)' }}>
          <p className="text-muted">Tickets Sold</p>
          <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>3,492</h2>
          <p style={{ color: '#34d399', fontSize: '0.9rem' }}>+5% this month</p>
        </div>
        <div className="card" style={{ borderTop: '4px solid #f59e0b' }}>
          <p className="text-muted">Active Events</p>
          <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>8</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>2 starting this week</p>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '3rem', height: '400px' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Revenue Analytics</h2>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="var(--text-muted)" />
            <YAxis stroke="var(--text-muted)" />
            <Tooltip contentStyle={{ backgroundColor: 'var(--bg-card)', border: 'none', borderRadius: '0.5rem' }} />
            <Area type="monotone" dataKey="total" stroke="var(--primary)" fillOpacity={1} fill="url(#colorTotal)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="card">
        <h2 style={{ marginBottom: '1.5rem' }}>Recent Transactions</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>Transaction ID</th>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>Event Name</th>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>Amount</th>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1rem 0', fontFamily: 'monospace' }}>TXN-8849</td>
              <td style={{ padding: '1rem 0' }}>Tech Conference 2026</td>
              <td style={{ padding: '1rem 0' }}>$300.00</td>
              <td style={{ padding: '1rem 0' }}><span style={{ color: '#34d399' }}>Successful</span></td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1rem 0', fontFamily: 'monospace' }}>TXN-3921</td>
              <td style={{ padding: '1rem 0' }}>Rock Concert</td>
              <td style={{ padding: '1rem 0' }}>$50.00</td>
              <td style={{ padding: '1rem 0' }}><span style={{ color: '#34d399' }}>Successful</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
