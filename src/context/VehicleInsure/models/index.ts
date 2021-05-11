import {Dispatch, ReactElement} from "react";

export interface VehicleInsure {
    documentType: 'dni' | 'carnet-de-extranjeria' | 'registro-unico-de-contribuyente' | 'pasaporte';
    documentNumber: string;
    phoneNumber: string;
    licensePlate: string;
    vehicleYears: number;
    vehicleMake: string;
    isGas: boolean;
    insuredAmount: number;
    coverage: string[];
    acceptTermsAndConditions: boolean;
};

export interface VehicleInsureContext {
    state: VehicleInsure;
    setState: Dispatch<VehicleInsure>;
}

export interface VehicleInsureProvider {
    children: ReactElement | ReactElement[];
}
