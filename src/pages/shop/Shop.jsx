import React from "react";
import "./Shop.css";
import Lunch from "../../assets/Images/Lunch.png";
import FoodBlock from "components/food-block/FoodBlock";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faClock,
  faMoneyBill1Wave,
  faBars,
  faChevronLeft,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import FoodType from "components/food-type/FoodType";

function Shop() {
  return (
    <div className="shops-body">
      <div className="shop-title">
        <div className="title-text">
          <Link to="/">
            <h2>
              <FontAwesomeIcon icon={faChevronLeft} /> Back to Main Page
            </h2>
          </Link>
          <h1>Shops</h1>
        </div>
      </div>
      <div className="shop-blocks">
        <FoodType image={Lunch} name="Vegetables" />
        <FoodType image={Lunch} name="Beer" />
        <FoodType image={Lunch} name="Chips" />
        <FoodType image={Lunch} name="Fish" />
        <FoodType image={Lunch} name="Chicken" />
        <FoodType image={Lunch} name="Beef" />
      </div>
      <div className="shop-filters">
        <div className="filter-types">
          <div className="filter active">
            <FontAwesomeIcon icon={faBars} />
            <p>All</p>
          </div>
          <div className="filter">
            <FontAwesomeIcon icon={faHeart} />
            <p> Favorites</p>
          </div>
          <div className="filter">
            <FontAwesomeIcon icon={faStar} />
            <p> Top Rating</p>
          </div>
          <div className="filter">
            <FontAwesomeIcon icon={faClock} />
            <p> Fastest Delivery</p>
          </div>
          <div className="filter">
            <FontAwesomeIcon icon={faMoneyBill1Wave} />
            <p> Higest price</p>
          </div>
        </div>
        <div className="filter-slider">
          <div className="filter">
            Quisine:all <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className="filter">
            Delivery:all <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>
      <div className="shops">
        <FoodBlock />
        <FoodBlock />
        <FoodBlock />
        <FoodBlock />
        <FoodBlock />
        <FoodBlock />
        <FoodBlock />
      </div>
    </div>
  );
}

export default Shop;
