import React from "react";
import {FormStyle} from "./style";

function Form({children}) {
    return (
        <FormStyle>{children}</FormStyle>
    );
}
export default Form;