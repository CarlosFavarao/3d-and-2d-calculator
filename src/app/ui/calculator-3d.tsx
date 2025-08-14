import Calculator from "./calculator"

export default function Calculator3D(){
    return(
        <div className="flex justify-center items-center h-screen ">
            <div className="calculator-3d container">
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