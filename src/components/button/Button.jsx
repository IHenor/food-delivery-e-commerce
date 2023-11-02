import React from "react";
import "./Button.css";

const Button = ({ name, className, onClick }) => {
  return (
    <button id="button" className={className} onClick={onClick} type="button">
      {name}
    </button>
  );
};

export default Button;
