import React from "react";

const Loader = () => {
  return (
    // <div className="loading">
    //   <span>Loading...</span>
    // </div>
    <div className="loader-container">
      <div className="loader">
        <div className="square">
          <div className="box"></div>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Loader;
