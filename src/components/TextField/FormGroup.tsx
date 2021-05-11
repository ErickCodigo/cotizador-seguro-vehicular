import React from "react";
import clsx from "clsx";
import {FormGroup as FormGroupInterface} from "./models/TextField";

export default function FormGroup(props: FormGroupInterface) {
    const {className, children, ...rest} = props;

    return (
        <div {...rest} className={clsx("flex border-gray-300 border rounded", className && className)}>
            {children}
        </div>
    )
}
