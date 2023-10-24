import React from "react";
import "../nav-bar/NavBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/" className="site-title active">
          Site Name
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/Restorants">Restorant</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
        </ul>
      </div>

      <div className="nav-buttons">
        <div className="nav-search"></div>
        <button className="nav-cart">
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
