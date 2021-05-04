import React from "react";
import * as Buttons from "./index";
import {ButtonHandler} from "./models/Button";

export default function Button(props: ButtonHandler) {
    const {type, ...rest} = props;
    const Component = Buttons[type] || Buttons["ButtonBase"];

    return <Component {...rest} />;
}
