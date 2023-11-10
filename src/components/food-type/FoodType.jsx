import React from "react";
import "../food-type/FoodType.css";

function FoodType({ image, name }) {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundColor: "gray ",
  };

  return (
    <div className="type-image" style={style}>
      <h1 className="title">{name}</h1>
    </div>
  );
}

export default FoodType;
