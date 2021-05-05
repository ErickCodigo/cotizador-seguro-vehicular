import React from "react";
import {TextField as TextFieldInterface} from "./models/TextField";
import clsx from "clsx";

export default function TextField(props: TextFieldInterface) {
    const {placeholder, className, ...rest} = props;

    return (
        <input
            {...rest}
            type="text"
            placeholder={placeholder}
            className={clsx("mb-5 p-3 border-gray-300 border rounded", className && className)}
            style={{width: "100%"}}/>
    )
}
