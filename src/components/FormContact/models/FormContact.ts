import {GeneralProperties} from "../../../generalModels";

export interface FormContact extends GeneralProperties{
}

interface VehicleDocument {
    type: string;
    value: string;
}

export interface TextFields {
    documentType: 'dni' | 'carnet-de-extranjeria' | 'registro-unico-de-contribuyente' | 'pasaporte';
    documentNumber: string;
    phoneNumber: string;
    licensePlate: string;
    acceptTermsAndConditions: boolean;
}
