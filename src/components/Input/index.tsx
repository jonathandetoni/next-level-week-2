import React, { InputHTMLAttributes } from 'react';

//css
import './style.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type: string;
    name: string;
}

const Input: React.FunctionComponent<InputProps> = ({label, type, name, ...rest}) => {
    return(
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input name={name} type={type} id={name} {...rest}/>
        </div>
    );
    
}

export default Input;
