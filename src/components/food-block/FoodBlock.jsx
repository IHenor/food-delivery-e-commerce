import React from "react";
import "../food-block/FoodBlock.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function FoodBlock() {
  return (
    <>
      <div className="food-card">
        <div className="card-image flex">
          <div className="rating">
            <FontAwesomeIcon icon={faStar} /> 5.0
          </div>
          <button className="like">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
        <div className="card-description flex">
          <h1>City Sandwitches and Coffe</h1>
          <div className="info flex">
            <div className="min-info">
              <h2>20-30min</h2>
            </div>
            <div className="min-info">
              <h2>from 2 $</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodBlock;
