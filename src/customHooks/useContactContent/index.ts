import {containsNumber, isLicensePlate, isValidDNI} from "../../utils/libs";
import {useVehicleInsuranceValues} from "../../context/VehicleInsure/context";
import {useRouter} from "next/router";
import {useValidator} from "../useValidator";
import {useEffect} from "react";

const initialStateValidator = {
    documentNumber: {text: "", isValid: false}
};

export function useContactContent() {
    const router = useRouter();
    const {state, setState} = useVehicleInsuranceValues();
    const {validator, handlerChangeValidator} = useValidator(initialStateValidator);

    useEffect(() => {
        if (state.documentNumber.length) checkDocumentNumber().then();
    }, [])

    function setValue(name: string, value: string | number | boolean) {
        // @ts-ignore
        setState((x) => ({...x, [name]: value}));
    }

    function handlerSubmit(e) {
        e.preventDefault();

        if (validator.documentNumber.isValid) router.push("/create-car");
    }

    function handlerChangeDocumentType(e) {
        const {target: {name, value}} = e;

        setValue(name, value);
    }

    function handlerChangeDocumentNumber(e) {
        const {name, value} = e.target;

        if (!containsNumber(value)) {
            return;
        }

        setValue(name, value);
    }

    function handlerChangePhoneNumber(e) {
        const {name, value} = e.target;

        if (!containsNumber(value)) return;

        setValue(name, value);
    }

    function handlerChangeLicensePlate(e) {
        const {name, value} = e.target;

        if (!isLicensePlate(value)) return;

        setValue(name, value.toUpperCase())
    }

    function handlerChangeTermsAndConditions(isAccept: boolean) {
        setValue("acceptTermsAndConditions", isAccept);
    }

    async function checkDocumentNumber() {
        /*Actualmente implementado para usar solo con dni*/
        const isValid = await isValidDNI("dni", state.documentNumber);
        const text = isValid ? "" : "DNI no encontrado";

        handlerChangeValidator({documentNumber: {text, isValid}})
    }

    return {
        handlerSubmit,
        handlerChangeDocumentNumber,
        handlerChangeDocumentType,
        handlerChangePhoneNumber,
        handlerChangeLicensePlate,
        handlerChangeTermsAndConditions,
        checkDocumentNumber,
        validator
    };
}
