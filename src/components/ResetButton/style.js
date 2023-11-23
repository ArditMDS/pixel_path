import React from "react";
import {ButtonStyle} from "./style";

function ResetButton({children, onClick}) {
    return (
        <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
    );
}
export default ResetButton;