// src/components/Sidebar.jsx
import React from 'react';
import { Home, Info, Calendar, Music, Clock, HeartHandshake } from 'lucide-react';

function Sidebar() {
  const menuItems = [
    { name: 'Home', icon: <Home size={18} /> },
    { name: 'About', icon: <Info size={18} /> },
    { name: 'Events', icon: <Calendar size={18} /> },
    { name: 'Our Commission', icon: <Music size={18} /> },
    { name: 'Schedule', icon: <Clock size={18} /> },
    { name: 'Support Us', icon: <HeartHandshake size={18} /> },
  ];

  return (
    <div className="sidebar">
      <div className="logo">Choir Dashboard</div>
      <nav className="menu">
        {menuItems.map((item, index) => (
          <div key={index} className={`menu-item ${index === 0 ? 'active' : ''}`}>
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;