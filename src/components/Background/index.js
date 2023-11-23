import React from "react";
import {BackgroundStyle} from "./style";

function Background({children}) {
    return (
        <BackgroundStyle>{children}</BackgroundStyle>
    );
}
export default Background;