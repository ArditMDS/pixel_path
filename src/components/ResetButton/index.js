import React from "react";
import {ResetStyle} from "./style";

function ResetButton({children, onClick}) {
    return (
        <ResetStyle onClick={onClick}>{children}</ResetStyle>
    );
}
export default ResetButton;