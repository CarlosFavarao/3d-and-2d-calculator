'use client'

import { useEffect, useState } from "react";
import Calculator from "./calculator"

export default function Calculator3D(){
    const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 })

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event
            
            const rotateY = (clientX / window.innerWidth - 0.5) * 60
            const rotateX = -(clientY / window.innerHeight - 0.5) * 60

            setRotation({ rotateX, rotateY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }

    }, [])

    return(
        <div className="flex justify-center items-center h-screen ">
            <div 
                className="calculator-3d container" 
                style={{transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`}}
            >
                <div className="front side" ><Calculator/></div>
                <div className="back side" ></div>
                <div className="left side" ></div>
                <div className="right side" ></div>
                <div className="bottom side" ></div>
                <div className="top side" ></div>
            </div>
        </div>
    )
}