import TextField from "../TextField/TextField";
import Select from "../TextField/Select";
import {SelectOption} from "../TextField/models/TextField";
import Button from "../Button/Button";
import AcceptTermsAndConditions from "../TermsAndConditions/AcceptTermsAndConditions";
import {FormContact as FormContactInterface, TextFields} from "./models/FormContact";
import clsx from "clsx";
import {useState} from "react";
import {isLicensePlate, isNumber} from "../../utils/libs";

const defaultState: TextFields = {
    documentType: "",
    phoneNumber: "",
    licensePlate: "",
    acceptTermsAndConditions: false
};

export default function FormContact(props: FormContactInterface) {
    const {className, style} = props;
    const options: SelectOption[] = [
        {id: 1, text: "DNI", value: ""},
        {id: 2, text: "Otra opción", value: ""},
    ];
    const [form, setForm] = useState<TextFields>(defaultState);

    function handlerSubmit(e) {
        e.preventDefault();

        console.log("Enviando datos")
    }

    function handlerChangePhoneNumber(e) {
        const {name, value} = e;

        if (!isNumber(value)) return;

        setForm(x => ({...x, [name]: value}))
    }

    function handlerChangeLicensePlate(e) {
        const {name, value} = e;

        if (!isLicensePlate(value)) return;

        setForm(x => ({...x, [name]: value.toUpperCase()}))
    }

    return (
        <div className={clsx("FormContact", className && className)} style={style}>
            <div className="FormContactWrapper">
                <h2 className="FormContactTitle">Déjanos tus datos</h2>
                <form onSubmit={handlerSubmit}>
                    <Select
                        name="documentType"
                        options={options}
                        placeholder="Nro. de doc"/>

                    <TextField
                        onChange={e => handlerChangePhoneNumber(e.target)}
                        value={form.phoneNumber}
                        name="phoneNumber"
                        placeholder="Celular"/>

                    <TextField
                        onChange={e => handlerChangeLicensePlate(e.target)}
                        value={form.licensePlate}
                        name="licensePlate"
                        className="mb-7" placeholder="Placa"/>

                    <AcceptTermsAndConditions
                        onAgree={(x) => {
                            // ({name: "acceptTermsAndConditions", value: x})
                        }}/>

                    <Button type="submit" className="FormContactButton" variant="ButtonBase" text="Cotízalo"/>
                </form>
            </div>
        </div>
    );
}
