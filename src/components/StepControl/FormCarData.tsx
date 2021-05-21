import Link from "next/link";
import IconArrowToLeftBordered from "../Icon/IconArrowToLeftBordered";
import Select from "../TextField/Select";
import TextFieldRadio from "../TextField/TextFieldRadio";
import TextFieldNumber from "../TextField/TextFieldNumber";
import Button from "../Button/Button";
import {useVehicleInsuranceValues} from "../../context/VehicleInsure/context";
import {NotFoundModels} from "../NotFoundModels";
import {useEffect, useState} from "react";
import {ApiPolicyholder} from "../../utils/ApiPolicyholder";

const yearsVehicles = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
const vehiclesMakes = ["Wolkswagen", "Chevrolet", "Nissan", "Toyota", "Mercedez", "Hunday", "Ferrari"];

export default function FormCarData({changeStep}) {
    const {state, setState} = useVehicleInsuranceValues();
    const [username, setUsername] = useState("");

    useEffect(() => {
        const match = new ApiPolicyholder().findOne("dni", state.documentNumber);

        setUsername(match?.username || "Erick");

    }, [])

    function handlerSubmit(e) {
        e.preventDefault()

        changeStep(2);
    }

    function handlerChange(e) {
        const {name, value} = e.target;

        // @ts-ignore
        setState(x => ({...x, [name]: value}));
    }

    function handleChangeAux(name, value) {
        // @ts-ignore
        setState(x => ({...x, [name]: value}));
    }

    return (
        <div className="md:pl-20 bg-white">
            <div className="Billboard">
                <div className="mt-12">
                    <Link href="/">
                        <a className="hidden md:inline-flex items-center uppercase text-xs text-gray-300 mb-4">
                            <IconArrowToLeftBordered className="mr-3"/>
                            Volver
                        </a>
                    </Link>
                    <h1 className="BillboardTitle">¡Hola <span className="BillboardTitleHighlighted">{username}</span>!
                    </h1>
                    <p className="BillboardParagraph md:mb-8">Completa los datos de tu auto</p>
                </div>
            </div>

            <div className="md:flex md:flex-nowrap">
                <form onSubmit={handlerSubmit}>
                    <Select
                        name="vehicleYears"
                        value={state.vehicleYears}
                        onChange={handlerChange}
                        className="mb-5"
                        placeholder="Año">

                        {yearsVehicles.map(x => (
                            <option key={x} value={x}>{x}</option>
                        ))}
                    </Select>

                    <Select
                        value={state.vehicleMake}
                        onChange={handlerChange}
                        name="vehicleMake"
                        className="mb-5 md:mb-10"
                        placeholder="Marca">

                        {vehiclesMakes.map(x => (
                            <option key={x} value={x}>{x}</option>
                        ))}
                    </Select>

                    <NotFoundModels className="md:hidden"/>

                    <div className="mb-8 md:flex">
                        <h3 className="mb-3 md:mr-4 md:mb-0 text-lg md:text-base">¿Tu auto es a gas?</h3>

                        <div className="flex">
                            <TextFieldRadio
                                value="true"
                                defaultChecked={state.isGas}
                                onChange={e => handleChangeAux("isGas", e.target.value === "true")}
                                placeholder="Sí"
                                className="mr-5 md:text-base"
                                name="isGas"/>

                            <TextFieldRadio
                                value="false"
                                defaultChecked={!state.isGas}
                                onChange={e => handleChangeAux("isGas", e.target.value === "true")}
                                placeholder="No"
                                className="md:text-base"
                                name="isGas"/>
                        </div>
                    </div>

                    <hr className="hidden md:block mb-8"/>

                    <div className="">
                        <div className="mb-8">
                            <h3 className="text-lg md:text-base mb-1">Indica la suma asegurada</h3>
                            <div className="text-sm text-gray-400">
                                <span>MIN $12.500</span>
                                <span className="px-4">|</span>
                                <span>MAX $16,500</span>
                            </div>
                        </div>

                        <TextFieldNumber
                            value={state.insuredAmount}
                            onMinus={(x) => handleChangeAux("insuredAmount", x)}
                            onPlus={(x) => handleChangeAux("insuredAmount", x)}
                            onChange={() => {
                            }}
                            step={100}
                            min={12500}
                            max={16500}
                            placeholder="$ 12,500"/>
                    </div>

                    <Button
                        type="submit"
                        className="FormContactButton"
                        variant="ButtonBase"
                        text="Continuar"/>
                </form>
                <div className="hidden md:block ml-12">
                    <NotFoundModels/>
                </div>
            </div>
        </div>
    )
}
