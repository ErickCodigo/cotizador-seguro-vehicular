import React from "react";
import * as Buttons from "./index";
import {ButtonHandler} from "./models/Button";

export default function Button(props: ButtonHandler) {
    const {variant, ...rest} = props;
    const Component = Buttons[variant] || Buttons["ButtonBase"];

    return <Component {...rest} />;
}
