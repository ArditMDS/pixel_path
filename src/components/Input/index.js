import React from "react";
import {InputStyle} from "./style";

function Input({children, placeholder}) {
    return (
        <InputStyle placeholder={placeholder}>{children}</InputStyle>
    );
}
export default Input;