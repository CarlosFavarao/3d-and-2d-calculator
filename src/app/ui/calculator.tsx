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

    const addNumber = (label: string) => {
        if (label === "." && display.includes(".")) {
            return;
        }

        if (display === "Erro") {
            clearDisplay();
            setValues([Number(label), 0]);
            setDisplay(label);
            setCurrent(0);
            return;
        }

        const newDisplay = (display === "0" && label !== ".") ? label : display + label;
        setDisplay(newDisplay);

        setValues(prev => {
            const newValues = [...prev];
            newValues[current] = parseFloat(newDisplay);
            return newValues;
        })
    }

    const addOperator = (label: string) => {
        setOperator(label);
        setCurrent(1);
        setDisplay("0");
    }

    const calculateResult = () => {
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
    }

    return (
        <div className="justify flex">
            <div className="bg-gray-700 rounded-2xl min-w-90 grid grid-cols-4 gird-rows-5 gap-[3px] p-4">
                <Display value={operator}/>
                <div className="col-span-3">
                    <Display value={display} />
                </div>
                <div className="col-span-3">
                    <ClearEqualsButton label="C" onClick={clearDisplay} />
                </div>
                <ClearEqualsButton label="=" onClick={calculateResult} /> 
                <Button label="7" onClick={addNumber} />
                <Button label="8" onClick={addNumber} />
                <Button label="9" onClick={addNumber} />
                <OperatorsButton label="+" onClick={addOperator} /> 
                <Button label="4" onClick={addNumber} />
                <Button label="5" onClick={addNumber} />
                <Button label="6" onClick={addNumber} />
                <OperatorsButton label="-" onClick={addOperator} /> 
                <Button label="1" onClick={addNumber} />
                <Button label="2" onClick={addNumber} />
                <Button label="3" onClick={addNumber} />
                <OperatorsButton label="*" onClick={addOperator} />
                <div className="bg-black rounded"></div> 
                <Button label="0" onClick={addNumber} />
                <Button label="." onClick={addNumber} />

                <OperatorsButton label="/" onClick={addOperator} />   
            </div>
        </div>
    );
}