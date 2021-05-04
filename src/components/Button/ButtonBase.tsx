import React from "react";
import {ButtonBase as ButtonBaseInterface} from "./models/Button";

export default function ButtonBase(props: ButtonBaseInterface) {
    const {text, className, iconLeft, iconRight, style} = props;

    return (
        <button className={className} style={style}>
            {iconLeft}
            {text}
            {iconRight}
        </button>
    )
}
