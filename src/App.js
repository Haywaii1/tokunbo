import React from "react";
import { Route, Routes } from "react-router-dom";
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
import { Success } from "./component/success";




// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div style={{ background: "aquablue", maxWidth: "100%" }}>
      <div></div>
      
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
        <Route path="/success" element={<Success />}/>
      </Routes>
      
    </div>
  );
}

export default App;
