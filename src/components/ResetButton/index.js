import React from "react";
import {ButtonStyle} from "./style";

function ButtonSubmit({children, type}) {
    return (
        <ButtonStyle type={type}>{children}</ButtonStyle>
    );
}
export default ButtonSubmit;