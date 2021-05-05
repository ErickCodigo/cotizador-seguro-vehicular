import {GeneralProperties} from "../../../generalModels";

export interface FormContact extends GeneralProperties{
}

interface VehicleDocument {
    type: string;
    value: string;
}

export interface TextFields {
    documentType: string;
    phoneNumber: string;
    licensePlate: string;
    acceptTermsAndConditions: boolean;
}
