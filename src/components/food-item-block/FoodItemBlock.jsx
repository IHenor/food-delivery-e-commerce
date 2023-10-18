import React from "react";
import "../food-item-block/FoodItemBlock.css";
import whooperImage from "../food-item-block/whooper.png";

function FoodItemBlock() {
  return (
    <>
      <div className="food-item-card">
        <div className="card-item-image">
          <img src={whooperImage} alt="" />
        </div>
        <div className="card-item-description">
          <div className="dec-title">
            <h1>Whooper</h1>
            <h2>200cal,150g</h2>
            <div className="hov none">
              <h3>Content:</h3>
              <p>big time stake with perfect taste and smel</p>
            </div>
          </div>

          <div className="dec-btnn">
            <div className="price-tagg">4$</div>
            <div className="price-tag">
              <button className="cart-btnn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodItemBlock;
