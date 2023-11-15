import Discount from "components/discount/Discount";
import React from "react";
import "./Home.css";
import FoodType from "components/food-type/FoodType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FoodBlock from "components/food-block/FoodBlock";
import { Link } from "react-router-dom";
import ShopOffer from "components/shop-offer/ShopOffer";
import image1 from "../../assets/Images/Image1.png";
import image2 from "../../assets/Images/Image2.png";
import image3 from "../../assets/Images/Image3.png";
import image4 from "../../assets/Images/Image4.png";
import image5 from "../../assets/Images/image5.png";
import image6 from "../../assets/Images/Image6.png";
import image7 from "../../assets/Images/Image7.png";
import image8 from "../../assets/Images/Image8.png";
import image9 from "../../assets/Images/sandwich.png";
import image10 from "../../assets/Images/doner.png";
import image11 from "../../assets/Images/hummus.png";
import image12 from "../../assets/Images/korea.png";
import image13 from "../../assets/Images/pizza.png";
import image14 from "../../assets/Images/pie.png";
import image15 from "../../assets/Images/interex.png";
import image16 from "../../assets/Images/viva-fresh-store.png";
import image17 from "../../assets/Images/Target-logo-1.png";
import image18 from "../../assets/Images/Express_Clothing_Logo.SVG.png";

function Home() {
  return (
    <div className="home-body">
      <div className="restaurant-body">
        <div className="discounts">
          <Discount />
          <Discount />
          <Discount />
        </div>
        <div className="restaurant-header">
          <h1>Restaurants</h1>
          <Link to="/Restorants">
            <h2>
              See all <FontAwesomeIcon icon={faArrowRight} />
            </h2>
          </Link>
        </div>
        <div className="restaurant-content">
          <div className="food-type">
            <FoodType image={image8} name="Lunch" />
            <FoodType image={image1} name="Italian" />
            <FoodType image={image2} name="Street food" />
            <FoodType image={image3} name="Sushi" />
            <FoodType image={image4} name="Asian" />
            <FoodType image={image5} name="Vegetarian" />
            <FoodType image={image7} name="Homecooked" />
            <FoodType image={image6} name="Coffe & more" />
          </div>
          <div className="food-block">
            <FoodBlock image={image9} name="City Sandwitches and Coffe" />
            <FoodBlock image={image10} name="Kochi Korean Food" />
            <FoodBlock image={image11} name="Easy Hummus Izraeli Food" />
            <FoodBlock image={image12} name="Camorra Pica and Beer" />
            <FoodBlock image={image13} name="Samir’s Original Turkish Kebab" />
            <FoodBlock image={image14} name="Granny’s Traditional Food" />
          </div>
        </div>
      </div>
      <div className="shop-body">
        <div className="shop-header">
          <h1>Shop</h1>
          <Link to="/Shop">
            <h2>
              See all <FontAwesomeIcon icon={faArrowRight} />
            </h2>
          </Link>
        </div>
        <div className="shop-content">
          <div className="food-type">
            <ShopOffer />
            <ShopOffer />
            <ShopOffer />
          </div>
          <div className="food-block">
            <FoodBlock image={image15} name="INTEREX" />
            <FoodBlock image={image16} name="Viva Fresh Store" />
            <FoodBlock image={image17} name="Target" />
            <FoodBlock image={image18} name="EXpress" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
