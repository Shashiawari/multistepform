import React from "react";
import "./Preloader.css"; // Import corresponding CSS for styling the preloader

const Preloader = () => {
  return (
    <div >
      <div className="preloader-container ">
        <div className="preloader-spinner"></div>
      </div>
      <h1 className="my-5 te" style={ {fontFamily:"Rubik"}}>
        Finding learning path recomendations based on your responses
      </h1>
    </div>
  );
};

export default Preloader;
