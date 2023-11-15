import { React, useState } from "react";
import "../nav-bar/NavBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import siteLogo from "assets/Images/SiteLogo.png";
import OrderItem from "components/order/OrderItem";
import Button from "components/button/Button";

function NavBar() {
  const [cartState, setCartState] = useState(false);

  function cartHandle() {
    setCartState(!cartState);
  }

  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/" className="site-title active">
          <img src={siteLogo} alt="" />
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/Restorants">
              <h1 className="h1">Restorants</h1>
            </Link>
          </li>
          <li>
            <Link to="/Shop">
              <h1 className="h1">Shops</h1>
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-buttons">
        <input
          className="nav-search"
          type="text"
          id="search-input"
          placeholder="Search..."
        ></input>
        <button className="nav-cart" onClick={cartHandle}>
          <div className="cart-number">3</div>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
        <button className="nav-user">
          <Link to="/User">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </button>
      </div>
      {cartState ? (
        console.log("lmao")
      ) : (
        <div className="cart">
          <div className="titlecard">
            <div className="cart-title">
              <h1>Cart</h1>
              <button onClick={cartHandle}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
          <div className="cart-content">
            <div className="cart-orders">
              <OrderItem />
              <OrderItem />
            </div>
            <div className="cart-price">
              <div className="price-content">
                <h2>Order Price:</h2>
                <h3>18$</h3>
              </div>
              <Button name="Order Now" className="shop" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
