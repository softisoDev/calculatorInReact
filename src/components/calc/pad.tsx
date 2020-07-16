import React, {FC} from "react";
import CalcInput from "./input";
import CalcButton from "./button";

interface IProps {
    title: string,
    displayValue: any,
    onNumberClick: (e) => void,
    onDotClick: () => void,
    onEqualClick: () => void,
    onClearClick: () => void,
    onOperatorClick: (e) => void,
}

const CalcPad: FC<IProps> = (props) => {

    const operators = ['+', '-', '*', '/'];
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

    return (
        <div className="calculator card">
            <h2 className="text-center">{props.title}</h2>

            <CalcInput type="text" name="display" className="calculator-screen z-depth-1" value={props.displayValue}/>

            <div className="calculator-keys">
                {operators.map(function (operator) {
                    return <CalcButton type="button" text={operator} color="info" value={operator} onClick={props.onOperatorClick}/>
                })}

                {numbers.map(function (number) {
                    return <CalcButton type="button" text={number} color="light" value={number} onClick={props.onNumberClick}/>
                })}

                <CalcButton type="button" text="." value="." onClick={props.onDotClick}/>

                <CalcButton type="button" text="AC" value="all-clear" color="danger" onClick={props.onClearClick}/>

                <CalcButton type="button" text="=" value="all-clear" color="success" className="equal-sign" onClick={props.onEqualClick}/>

            </div>
        </div>
    )
}

export default CalcPad;
