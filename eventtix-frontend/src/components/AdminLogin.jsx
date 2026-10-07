import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate secure admin login
    setTimeout(() => {
      setLoading(false);
      navigate('/admin');
    }, 1000);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      {/* Left side - Branding */}
      <div style={{ flex: 1, display: 'none', '@media (minWidth: 768px)': { display: 'flex' }, background: 'linear-gradient(135deg, var(--bg-card), var(--bg-dark))', borderRight: '1px solid rgba(255,255,255,0.05)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem' }}>
        <div className="brand-logo" style={{ fontSize: '4rem', marginBottom: '1rem' }}>TIX<span>EL</span></div>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', textAlign: 'center', maxWidth: '400px' }}>
          Enterprise Management Portal.<br/>Authorized personnel only.
        </p>
      </div>

      {/* Right side - Login Form */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div style={{ background: 'rgba(225, 29, 72, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
              <Shield size={48} />
            </div>
          </div>
          
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem', fontSize: '2rem' }}>Admin Access</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>Please verify your credentials</p>
          
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Admin ID</label>
              <input type="email" placeholder="admin@tixel.com" required style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '1rem' }} />
            </div>
            
            <div style={{ marginBottom: '2.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Security Key</label>
              <input type="password" placeholder="••••••••" required style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '1rem' }} />
            </div>

            <button type="submit" className="btn" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }} disabled={loading}>
              {loading ? 'Authenticating...' : 'Enter Portal'}
            </button>
          </form>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <button 
              onClick={() => navigate('/')} 
              style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Return to Consumer Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
