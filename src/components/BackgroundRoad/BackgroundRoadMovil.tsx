import React from "react";
import {BackgroundRoadMovil as BackgroundRoadMovilInterface} from "./models/BackgroundRoadMovil";
import IconVehicleInsuranceMovil from "../Icon/IconVehicleInsuranceMovil";
import IconVehicleInsurance from "../Icon/IconVehicleInsurance";

export default function BackgroundRoadMovil(props: BackgroundRoadMovilInterface) {
    const { className, style } = props;

    return(
        <div className={className} style={style}>
            <div className="BillboardContent">
                <div className="BillboardInnerContent">
                    <span className="BillboardTextExtra">¡Nuevo!</span>
                    <h1 className="BillboardTitle">Seguro
                        Vehicular <span className="BillboardTitleHighlighted">Tracking</span></h1>
                    <p className="BillboardParagraph">Cuentanos donde le haras seguimiento a tu seguro</p>
                </div>
            </div>
            <IconVehicleInsuranceMovil className="IconVehicleInsuranceMovil block md:hidden"/>
            <IconVehicleInsurance className="hidden md:block" />
        </div>
    ) }
