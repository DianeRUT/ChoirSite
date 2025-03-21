// Media.jsx
import React from "react";
import "./dashboardStyles/media.css";

const Media = () => {
    return (
        <div className="media">
            <h2>Media Gallery</h2>
            <button className="upload-button">Upload</button>
            <div className="media-grid">
                <div className="media-item">Performance 1</div>
                <div className="media-item">Rehearsal 1</div>
                <div className="media-item">Rehearsal 2</div>
                <div className="media-item">Concert</div>
            </div>
        </div>
    );
};

export default Media;
