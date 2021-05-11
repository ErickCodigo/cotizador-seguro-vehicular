import {TextField as TextFieldInterface} from "./models/TextField";
import IconCheckbox from "../Icon/IconCheckbox";

export default function TextFieldCheckbox(props: TextFieldInterface) {
    const {...rest} = props;

    return (
        <div className="TextFieldCheckboxContainer">
            <input
                {...rest}
                className="TextFieldCheckbox"
                type="checkbox"/>
            <IconCheckbox className="TextFieldCheckboxIcon"/>
        </div>
    )
}
