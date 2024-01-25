import React from "react";
import iron from "./image/electric-iron.jpg";
import airfryer from "./image/airfryer.jpg";
import blender from "./image/blender.jpg";
import generator from "./image/generator.jpg";
import pan from "./image/pan.webp";
import sandwich from "./image/sandwichmaker.jpg";
import soundbar from "./image/soundbar.jpg";
import sandwichgrill from "./image/sandwichgrill.jpg";
import { Link } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export function Blender() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="product-container">
        <div className="products">
          <Link to="/iron">
            <img
              src={iron}
              alt="Iron"
              className="product-image"
              style={{ width: "150px" }}
            />
          </Link>
        </div>
        <div className="products">
          <Link to="/airfryer">
            <img
              src={airfryer}
              alt="AirFryer"
              className="product-image"
              style={{ width: "150px" }}
            />
          </Link>
        </div>
        <div className="products">
          <Link to="/blender">
            <img
              src={blender}
              alt="Blender"
              className="product-image"
              style={{ width: "150px" }}
            />
          </Link>
        </div>
        <div className="products">
          <Link to="/generator">
            <img
              src={generator}
              alt="Generator"
              className="product-image"
              style={{ width: "150px" }}
            />
          </Link>
        </div>
      </div>

      <div className="product-container">
        <div className="products">
          <Link to="/pan">
            <img
              src={pan}
              alt="Iron"
              className="product-image"
              style={{ width: "150px" }}
            />
          </Link>
        </div>

        <div className="products">
          <Link to="/sandwich">
            <img
              src={sandwich}
              alt="AirFryer"
              className="product-image"
              style={{ width: "150px" }}
            />
          </Link>
        </div>
        <div className="products">
          <Link to="/soundbar">
            <img
              src={soundbar}
              alt="Blender"
              className="product-image"
              style={{ width: "150px" }}
            />
          </Link>
        </div>
        <div className="products">
          <Link to="/grill">
            <img
              src={sandwichgrill}
              alt="Generator"
              className="product-image"
              style={{ width: "150px" }}
            />
          </Link>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
}
