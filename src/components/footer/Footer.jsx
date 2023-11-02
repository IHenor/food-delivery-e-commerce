import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYinYang } from "@fortawesome/free-solid-svg-icons";

import siteLogo from "assets/Images/SiteLogo.png";
import Button from "components/button/Button";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-follow">
        <img src={siteLogo} alt="" />
        <div className="footer-follow-us">
          <h1>Follow Us</h1>
          <Button
            name={<FontAwesomeIcon icon={faYinYang} />}
            className="facebook"
            onClick=""
          />
          <Button name="G" className="google" onClick="" />
        </div>
      </div>
      <div className="footer-content">
        <div className="nav-linkss">
          <ul>
            <li>
              <Link to="/Restorants">
                <h1 className="h1">For the restaurants</h1>
              </Link>
            </li>
            <li>
              <Link to="/Restorants">
                <h1 className="h1">Press center</h1>
              </Link>
            </li>
            <li>
              <Link to="/Restorants">
                <h1 className="h1">Career</h1>
              </Link>
            </li>
            <li>
              <Link to="/Restorants">
                <h1 className="h1">For the costumers</h1>
              </Link>
            </li>
            <li>
              <Link to="/Restorants">
                <h1 className="h1">Discount</h1>
              </Link>
            </li>
            <li>
              <Link to="/Shop">
                <h1 className="h1">Contact Us</h1>
              </Link>
            </li>
          </ul>
        </div>
        <div className="details">
          <h1>© 2022 «Deliveroo»</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
