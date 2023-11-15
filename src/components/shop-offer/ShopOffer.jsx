import React from "react";
import "../shop-offer/ShopOffer.css";

function ShopOffer() {
  return (
    <div className="offer-card">
      <div className="offer-content">
        <img src="../../../assets/Imgaes/SiteLogo.png" alt="" />
        <p>Special offers on</p>
        <h1>Ice Cream!</h1>
        <button>Discover</button>
      </div>
    </div>
  );
}

export default ShopOffer;
