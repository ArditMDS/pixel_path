import React from "react";
import {InputStyle} from "./style";

function Input({children, placeholder, type, value, onChange}) {
    return (
        <InputStyle type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}>{children}
        </InputStyle>
    );
}
export default Input;