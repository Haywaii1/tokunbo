import React, { useState } from "react";
import { Link } from "react-router-dom";
import ps5 from "./image/ps5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export function Ps5details() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="ps5-details-container">
      <Link
        className="image-container"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className="ps5details"
        to="/ps5-pictures"
      >
        <img
          src={ps5}
          alt="PS5"
          className={`image ${isHovered ? "hovered" : ""}`}
        />
      </Link>
      <div className="ps5-details">
        <h3 style={{ color: "blue" }}>SONY PLAYSTATION 5</h3>
        <h5 style={{ color: "blue", fontWeight: "lighter" }}>#46500</h5>

        <button className="add-to-cart-button">
          <FontAwesomeIcon
            icon={faShoppingCart}
            // style={{ color: "brown", marginRight: "5px" }}
            className="font-style"
          />
          Add to Cart
        </button>
        <h5 style={{ width: "400px", fontWeight: "normal" }}>
          Explore uncharted virtual territories and slay dragons with this sleek
          Sony PlayStation 5 gaming console. The 825GB SSD allows ultra-fast
          load times, while 3-D audio output produces crisp acoustics. This Sony
          PlayStation 5 gaming console supports haptic feedback for effortless
          communication in multiplayer setups, and adaptive triggers allow
          immersive gameplay.
        </h5>
      </div>
    </div>
  );
}
