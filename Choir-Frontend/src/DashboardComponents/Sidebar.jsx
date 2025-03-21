// Sidebar.jsx
import React from "react";
import "./dashboardStyles/sidebar.css";

const Sidebar = ({ setActiveSection, activeSection }) => {
    return (
        <div className="sidebar">
            <a onClick={() => setActiveSection("overview")} className={activeSection === "overview" ? "active" : ""}>Dashboard</a>
            <a onClick={() => setActiveSection("members")} className={activeSection === "members" ? "active" : ""}>Members</a>
            <a onClick={() => setActiveSection("media")} className={activeSection === "media" ? "active" : ""}>Media</a>
            <a onClick={() => setActiveSection("schedule")} className={activeSection === "schedule" ? "active" : ""}>Schedule</a>
        </div>
    );
};

export default Sidebar;
