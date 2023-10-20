import React from "react";
import "../order/OrderItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import whooperImage from "../food-item-block/whooper.png";

function OrderItem() {
  return (
    <div className="order-item-card">
      <div className="order-item-content">
        <h1>Title</h1>
        <h2>5$</h2>
        <div className="order-item-btns">
          <div className="add-sub">
            <button>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <div className="quantity">15</div>
            <button>
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
          <button className="delete">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      <div className="order-item-image">
        <img src={whooperImage} alt="" />
      </div>
    </div>
  );
}

export default OrderItem;
