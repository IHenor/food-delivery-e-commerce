import React from "react";
import "./Shop.css";
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
import image1 from "../../assets/Images/Vegetables.png";
import image2 from "../../assets/Images/Beer.jpg";
import image3 from "../../assets/Images/Chips.jpg";
import image4 from "../../assets/Images/Fish.jpg";
import image5 from "../../assets/Images/Chicken.jpg";
import image6 from "../../assets/Images/Beef.jpg";
import image15 from "../../assets/Images/interex.png";
import image16 from "../../assets/Images/viva-fresh-store.png";
import image17 from "../../assets/Images/Target-logo-1.png";
import image18 from "../../assets/Images/Express_Clothing_Logo.SVG.png";

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
        <FoodType image={image1} name="Vegetables" />
        <FoodType image={image2} name="Beer" />
        <FoodType image={image3} name="Chips" />
        <FoodType image={image4} name="Fish" />
        <FoodType image={image5} name="Chicken" />
        <FoodType image={image6} name="Beef" />
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
        <FoodBlock image={image15} name="INTEREX" />
        <FoodBlock image={image16} name="Viva Fresh Store" />
        <FoodBlock image={image17} name="Target" />
        <FoodBlock image={image18} name="EXpress" />
        <FoodBlock image={image15} name="INTEREX" />
        <FoodBlock image={image16} name="Viva Fresh Store" />
        <FoodBlock image={image17} name="Target" />
        <FoodBlock image={image18} name="EXpress" />
        <FoodBlock image={image15} name="INTEREX" />
        <FoodBlock image={image16} name="Viva Fresh Store" />
        <FoodBlock image={image17} name="Target" />
        <FoodBlock image={image18} name="EXpress" />
      </div>
    </div>
  );
}

export default Shop;
