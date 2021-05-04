import React from "react";
import {TextField as TextFieldInterface} from "./models/TextField";
import clsx from "clsx";

export default function TextField({value, onChange, placeholder, className}: TextFieldInterface) {
    return (
        <input
            value={value}
            onChange={onChange}
            className={clsx("mb-5 p-3 border-gray-300 border rounded", className && className)}
            style={{width: "100%"}}
            type="text"
            placeholder={placeholder}/>
    )
}
