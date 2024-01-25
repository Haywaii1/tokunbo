import React, { useState } from "react";
import picture1 from "./image/electric-iron.jpg";
import picture2 from "./image/advert.jpg";
import picture3 from "./image/electric-kettle.jpg";
import picture4 from "./image/microwave.jpg";
import picture5 from "./image/blender.jpg";
import picture6 from "./image/sandwichmaker.jpg";
import picture7 from "./image/fridge.jpg";
import picture8 from "./image/chair.jpg";
import picture9 from "./image/sandwichgrill.jpg";
import picture10 from "./image/induction.jpg";
import picture11 from "./image/pan.webp";
import picture12 from "./image/pots.jpg";
import picture13 from "./image/AC.jpg";
import picture14 from "./image/airfryer.jpg";
import picture15 from "./image/washingmachine.jpg";
import picture16 from "./image/oven.jpg";
import picture17 from "./image/television.jpg";
import picture18 from "./image/ps5.jpg";
import picture19 from "./image/ricecooker.jpg";
import picture20 from "./image/generator.jpg";
import picture21 from "./image/soundbar.jpg";
import { Link } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

let url =
  "https://img.freepik.com/free-photo/realtor-showing-property_1048-2936.jpg?w=740&t=st=1689365778~exp=1689366378~hmac=aaba792aa97f26619f0a893783b8e07c3ccff745a7cc3b25a8e75f1173fbea68";

