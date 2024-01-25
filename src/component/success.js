import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export function Success() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="success-container">
        <div className="success-container2">
          <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
          <div>
            <h4>Thank You Temi</h4>
          </div>
          <div>Your order is being processed</div>
          <div style={{ margin: "10px 0px 20px 0px", padding: "10px" }}>
            we'll send you a confirmation email once order is confirmed
          </div>

          <Link
            to="/home"
            type="button"
            className="success-button"
            style={{ marginTop: "20px" }}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
}
