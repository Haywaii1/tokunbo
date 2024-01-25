import React from "react";
import pots from "./image/pots.jpg";
import { Naira } from "./components/naira";
import { Delete } from "./components/delete";
import { Link } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export function Checkout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="checkout-container">
        <div className="checkout-image-container">
          <div>
            <img src={pots} alt="Pots" className="checkout-image" />
          </div>
          <div style={{}}>
            <div style={{ display: "flex" }}>
              <h3 style={{ color: "blue" }}>Hisense Chiken Wraps Grill</h3>
              <div
                className="naira"
                style={{ marginLeft: "155px", marginTop: "20px" }}
              >
                <Naira />
                31,000
              </div>
            </div>
            <div style={{}}>
              <Delete />
            </div>
          </div>
        </div>
        <div className="checkout-total">
          <div style={{ margin: "10px", display: "flex" }}>
            <div style={{ marginRight: "20px", fontWeight: "bold" }}>
              Order Summary
            </div>
            <div style={{ fontWeight: "bold" }}>one item</div>
          </div>
          <div style={{ margin: "10px", display: "flex" }}>
            <div style={{ marginRight: "66px", fontWeight: "bold" }}>
              Sub-Total
            </div>
            <div className="naira">
              <Naira />
              31,000
            </div>
          </div>
          <div style={{ margin: "10px", display: "flex" }}>
            <div style={{ marginRight: "66px", fontWeight: "bold" }}>
              Sub-Total
            </div>
            <div className="naira">
              <Naira />
              31,000
            </div>
          </div>
          <div style={{ margin: "10px", display: "flex" }}>
            <div style={{ marginRight: "100px", fontWeight: "bold" }}>
              Total
            </div>
            <div className="naira">
              <Naira />
              31,000
            </div>
          </div>
          <Link to="/success" className="add-to-cart-button">
            checkout
          </Link>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
}
