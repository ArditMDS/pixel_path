import React from "react";
import {NormalTextStyle} from "./style";

function NormalText({children}) {
    return (
        <NormalTextStyle>
            {children}
        </NormalTextStyle>
    );
}
export default NormalText;