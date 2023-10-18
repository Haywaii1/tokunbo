import React, { useEffect, useState } from "react"
import axios from "axios";

export function NewBook() {
    const [data, setData] = useState("")

    useEffect(() => {
        axios.get("https:jsonplaceholder.typicode.com/comments").then((response) => {
            setData(response.data[0].name)
        })
    })
    
    return(
       <h1>Newbook {data}</h1>
    )   
};