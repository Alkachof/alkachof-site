import React from "react";
import "./ConsoleBar.css";

const ConsoleBar = () => {
    return (
        <div className="heading">
        <div className="notifications">
          <h2>Notifications</h2>
          {/* Add notification items here */}
        </div>
        <div className="notification-icon">
          <i className="fas fa-bell"></i>
          <span className="notification-count">1</span>
        </div>
      </div>
    )
};

export default ConsoleBar;