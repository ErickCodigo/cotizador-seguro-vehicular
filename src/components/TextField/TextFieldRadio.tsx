import {TextField} from "./models/TextField";
import clsx from "clsx";
import IconRadio from "../Icon/IconRadio";

export default function TextFieldRadio(props: TextField) {
    const {onChange, placeholder, className, ...rest} = props;

    return (
        <div className={clsx("TextFieldRadioContainer", className && className)}>
            <input
                {...rest}
                className="TextFieldRadio"
                onChange={onChange}
                type="radio"
                name="prueba"/>

            <IconRadio className="TextFieldRadioIcon"/>
            <label>{placeholder}</label>
        </div>
    )
}
