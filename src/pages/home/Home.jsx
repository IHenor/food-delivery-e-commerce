import FoodBlock from "components/food-block/FoodBlock";
import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-body">
      <div className="restaurant-body">
        <div className="restaurant-title">
          <h1>Restaurants</h1>
        </div>
        <div className="restaurant-content">
          <FoodBlock />
          <FoodBlock />
          <FoodBlock />
          <FoodBlock />
          <FoodBlock />
          <FoodBlock />
          <FoodBlock />
          <FoodBlock />
          <FoodBlock />
        </div>
      </div>
    </div>
  );
}

export default Home;
