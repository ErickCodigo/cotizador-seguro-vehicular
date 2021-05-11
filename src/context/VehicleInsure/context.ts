import {
    VehicleInsure as VehicleInsureInterface,
    VehicleInsureContext as VehicleInsureContextInterface
} from "./models";
import {createContext, useContext} from "react";

const vehicleInsuranceDefaultValues: VehicleInsureInterface = {
    documentNumber: "", documentType: undefined,
    coverage: [],
    insuredAmount: 0,
    isGas: false,
    licensePlate: "",
    phoneNumber: "",
    vehicleMake: "",
    vehicleYears: 0,
    acceptTermsAndConditions: false
};

const vehicleInsuranceValues = {
    setState(): void {},
    state: vehicleInsuranceDefaultValues
}
export const VehicleInsureContext = createContext<VehicleInsureContextInterface>(vehicleInsuranceValues);

export function useVehicleInsuranceValues() {
    return useContext(VehicleInsureContext);
}
