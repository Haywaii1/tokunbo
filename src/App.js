import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { NotFound } from "./component/NotFound";
import { Signup } from "./component/Signup";
import { Shop } from "./component/Shop";
import { Product } from "./component/Product";
import { Categories } from "./component/Categories";
import { Pages } from "./component/Pages";
import { Login } from "./component/Login";
import "./style.css";
// src/index.js
import "font-awesome/css/font-awesome.min.css";
import { Iron } from "./component/iron";
import { AirFryer } from "./component/airfryer";
import { Blender } from "./component/blender";
import { Generator } from "./component/generator";
import { Pan } from "./component/pan";
import { Sandwich } from "./component/sandwich";
import { Soundbar } from "./component/soundbar";
import { Grill } from "./component/grill";
import { Ps5details } from "./component/ps5details";
import { Ps5Pictures } from "./component/ps5-pictures";
import { Checkout } from "./component/checkout";



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div style={{ background: "aquablue", maxWidth: "100%" }}>
      <div></div>
      <nav>
        <ul className="nbar">
          <li className="nav-link">
            <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              style={{ textDecoration: "none", color: "white" }}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              style={{ textDecoration: "none", color: "white" }}
            >
              Buy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="categories"
              style={{ textDecoration: "none", color: "white" }}
            >
              Browse Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pages"
              style={{ textDecoration: "none", color: "white" }}
            >
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
              style={{ textDecoration: "none", color: "white" }}
            >
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="categories" element={<Categories />} />
        <Route path="pages" element={<Pages />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/iron" element={<Iron />} />
        <Route path="/airfryer" element={<AirFryer />} />
        <Route path="/blender" element={<Blender />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/pan" element={<Pan />} />
        <Route path="/sandwich" element={<Sandwich />} />
        <Route path="/soundbar" element={<Soundbar />} />
        <Route path="/grill" element={<Grill />} />
        <Route path="/ps5details" element={<Ps5details />} />
        <Route path="/ps5-pictures" element={<Ps5Pictures />}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
      <div>
        <footer>
          <div className="footer1">
            <h3>Shop</h3>
            <a>Air Conditioner</a>
            <a>Television</a>
            <a>Washing Machine</a>
            <a>Electric Cooker</a>
            <a>Others</a>
          </div>
          <div className="footer1">
            <h3>Browse</h3>
            <a>LG</a>
            <a>Hisense</a>
            <a>Samsung</a>
            <a>Maxi</a>
            <a>Others</a>
          </div>
          <div className="footer1">
            <h3>Location</h3>
            <h4>46, Ifeloju, Agege, lagos, Nigeria.</h4>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
