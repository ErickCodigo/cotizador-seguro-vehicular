import TermsAndConditions from "./index";
import {AcceptTermsAndConditions as AcceptTermsAndConditionsInterface} from "../TextField/models/TextField";
import {useState} from "react";
import TextFieldCheckbox from "../TextField/TextFieldCheckbox";

export default function AcceptTermsAndConditions(props: AcceptTermsAndConditionsInterface) {
    const {defaultValue, onAgree, required} = props;
    const [isSelected, setIsSelected] = useState(defaultValue || false);

    function handlerChange() {
        setIsSelected(!isSelected);
        onAgree(!isSelected);
    }

    return (
        <div className="AcceptTermsAndConditions">
            <TextFieldCheckbox required={required} checked={isSelected} onChange={handlerChange}/>
            <TermsAndConditions/>
        </div>
    )
}
