import React from "react";
import picture from "./image/ps5/ps5.webp";
import pictures from "./image/ps5/ps52.jpg";
import pictures1 from "./image/ps5/ps53.webp";
import pictures2 from "./image/ps5/ps54.jpg";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export function Ps5Pictures() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="ps5-pictures-container">
        <div>
          <img src={picture} alt="PS5" className="ps5-pictures" />
        </div>
        <div>
          <img src={pictures} alt="PS5" className="ps5-pictures" />
        </div>
        <div>
          <img src={pictures1} alt="PS5" className="ps5-pictures" />
        </div>
        <div>
          <img src={pictures2} alt="PS5" className="ps5-pictures" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
