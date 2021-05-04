import TextField from "../TextField/TextField";
import Select from "../TextField/Select";
import {SelectOption} from "../TextField/models/TextField";
import Button from "../Button/Button";
import AcceptTermsAndConditions from "../TermsAndConditions/AcceptTermsAndConditions";
import {FormContact as FormContactInterface} from "./models/FormContact";
import clsx from "clsx";

export default function FormContact(props: FormContactInterface) {
    const {className, style} = props;
    const options: SelectOption[] = [
        {id: 1, text: "DNI", value: ""},
        {id: 2, text: "Otra opción", value: ""},
    ];

    function handlerSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className={clsx("FormContact", className && className)} style={style}>
            <div className="FormContactWrapper">
                <h2 className="FormContactTitle">Déjanos tus datos</h2>
                <form onSubmit={handlerSubmit}>
                    <Select options={options} placeholder="Nro. de doc"/>
                    <TextField placeholder="Celular"/>
                    <TextField className="mb-7" placeholder="Placa"/>
                    <AcceptTermsAndConditions onAgree={(x) => {
                        console.log(x)
                    }}/>
                    <Button className="FormContactButton" type="ButtonBase" text="Cotízalo"/>
                </form>
            </div>
        </div>
    );
}
