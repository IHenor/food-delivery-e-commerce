import React from "react";
import "./InputName.css";

const InputName = ({ name, className }) => {
  return (
    <>
      <h1>{name}</h1>
      <input className={className} type="name" placeholder={name} />
    </>
  );
};

export default InputName;
