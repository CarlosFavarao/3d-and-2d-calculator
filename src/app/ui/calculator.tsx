'use client'

import { Button, ClearEqualsButton, OperatorsButton } from "@/app/ui/buttons";
import { Display } from "@/app/ui/display";
import { useState } from "react";

export default function Calculator() {
    const [values, setValues] = useState([0, 0])
    const [current, setCurrent] = useState(0)
    const [operator, setOperator] = useState<string | null>(null)
    const [display, setDisplay] = useState("0")

    const clearDisplay = () => {
        setValues([0, 0])
        setCurrent(0)
        setOperator(null)
        setDisplay("0")
    }

    const handleClick = (label: string) => {
    if (!isNaN(Number(label)) || label === ".") {
        setDisplay(prev => prev === "0" && label !== "." ? label : prev + label)
        setValues(prev => {
            const newValues = [...prev]
            newValues[current] = parseFloat((prev[current] === 0 && label !== "." ? "" : prev[current].toString()) + label)
            return newValues
        });
    } else if (["+", "-", "*", "/"].includes(label)) {
        setOperator(label)
        setCurrent(1)
        setDisplay("0")
    } else if (label === "=") {
        if (operator) {
            let result = 0
            switch (operator) {
                case "+":
                    result = values[0] + values[1]
                    break
                case "-":
                    result = values[0] - values[1]
                    break
                case "*":
                    result = values[0] * values[1]
                    break
                case "/":
                    result = values[1] !== 0 ? values[0] / values[1] : NaN
                    break
            }
            setValues([result, 0])
            setCurrent(0)
            setOperator(null)
            setDisplay(isNaN(result) ? "Erro" : result.toString())
        }
    } else if (label === "C") {
        clearDisplay()
    }
};


    return (
        <div className="justify flex">
            <div className="bg-gray-700 rounded-2xl min-w-90 grid grid-cols-4 gird-rows-5 gap-[3px] p-4">
                <Display value={operator}/>
                <div className="col-span-3">
                    <Display value={display} />
                </div>
                <div className="col-span-3">
                    <ClearEqualsButton label="C" onClick={handleClick} />
                </div>
                <ClearEqualsButton label="=" onClick={handleClick} /> 
                <Button label="7" onClick={handleClick} />
                <Button label="8" onClick={handleClick} />
                <Button label="9" onClick={handleClick} />
                <OperatorsButton label="+" onClick={handleClick} /> 
                <Button label="4" onClick={handleClick} />
                <Button label="5" onClick={handleClick} />
                <Button label="6" onClick={handleClick} />
                <OperatorsButton label="-" onClick={handleClick} /> 
                <Button label="1" onClick={handleClick} />
                <Button label="2" onClick={handleClick} />
                <Button label="3" onClick={handleClick} />
                <OperatorsButton label="*" onClick={handleClick} />
                <div className="bg-black rounded"></div> 
                <Button label="0" onClick={handleClick} />
                <Button label="." onClick={handleClick} />
                <OperatorsButton label="/" onClick={handleClick} />   
            </div>
        </div>
    );
}