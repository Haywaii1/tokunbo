import React, { useState } from "react";

export function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState("");

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

    return (
        
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
                    placeholder="email"
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
                <div>
                    <button id="loginbutton" type="submit" >Login</button>
                </div>
            </form>
        </div>
    )
}