export function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="firstline">
        <div className="firstline1">
          <a href="https://example.com">
            <img
              src={picture1}
              alt="home"
              width="240px"
              height="170px"
              style={{
                margin: "20px",
                boxShadow: "0px 1px 1px 0px",
                borderRadius: "15px",
              }}
            />
          </a>
          <a href="https://example.com">
            <img
              src={picture1}
              alt="home"
              width="240px"
              height="170px"
              style={{
                margin: "20px",
                boxShadow: "0px 1px 1px 0px",
                borderRadius: "15px",
              }}
            />
          </a>
        </div>
        <div>
          <a href="https://example.com">
            <img
              src={picture2}
              width="684px"
              height="381px"
              alt="office"
              style={{ margin: "20px" }}
            />
          </a>
        </div>
        <div className="firstline3">
          <a href="https://example.com">
            <img
              src={picture3}
              alt="house"
              width="240px"
              height="170px"
              style={{
                margin: "20px",
                boxShadow: "0px 1px 1px 0px",
                borderRadius: "15px",
              }}
            />
          </a>
          <a href="https://example.com">
            <img
              src={picture3}
              alt="house"
              width="240px"
              height="170px"
              style={{
                margin: "20px",
                boxShadow: "0px 1px 1px 0px",
                borderRadius: "15px",
              }}
            />
          </a>
        </div>
      </div>
      <div className="secondrow">
        <a href="https://google.com">
          <img
            src={picture4}
            alt="microwave"
            style={{
              padding: "100px 50px 20px 10px",
              boxShadow: "0px 1px 1px 0px",
              borderRadius: "15px",
            }}
          />
          <h3>Microwave</h3>
        </a>
        <div className="secondrow1">
          <a href="https://google.com">
            <img
              src={picture5}
              alt="Blender"
              width="200px"
              style={{ boxShadow: "0px 1px 1px 0px", borderRadius: "15px" }}
            />
            <h3>Blender</h3>
          </a>
          <a href="https://google.com">
            <img
              src={picture6}
              alt="Sandwich"
              style={{
                boxShadow: "0px 1px 1px 0px",
                borderRadius: "15px",
                margin: "0px 20px 0px 20px",
              }}
            />
            <h3>Sandwich Maker</h3>
          </a>
        </div>
        <a href="https://google.com">
          <img
            src={picture7}
            alt="Fridge"
            style={{ boxShadow: "0px 1px 1px 0px", borderRadius: "15px" }}
          />
          <h3>Fridge</h3>
        </a>
      </div>
      <div style={{ margin: "0px 0px 0px 170px" }}>
        <div>
          <h3 style={{ color: "blue", margin: "70px 0px 20px 100px" }}>
            BEST OF THE WEEK
          </h3>
        </div>
        <div className="thirdrow">
          <a href="google.com">
            <img
              src={picture8}
              alt="Chair"
              width="400px"
              height="405px"
              style={{ boxShadow: "0px 1px 1px 0px", borderRadius: "15px" }}
            />
          </a>
          <div className="thirdrow1">
            <a href="google.com">
              <img
                src={picture9}
                alt="Sandwich Grill"
                width="200px"
                height="200px"
                style={{ boxShadow: "0px 1px 1px 0px", borderRadius: "15px" }}
              />
              <h3
                style={{
                  color: "white",
                  padding: "20px",
                  backgroundColor: "orange",
                  borderRadius: "15px",
                  fontSize: "15px",
                }}
              >
                Sandwich Grill
              </h3>
            </a>
            <a href="google.com" style={{ margin: "0px 0px 0px 50px" }}>
              <img
                src={picture10}
                alt="Induction Burner"
                width="200px"
                height="200px"
                style={{ boxShadow: "0px 1px 1px 0px", borderRadius: "15px" }}
              />
              <h3
                style={{
                  color: "white",
                  padding: "20px",
                  backgroundColor: "orange",
                  borderRadius: "15px",
                  fontSize: "15px",
                }}
              >
                Induction Burner
              </h3>
            </a>
            <a href="google.com" style={{ margin: "0px 0px 0px 50px" }}>
              <img
                src={picture11}
                alt="Non-Stick Pan"
                width="200px"
                height="200px"
                style={{ boxShadow: "0px 1px 1px 0px", borderRadius: "15px" }}
              />
              <h3
                style={{
                  color: "white",
                  padding: "20px",
                  backgroundColor: "orange",
                  borderRadius: "15px",
                  fontSize: "15px",
                }}
              >
                Non-Stick Pan
              </h3>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="fourthrow">
          <a href="google.com" style={{ margin: "0px 50px 0px 0px" }}>
            <img
              src={picture12}
              alt="Pots"
              height="200px"
              style={{ boxShadow: "0px 1px 1px 0px", borderRadius: "15px" }}
            />
            <h3>Non-Stick Pots</h3>
          </a>
          <a href="google.com" style={{ margin: "0px 50px 0px 0px" }}>
            <img
              src={picture13}
              alt="Air Conditioners"
              height="200px"
              style={{ boxShadow: "0px 1px 1px 0px", borderRadius: "15px" }}
            />
            <h3>Air Conditioners</h3>
          </a>
          <a href="google.com" style={{ margin: "0px 50px 0px 0px" }}>
            <img
              src={picture14}
              alt="Air fryer"
              height="200px"
              style={{ boxShadow: "0px 1px 1px 0px", borderRadius: "15px" }}
            />
            <h3>Air Fryer</h3>
          </a>
          <a href="google.com" style={{ margin: "0px 30px 0px 0px" }}>
            <img
              src={picture15}
              alt="Washing Machine"
              height="200px"
              style={{ boxShadow: "0px 1px 1px 0px", borderRadius: "15px" }}
            />
            <h3>Washing Machine</h3>
          </a>
        </div>
        <div className="fourthrow">
          <a href="google.com" style={{ margin: "0px 50px 0px 0px" }}>
            <img
              src={picture1}
              alt="Electric Kettle"
              height="200px"
              style={{ boxShadow: "0px 1px 1px 0px", borderRadius: "15px" }}
            />
            <h3>Electric Iron</h3>
          </a>
          <a href="google.com" style={{ margin: "0px 50px 0px 0px" }}>
            <img
              src={picture3}
              alt="Electric Iron"
              height="200px"
              style={{ boxShadow: "0px 1px 1px 0px", borderRadius: "15px" }}
            />
            <h3>Electric Kettle</h3>
          </a>
          <a href="google.com" style={{ margin: "0px 50px 0px 0px" }}>
            <img
              src={picture16}
              alt="Oven"
              height="220px"
              style={{ boxShadow: "0px 1px 1px 0px", borderRadius: "15px" }}
            />
            <h3>Table Top Oven</h3>
          </a>
          <a href="google.com" style={{ margin: "0px 30px 0px 0px" }}>
            <img
              src={picture17}
              alt="Television"
              height="110px"
              style={{ boxShadow: "0px 1px 1px 0px", borderRadius: "15px" }}
            />
            <h3>Television</h3>
          </a>
        </div>
      </div>
      <div style={{ margin: "0px 0px 0px 170px" }}>
        <div>
          <h3 style={{ color: "blue", margin: "70px 0px 20px 100px" }}>
            BEST OF THE WEEK
          </h3>
        </div>
        <div className="thirdrow">
          <Link to="/ps5details">
            <img
              src={picture18}
              alt="Ps5"
              width="400px"
              height="405px"
              style={{
                boxShadow: "0px 1px 1px 0px",
                borderRadius: "15px",
                margin: "0px 20px 0px 100px",
              }}
            />
          </Link>
          <div className="thirdrow1">
            <a href="google.com">
              <img
                src={picture19}
                alt="Sandwich Grill"
                width="200px"
                height="200px"
                style={{ boxShadow: "0px 1px 1px 0px", borderRadius: "15px" }}
              />
              <h3
                style={{
                  color: "white",
                  padding: "20px",
                  backgroundColor: "orange",
                  borderRadius: "15px",
                  fontSize: "15px",
                }}
              >
                Sandwich Grill
              </h3>
            </a>
            <a href="google.com" style={{ margin: "0px 0px 0px 50px" }}>
              <img
                src={picture20}
                alt="Induction Burner"
                width="200px"
                height="200px"
                style={{ boxShadow: "0px 1px 1px 0px", borderRadius: "15px" }}
              />
              <h3
                style={{
                  color: "white",
                  padding: "20px",
                  backgroundColor: "orange",
                  borderRadius: "15px",
                  fontSize: "15px",
                }}
              >
                Induction Burner
              </h3>
            </a>
            <a href="google.com" style={{ margin: "0px 0px 0px 50px" }}>
              <img
                src={picture21}
                alt="Non-Stick Pan"
                width="200px"
                height="200px"
                style={{ boxShadow: "0px 1px 1px 0px", borderRadius: "15px" }}
              />
              <h3
                style={{
                  color: "white",
                  padding: "20px",
                  backgroundColor: "orange",
                  borderRadius: "15px",
                  fontSize: "15px",
                }}
              >
                Non-Stick Pan
              </h3>
            </a>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
