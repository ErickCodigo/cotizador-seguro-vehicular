import IconPositiveMan from "../Icon/IconPositiveMan";
import {useVehicleInsuranceValues} from "../../context/VehicleInsure/context";

export default function CarDataPreview() {
    const {state} = useVehicleInsuranceValues();

    return (
        <div className="bg-white rounded-2xl border-2 flex" style={{ borderColor: "#f0f2fa" }}>
            <div className="py-6 px-6 flex50">
                <span className="text-sm text-gray-300 mb-3">Placa: {state.licensePlate}</span>
                <h3 className="text-lg mb-4">{state.vehicleMake} {state.vehicleYears}</h3>
                <button className="uppercase text-sm font-bold" style={{color: "var(--purple-2)"}}>Editar</button>
            </div>
            <div className="flex50 relative">
                <IconPositiveMan
                    style={{height: "100%", transform: "scale(1.1)", top: "-4%"}}
                    className="absolute right-1"/>
            </div>
        </div>
    )
}
