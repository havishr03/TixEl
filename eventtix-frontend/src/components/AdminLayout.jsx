import React from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, CalendarDays, Settings, LogOut } from 'lucide-react';

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', background: 'var(--bg-card)', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '2rem 1rem', display: 'flex', flexDirection: 'column' }}>
        <div className="brand-logo" style={{ marginBottom: '3rem', paddingLeft: '1rem', fontSize: '1.8rem' }}>TIX<span>EL</span> Admin</div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          <Link to="/admin" className={`admin-nav-item ${isActive('/admin') ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', color: isActive('/admin') ? 'white' : 'var(--text-muted)', textDecoration: 'none', borderRadius: '0.5rem' }}>
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/admin/events" className={`admin-nav-item ${isActive('/admin/events') ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', color: isActive('/admin/events') ? 'white' : 'var(--text-muted)', textDecoration: 'none', borderRadius: '0.5rem' }}>
            <CalendarDays size={20} /> Events
          </Link>
          <Link to="/admin/users" className={`admin-nav-item ${isActive('/admin/users') ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', color: isActive('/admin/users') ? 'white' : 'var(--text-muted)', textDecoration: 'none', borderRadius: '0.5rem' }}>
            <Users size={20} /> Users
          </Link>
          <Link to="/admin/settings" className={`admin-nav-item ${isActive('/admin/settings') ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', color: isActive('/admin/settings') ? 'white' : 'var(--text-muted)', textDecoration: 'none', borderRadius: '0.5rem' }}>
            <Settings size={20} /> Settings
          </Link>
        </nav>

        <button 
          onClick={() => navigate('/')} 
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', color: '#ef4444', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1rem', textAlign: 'left', borderRadius: '0.5rem' }}
        >
          <LogOut size={20} /> Exit Admin
        </button>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '3rem', overflowY: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
}
