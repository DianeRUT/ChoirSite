// App.jsx
import React, {useState} from "react"; 
import Sidebar from '../Components/Sidebar';
import '../Dash_style/home.css';

function Home() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <Header />
      <div className="dashboard-content">
        <div className="stats-row">
          <StatCard
            title="Total Members"
            value="124"
            change="+12 from last month"
            icon="user"
          />
          <StatCard
            title="Upcoming Events"
            value="8"
            change="Next event in 3 days"
            icon="calendar"
          />
          <StatCard
            title="Total Donations"
            value="$12,450"
            change="This month"
            icon="donation"
          />
        </div>

        <div className="content-row">
          <NewsSection />
          <EventsSection />
        </div>

        <QuickLinks />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="profile">
        <div className="avatar"></div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, icon }) {
  const iconClass = `stat-icon ${icon}`;
  
  return (
    <div className="stat-card">
      <div className="stat-content">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
        <div className="stat-change">{change}</div>
      </div>
      <div className={iconClass}></div>
    </div>
  );
}

function NewsSection() {
  const newsItems = [
    {
      icon: 'music',
      title: 'New Performance Added',
      description: 'Spring Concert scheduled for April 18, 2025',
      date: new Date(),
    },
    {
      icon: 'trophy',
      title: 'Competition Success',
      description: 'First place in Regional Choir Competition',
      date: new Date(),
    },
  ];

  return (
    <div className="news-section">
      <h2>Latest News</h2>
      <div className="news-list">
        {newsItems.map((item, index) => (
          <div key={index} className="news-item">
            <div className={`news-icon ${item.icon}`}></div>
            <div className="news-content">
              <div className="news-title">{item.title}</div>
              <div className="news-description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EventsSection() {
  const events = [
    {
      title: 'Spring Concert',
      date: 'April 18, 2025',
      location: 'City Hall',
    },
    {
      title: 'Community Performance',
      date: 'April 25, 2025',
      location: 'Central Park',
    },
  ];

  return (
    <div className="events-section">
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <div className="event-details">
              <div className="event-title">{event.title}</div>
              <div className="event-date">{event.date} • {event.location}</div>
            </div>
            <button className="rsvp-button">RSVP</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuickLinks() {
  const links = [
    { name: 'Schedule', icon: 'schedule' },
    { name: 'Support Us', icon: 'support' },
    { name: 'Repertoire', icon: 'music' },
    { name: 'Members', icon: 'members' },
  ];

  return (
    <div className="quick-links">
      <h2>Quick Links</h2>
      <div className="links-container">
        {links.map((link, index) => (
          <div key={index} className="quick-link">
            <div className={`link-icon ${link.icon}`}></div>
            <div className="link-name">{link.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;