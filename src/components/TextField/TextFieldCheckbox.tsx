import {TextField as TextFieldInterface} from "./models/TextField";
import IconChecklist from "../Icon/IconChecklist";

export default function TextFieldCheckbox(props: TextFieldInterface) {
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
