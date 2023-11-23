import React from "react";
import {BigTitleStyle} from "./style";

function BigTitle({children}) {
    return (
        <BigTitleStyle>
            {children}
        </BigTitleStyle>
    );
}
export default BigTitle;