import Calculator from "../ui/calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Calculadora Gambs",
    description: "Calculadora simples, cheia de esqueminhas"
}

export default function Page() {
    return(
        <div className="flex justify-center items-center h-screen"> 
            <Calculator />
        </div>
    )    
}