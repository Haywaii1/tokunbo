import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";



export function Header() {
    return(
        <div >
            <nav>
        <ul className="nbar">
          <li className="nav-link">
            <NavLink to="/" 
            exact={true}
              className="nav-link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className="nav-link" 
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className="nav-link"
              >
              Buy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="categories"
              className="nav-link"
            >
              Browse Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="nav-link"            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pages"
              className="nav-link"            >
              Pages
            </NavLink>
          </li>
          <div>
            <div>
              <input
                type="text"
                placeholder="Search for products"
                style={{ height: "20px", width: "200px" }}
              />
              <i
                className="fa fa-search"
                aria-hidden="true"
                style={{
                  padding: "5px 20px 5px 20px",
                  backgroundColor: "red",
                  borderRadius: "10px",
                }}
              ></i>
            </div>
          </div>
          <li>
            <NavLink
              to="/signup"
              className="nav-link"            >
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="nav-link"
              >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/checkout"
              style={{ textDecoration: "none", color: "white", }}
              
            >
              <FontAwesomeIcon icon={faShoppingCart} className="cart-icon"/>
            </NavLink>
          </li>
        </ul>
      </nav>
        </div>
    )
}