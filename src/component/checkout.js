import React from "react";
import pots from "./image/pots.jpg"
import { Naira } from "./components/naira";
import { Delete } from "./components/delete";


export function Checkout () {
    return ( 
        <div className="checkout-container">
            <div className="checkout-image-container">
                <div>
                    <img src={pots} alt="Pots" className="checkout-image"/>
                </div>
                <div>
                    <h3 style={{color:"blue"}}>Hisense Chiken Wraps Grill</h3>
                    <div className="naira" ><Naira />31,000</div>
                    <div style={{marginTop:"10px", color:"red"}}><Delete />Remove</div>
                </div>
            </div>
            <div className="checkout-total">
                <div style={{margin:"10px", display:"flex"}}>
                    <div style={{marginRight:"20px"}}>Order Summary</div>
                    <div>one item</div>
                </div>
                <div style={{margin:"10px", display:"flex"}}>
                    <div style={{marginRight:"66px"}}>Sub-Total</div>
                    <div className="naira"><Naira />31,000</div>
                </div>
                <div style={{margin:"10px", display:"flex"}}>
                    <div style={{marginRight:"66px"}}>Sub-Total</div>
                    <div className="naira"><Naira />31,000</div>
                </div>
                <div style={{margin:"10px", display:"flex"}}>
                    <div style={{marginRight:"100px"}}>Total</div>
                    <div className="naira"><Naira />31,000</div>
                </div>
                <button
                    className="add-to-cart-button"
                >
                    checkout
                </button>

            </div>
        </div>
    )
}