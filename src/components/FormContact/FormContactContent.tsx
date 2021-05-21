import clsx from "clsx";
import TextField from "../TextField/TextField";
import AcceptTermsAndConditions from "../TermsAndConditions/AcceptTermsAndConditions";
import Button from "../Button/Button";
import ValidatorMessage from "../Validator";
import FormGroup from "../TextField/FormGroup";
import {useContactContent} from "../../customHooks/useContactContent";
import {useVehicleInsuranceValues} from "../../context/VehicleInsure/context";
import {SelectOption} from "../TextField/models/TextField";

const options: SelectOption[] = [
    {id: 1, text: "DNI", value: "dni"},
    {id: 2, text: "Carnet de extranjería", value: "carnet-de-extranjeria"},
    {id: 3, text: "RUC", value: "registro-unico-de-contribuyente"},
    {id: 4, text: "Pasaporte", value: "pasaporte"},
];

export default function FormContactContent() {
    const {
        handlerChangeLicensePlate,
        handlerChangePhoneNumber,
        handlerChangeDocumentNumber,
        handlerChangeDocumentType,
        handlerChangeTermsAndConditions,
        handlerSubmit,
        checkDocumentNumber,
        validator
    } = useContactContent();
    const {state} = useVehicleInsuranceValues();

    return (
        <form onSubmit={handlerSubmit}>
            <FormGroup className={clsx(validator.documentNumber.isValid && "mb-5")}>
                <select
                    className="p-3 bg-white border-r border-gray-300"
                    value={state.documentType}
                    onChange={handlerChangeDocumentType}
                    style={{width: "30%"}}
                    name="documentType"
                    placeholder="Nro. de doc">
                    {options.map(o => (
                        <option key={o.id} value={o.value}>{o.text}</option>
                    ))}
                </select>

                <input
                    value={state.documentNumber}
                    onChange={handlerChangeDocumentNumber}
                    style={{width: "70%"}}
                    name="documentNumber"
                    onBlur={checkDocumentNumber}
                    className="px-3 inline-block"
                    placeholder="Nro. de doc"
                />
            </FormGroup>

            <ValidatorMessage
                className="mt-1 mb-4 text-red-500"
                text={validator.documentNumber.text}
                isValid={validator.documentNumber.isValid}/>

            <TextField
                onChange={handlerChangePhoneNumber}
                value={state.phoneNumber}
                name="phoneNumber"
                placeholder="Celular"
            />

            <TextField
                onChange={handlerChangeLicensePlate}
                value={state.licensePlate}
                name="licensePlate"
                className="mb-7" placeholder="Placa"
            />

            <AcceptTermsAndConditions
                defaultValue={state.acceptTermsAndConditions}
                onAgree={handlerChangeTermsAndConditions}/>

            <Button type="submit" className="FormContactButton" variant="ButtonBase" text="Cotízalo"/>
        </form>
    )
}
