import React, { useState } from "react";
import "./style2.css";

export function Signup () {

    const [surname, setSurName] = useState("")
    const [firstname, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [isValid, setIsValid] = useState("")


    

    const handlePhoneNumberChange = (e) => {
        const inputPhoneNumber = e.target.value.replace(/[^0-9-]/g, '');
        const isValidPhoneNumber = /^(\+?\d{1,4}[-.]\d{1,4}[-.]\d{1,10})$/.test(inputPhoneNumber);
        setPhoneNumber(inputPhoneNumber);
        setIsValid(isValidPhoneNumber);
    };

    const handleSubmit = (e) => {
               e.preventDefault()
               if (isValid) {
                console.log('Sucess', phoneNumber)
               }else {
                console.error('Invalid Phone Number')
               }
    };


    return (
        <div id="signup">
            <form onSubmit={handleSubmit} id="signup1">
            <h3 style={{color:"red"}}>Sign up</h3>
                
                <div>
                    <input
                    className="signupform"
                    type="Surname"
                    placeholder="Surname"
                    value={surname}
                    onChange={(e) => setSurName(e.target.value)}
                    />
                </div>                
               <div>
                    <input
                    className="signupform"
                        type="text"
                        value={firstname}
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        />
               </div>
               <div>
                    <input
                    className="signupform"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}  
                        />
                </div>               
                    <div>
                    <input
                        className="signupform"
                        type="tel"
                        id="phoneNumber"
                        placeholder="Phone Number"                        
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}                        
                    />
                    </div>
                <div>         
                    <button id="signupbutton" type="submit" disabled={!isValid}>Submit</button>
                </div>
                            
            </form>
        </div>
    )
}