import React from "react";
import "./User.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function User() {
  return (
    <div className="restaurants-body">
      <div className="restaurant-title">
        <div className="title-text">
          <Link to="/">
            <h2>
              <FontAwesomeIcon icon={faChevronLeft} /> Back to Main Page
            </h2>
          </Link>
          <h1>User Profile</h1>
        </div>
      </div>
    </div>
  );
}

export default User;
