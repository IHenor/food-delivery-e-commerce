import React from "react";
import "../discount/Discount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

function Discount() {
  return (
    <div className="discount-card">
      <div className="discount-image">
        <FontAwesomeIcon icon={faHandHoldingDollar} />
      </div>
      <div className="discount-title">
        <h1>Up to 30% off!</h1>
        <h2>only for selected meals</h2>
      </div>
    </div>
  );
}

export default Discount;
