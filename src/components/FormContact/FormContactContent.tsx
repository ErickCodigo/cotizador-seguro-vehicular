import React, {useState} from "react";
import {useRouter} from "next/router";
import TextField from "../TextField/TextField";
import AcceptTermsAndConditions from "../TermsAndConditions/AcceptTermsAndConditions";
import Button from "../Button/Button";
import {isLicensePlate, containsNumber, isValidDNI} from "../../utils/libs";
import {SelectOption} from "../TextField/models/TextField";
import FormGroup from "../TextField/FormGroup";
import {useVehicleInsuranceValues} from "../../context/VehicleInsure/context";
import ValidatorMessage from "../Validator";
import clsx from "clsx";

const options: SelectOption[] = [
    {id: 1, text: "DNI", value: "dni"},
    {id: 2, text: "Carnet de extranjería", value: "carnet-de-extranjeria"},
    {id: 3, text: "RUC", value: "registro-unico-de-contribuyente"},
    {id: 4, text: "Pasaporte", value: "pasaporte"},
];

export default function FormContactContent() {
    const {state, setState} = useVehicleInsuranceValues();
    const [validator, setValidator] = useState({
        documentNumber: { text: "", isValid: false }
    });

    const router = useRouter();

    function handlerSubmit(e) {
        e.preventDefault();

        if (validator.documentNumber.isValid) router.push("/create-car");
    }

    async function handlerDocumentNumberOutFocus() {
        /*Actualmente implementado para usar solo con dni*/
        const response = await isValidDNI("dni", state.documentNumber);

        if (response) {
            setValidator(x => ({...x, documentNumber: { text: "", isValid: true }}))
        }else {
            setValidator(x => ({...x, documentNumber: { text: "DNI no encontrado", isValid: false }}))
        }
    }

    function setValue(name: string, value: string | number | boolean) {
        // @ts-ignore
        setState((x) => ({ ...x, [name]: value }));
    }

    function handlerDocumentNumber(e) {
        const {name, value} = e;

        if (!containsNumber(value)) {
            return;
        }

        setValue(name, value);
    }

    function handlerChangePhoneNumber(e) {
        const {name, value} = e;

        if (!containsNumber(value)) return;

        setValue(name, value);
    }

    function handlerChangeLicensePlate(e) {
        const {name, value} = e;

        if (!isLicensePlate(value)) return;

        setValue(name, value.toUpperCase())
    }

    return (
        <form onSubmit={handlerSubmit}>
            <FormGroup className={clsx(validator.documentNumber.isValid && "mb-5")}>
                <select
                    className="p-3 bg-white border-r border-gray-300"
                    value={state.documentType}
                    onChange={({target: {name, value}}) => {
                        setValue(name, value);
                    }}
                    style={{width: "30%"}}
                    name="documentType"
                    placeholder="Nro. de doc">
                    {options.map(o => (
                        <option key={o.id} value={o.value}>{o.text}</option>
                    ))}
                </select>

                <input
                    value={state.documentNumber}
                    onChange={(e) => handlerDocumentNumber(e.target)}
                    onBlur={handlerDocumentNumberOutFocus}
                    name="documentNumber"
                    style={{width: "70%"}}
                    className="px-3 inline-block"
                    placeholder="Nro. de doc"
                />
            </FormGroup>

            <ValidatorMessage className="mt-1 mb-4 text-red-500" text={validator.documentNumber.text} isValid={validator.documentNumber.isValid}/>

            <TextField
                onChange={e => handlerChangePhoneNumber(e.target)}
                value={state.phoneNumber}
                name="phoneNumber"
                placeholder="Celular"
            />

            <TextField
                onChange={e => handlerChangeLicensePlate(e.target)}
                value={state.licensePlate}
                name="licensePlate"
                className="mb-7" placeholder="Placa"
            />

            <AcceptTermsAndConditions
                defaultValue={state.acceptTermsAndConditions}
                onAgree={(x) => setValue("acceptTermsAndConditions", x)}/>

            <Button type="submit" className="FormContactButton" variant="ButtonBase" text="Cotízalo"/>
        </form>
    )
}
