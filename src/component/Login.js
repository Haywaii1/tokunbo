import React, { useState } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";


export function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState("");
    const [isChecked, setChecked] = useState(false);

    const validateEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailRegex.test(email);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleEmailChange = (e) => {
        // eslint-disable-next-line no-restricted-globals
        const inputEmail = event.target.value;
        setEmail(inputEmail);
        setIsValid(validateEmail(inputEmail));
    };
    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    }

    return (
        <div>
            <div><Header /></div>
        
        <div id="login">
            <form id="login1">
                <h3 style={{color:"red"}}>Login</h3>
                <div>
                {isValid ? (
                        console.log('success')
                        ) : (
                            null
                        )}
                        
                    <input
                    className="loginform"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    />
                </div>
                <div>
                    <input 
                    className="loginform"
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={handlePasswordChange}
                    />
                </div>
                <div style={{padding: "5px", marginRight: "170PX"}}>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <label style={{fontSize: "13px", marginTop: "0px"}}>Remember Password</label>
                </div>
                <div>
                    <button id="loginbutton" type="submit" >Login</button>
                </div>
            </form>
        </div>
        <div><Footer /></div>
        </div>
    )
}


