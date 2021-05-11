import React from "react";
import {ButtonBase as ButtonBaseInterface} from "./models/Button";

export default function ButtonBase(props: ButtonBaseInterface) {
    const {text, iconLeft, iconRight, ...rest} = props;

    return (
        <button {...rest}>
            {iconLeft}
            {text}
            {iconRight}
        </button>
    )
}
