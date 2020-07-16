import React from 'react';
import CalcPad from "../calc/pad";
import './App.css';

const appTitle = "Calculator in TS and React";

let num1: number = null;
let num2: number = null;
let operator: any = null;
let waitForSecondOperand: boolean = false;
let dotOperand: boolean = false;

const App = () => {

    const [displayValue, setDisplayValue] = React.useState<any>("");

    const onNumberClick = (e) => {
        // console.log(e.target.value)
        if (operator == null) {
            operateNum1Value(e.target.value);
        } else {
            operateNum2Value(e.target.value);
        }
    }

    const operateNum1Value = (value) => {
        if (num1 == null) {
            setNum1(value);
            setDisplayValue(value);

        } else {
            if (dotOperand) {
                setNum1(concatWithCurrentDisplay(value));
                dotOperand = false;
            } else {
                setNum1(num1 + value);
                setDisplayValue(num1);
            }
        }
    }

    const operateNum2Value = (value) => {
        if (num2 == null) {

            setNum2(value);
            setDisplayValue(value);

        } else {
            if (dotOperand) {
                setNum2(concatWithCurrentDisplay(value));
                dotOperand = false;
            } else {
                setNum2(num2 + value);
                setDisplayValue(num2);
            }
        }
    }

    const concatWithCurrentDisplay = (glue = ".") => {
        let newValue = displayValue + glue;
        setDisplayValue(newValue);
        return newValue;
    }

    const onEqualClick = () => {
        let result = calculate();
        setNum1(result);

        if (isInt(result)) {
            setDisplayValue(result);
        } else {
            setDisplayValue(result.toFixed(2).toString().replace("0", ""));
        }
    }

    const onOperatorClick = (e) => {

        if (operator !== null) {
            waitForSecondOperand = true;
            onEqualClick();
        } else {
            setDisplayValue("");
        }

        operator = e.target.value;
        num2 = null;
    }

    const onDotClick = () => {
        concatWithCurrentDisplay();
        dotOperand = true;
    }

    const calculate = () => {

        switch (operator) {
            case "+": {
                return add();
            }
            case "-": {
                return subtract();
            }
            case "*": {
                return multiply();
            }
            case "/": {
                return divide();
            }
            default: {
                return null;
            }
        }
    }

    const setNum1 = (value) => {
        num1 = parseFloat(value);
    }

    const setNum2 = (value) => {
        num2 = parseFloat(value);
    }

    const add = () => {
        console.log(num1, num2);
        return num1 + num2;
    }

    const subtract = () => {
        return num1 - num2;
    }

    const multiply = () => {
        return num1 * num2;
    }

    const divide = () => {
        return num1 / num2;
    }

    const isInt = (n) => {
        return n % 1 === 0;
    }

    const reset = () => {
        num1 = null;
        num2 = null;
        operator = null;
        waitForSecondOperand = false;
        dotOperand = false;
        setDisplayValue("");
    }

    return (
        <CalcPad
            title={appTitle}
            displayValue={displayValue}
            onNumberClick={onNumberClick}
            onDotClick={onDotClick}
            onEqualClick={onEqualClick}
            onClearClick={reset}
            onOperatorClick={onOperatorClick}
        />
    );
}

export default App;
