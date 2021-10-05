import React from "react";
import { connect } from "react-redux";

const Button = ({ btnName, icon,length }) => {

  return (
    <div className="header-button">
      <div className="header-length">
        <p className="length-div">{length}</p>
      </div>
      <button className="header-btn">
        {btnName}
        {icon}
      </button>
      <button className="header-icon-btn">
        {icon}
      </button>
    </div>
  );
};

export default connect(null)(Button);

