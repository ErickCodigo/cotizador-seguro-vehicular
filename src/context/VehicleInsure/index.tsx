import {useMemo, useState} from "react";
import {VehicleInsureContext} from "./context";
import {
    VehicleInsure as VehicleInsureInterface,
    VehicleInsureProvider as VehicleInsureProviderInterface
} from "./models";

export function VehicleInsuranceProvider({children}: VehicleInsureProviderInterface) {
    const [state, setState] = useState<VehicleInsureInterface>({
            acceptTermsAndConditions: false,
            documentNumber: "",
            documentType: "dni",
            coverage: [],
            insuredAmount: 12500,
            isGas: false,
            licensePlate: "",
            phoneNumber: "",
            vehicleMake: "Mercedez",
            vehicleYears: 2011
        }
    );

    const value = useMemo(() => ({
        state,
        setState
    }), [state]);

    return (
        <VehicleInsureContext.Provider value={value}>
            {children}
        </VehicleInsureContext.Provider>
    );
}
