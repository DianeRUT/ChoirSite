import React from "react";
import "./dashboardStyles/members.css";

const membersData = [
    { name: "Jane Doe", role: "Soprano", age: 30, image: "/src/assets/avatar2.avif" },
    { name: "John Smith", role: "Tenor", age: 35, image: "/src/assets/avatar1.avif" },
    { name: "Emily Davis", role: "Alto", age: 25, image: "/src/assets/man-wearing-round-eyeglasses-casual-t-shirt.jpg" },
    // { name: "Michael Johnson", role: "Bass", age: 40, image: "/avatars/michael.jpg" },
    // { name: "Sarah Miller", role: "Soprano", age: 28, image: "/avatars/sarah.jpg" },
    // { name: "David Brown", role: "Tenor", age: 45, image: "/avatars/david.jpg" },
];

const Members = () => {
    return (
        <div className="members">
            <h2>Members</h2>
            <p className="member-count">1,000 members</p>
            <input type="text" placeholder="Search for a member" className="search-bar" />

            <div className="filters">
                {["All", "Soprano", "Alto", "Tenor", "Bass", "Unassigned"].map((filter, index) => (
                    <button key={index} className="filter-btn">{filter}</button>
                ))}
            </div>

            <div className="member-list">
                {membersData.map((member, index) => (
                    <div className="member-card" key={index}>
                        <img src={member.image} alt={member.name} className="avatar" />
                        <div className="member-info">
                            <strong>{member.name}</strong>
                            <p>{member.role}, {member.age} years old</p>
                        </div>
                        <button className="send-email">Send Email</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Members;
