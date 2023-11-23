import React from "react";
import {SecondaryTitleStyle} from "./style";

function SecondaryTitle({children}) {
    return (
        <SecondaryTitleStyle>
            {children}
        </SecondaryTitleStyle>
    );
}
export default SecondaryTitle;