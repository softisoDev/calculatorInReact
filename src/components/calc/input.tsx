import React, {FC} from "react";

interface IProps {
    type: string,
    name: string,
    id?: string,
    value?: any;
    className?: string,
    onClick?: () => void,
    disabled?:boolean
}

const CalcInput: FC<IProps> = (props) => {
    return <input {...props}/>;
}

export default CalcInput;