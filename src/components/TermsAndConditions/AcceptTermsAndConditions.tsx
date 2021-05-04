import TermsAndConditions from "./index";
import {AcceptTermsAndConditions as AcceptTermsAndConditionsInterface} from "../TextField/models/TextField";
import IconCheckList from "../Icon/IconCheckList";
import {useState} from "react";

export default function AcceptTermsAndConditions(props: AcceptTermsAndConditionsInterface) {
    const {defaultValue, onAgree} = props;
    const [isSelected, setIsSelected] = useState(defaultValue || false);

    function handlerChange() {
        setIsSelected(x => {
            onAgree(!x);
            return !x;
        });
    }

    return (
        <div className="AcceptTermsAndConditions">
            <div className="TermsAndConditionsInputContainer">
                <input
                    checked={isSelected}
                    onChange={handlerChange}
                    className="TermsAndConditionsInput"
                    type="checkbox"/>
                <IconCheckList/>
            </div>
            <TermsAndConditions/>
        </div>
    )
}
