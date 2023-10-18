import React from "react";
import { Link } from "react-router-dom";


export function Roomlist () {
    
    return(
        
         <>
         <h1>Roomlist</h1>
         <Link to="/book/1">Room 1</Link>
         <Link to="/book/2">Room 2</Link>
         <br />
         <Link to="/book/new">New Book</Link>
     </>
        )
};