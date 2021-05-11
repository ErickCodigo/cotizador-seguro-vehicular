import IconChecklist from "../Icon/IconChecklist";
import {TextField} from "./models/TextField";

export default function TextFieldCheckbox(props: TextField) {
    const {...rest} = props;

    return (
        <div className="TextFieldCheckboxContainer">
            <input
                {...rest}
                className="TextFieldCheckbox"
                type="checkbox"/>
            <IconChecklist className="TextFieldCheckboxIcon"/>
        </div>
    )
}
