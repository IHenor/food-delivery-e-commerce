import React from "react";
import "../order/Order.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Order() {
  return (
    <div className="order-card">
      <div className="date">12/12/2012</div>
      <div className="order-details">
        <div className="order-name">
          <h2>Burger king</h2>
          <h1>cheese burger,ham burger</h1>
        </div>
        <div className="order-btns">
          <button>
            <FontAwesomeIcon icon={faReceipt} />
          </button>
          <div className="order-price">$16</div>
        </div>
      </div>
      <div className="locations">
        <FontAwesomeIcon icon={faLocationDot} />
        Location peja city gang gang gang gang
      </div>
    </div>
  );
}

export default Order;
