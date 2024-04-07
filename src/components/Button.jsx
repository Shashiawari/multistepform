import React from "react";

const Button = ({ url, text, isActive, handleClick }) => {
  return (
    <div className={`mb-2  ${isActive ? "active" : ""}`}>
      <button className="btn" onClick={handleClick}>
        <div className="d-flex align-items-center">
          <img src={url} height="50px" alt={text} />
          <p className="mx-3 mt-3">{text}</p>
        </div>
      </button>
    </div>
  );
};

export default Button;
