import React from "react";
import "../button/Button.css";

const Button = ({ name, className, onClick }) => {
  return (
    <button className={className} onClick={onClick} type="button">
      {name}
    </button>
  );
};

export default Button;
