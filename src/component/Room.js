import { useState, useEffect } from "react"
export function Room() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

        useEffect (() => {
            window.addEventListener('resize', handleResize)}, []
            )
    
        return(
            <div>
                {windowWidth}
           </div>
        )   
};