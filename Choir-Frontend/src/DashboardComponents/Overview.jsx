// Overview.jsx
import React from "react";
import "./dashboardStyles/overview.css";

const Overview = () => {
    return (
        <div className="overview">
            <div className="stats-grid">
                <div className="stat-card">
                    <p className="label">Total Members</p>
                    <h3 className="value">124</h3>
                </div>
                <div className="stat-card">
                    <p className="label">Upcoming events</p>
                    <h3 className="value">8</h3>
                </div>
                <div className="stat-card">
                    <p className="label">Media Items</p>
                    <h3 className="value">256</h3>
                </div>
            </div>

            <div className="card">
                <h4>Recent Members</h4>
                <div className="recent-member">
                    <img src="/src/assets/avatar-3.jpg" alt="Sarah Johnson" className="avatar" />
                    <div>
                        <strong>Sarah Johnson</strong>
                        <p>Soprano</p>
                    </div>
                    <span className="join-date">Joined Jan 15, 2025</span>
                </div>
                <div className="recent-member">
                    <img src="/src/assets/avatar-3.jpg" alt="Michael Chen" className="avatar" />
                    <div>
                        <strong>Michael Chen</strong>
                        <p>Tenor</p>
                    </div>
                    <span className="join-date">Joined Jan 12, 2025</span>
                </div>
            </div>

            <div className="card">
                <h4>Recent Media</h4>
                <div className="media-grid">
                    <div className="media-box">Winter Concert 2025</div>
                    <div className="media-box">Family Day Performance</div>
                    <div className="media-box">Practice Session</div>
                </div>
            </div>
        </div>
    );
};

export default Overview;