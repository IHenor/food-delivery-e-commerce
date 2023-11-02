import Discount from "components/discount/Discount";
import React from "react";
import "./Home.css";
import FoodType from "components/food-type/FoodType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FoodBlock from "components/food-block/FoodBlock";

function Home() {
  return (
    <div className="home-body">
      <div className="restaurant-body">
        <div className="discounts">
          <Discount />
          <Discount />
          <Discount />
        </div>
        <div className="restaurant-title">
          <h1>Restaurants</h1>
          <h2>
            See all <FontAwesomeIcon icon={faArrowRight} />
          </h2>
        </div>
        <div className="restaurant-content">
          <div className="food-type">
            <FoodType />
            <FoodType />
            <FoodType />
            <FoodType />
            <FoodType />
            <FoodType />
            <FoodType />
            <FoodType />
          </div>
          <div className="food-block">
            <FoodBlock />
            <FoodBlock />
            <FoodBlock />
            <FoodBlock />
            <FoodBlock />
            <FoodBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
