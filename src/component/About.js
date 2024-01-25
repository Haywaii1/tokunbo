import React from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";


export function About() {
  return (
    <div>
        <div><Header /></div>
      <h1>About Us</h1>
      <div style={{position:"absolute", bottom:"0", width:"100%" }}><Footer /></div>
    </div>
  );
}
