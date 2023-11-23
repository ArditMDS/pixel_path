import React from "react";
import {SliceStyle} from "./style";

function Slice({children, index, result}) {
    return (
        <SliceStyle key={index} result={result}>
            {children}
        </SliceStyle>
    );
}
export default Slice;