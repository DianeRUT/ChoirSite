// Members.jsx
import React from "react";
import "./dashboardStyles/members.css";

const Members = () => {
    return (
        <div className="members">
            <h2>Members</h2>
            <input type="text" placeholder="Search members" className="search-bar" />
            <button className="add-member">Add Member</button>
        </div>
    );
};

export default Members;
