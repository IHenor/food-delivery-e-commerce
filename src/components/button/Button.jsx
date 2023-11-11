import React from "react";
import "./Button.css";

const Button = ({ name, className, onClick }) => {
  return (
    <button id="button" className={className} onClick={onClick} type="button">
      <h1>{name}</h1>
    </button>
  );
};

export default Button;
