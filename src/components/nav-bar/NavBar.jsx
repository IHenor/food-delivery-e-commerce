import React from "react";
import "../nav-bar/NavBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import siteLogo from "assets/Images/SiteLogo.png";

function NavBar() {
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
        <button className="nav-cart">
          <div className="cart-number">3</div>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
        <button className="nav-user">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
