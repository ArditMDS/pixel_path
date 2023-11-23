import React from "react";
import {SpinButtonStyle} from "./style";

function SpinButton({children, onClick}) {
    return (
        <SpinButtonStyle onClick={onClick}>{children}</SpinButtonStyle>
    );
}
export default SpinButton;