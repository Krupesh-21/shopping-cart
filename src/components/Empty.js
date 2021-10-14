import React from "react";
const Empty = ({ label, icon }) => {
  return (
      <div className="container">
        <p className="empty-icon">{icon}</p>
        <p className="empty-label">{label}</p>
      </div>
  );
};

export default Empty;
