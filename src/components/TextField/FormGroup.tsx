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

/*TODO:
* Este componente debe ser capaz de tomar a su hijos y asigarle las clases necesarias
* para que se mantenga el diseño actual.
* */
