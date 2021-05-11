import clsx from "clsx";
import IconArrowToLeftBordered from "../Icon/IconArrowToLeftBordered";
import Select from "../TextField/Select";
import TextFieldRadio from "../TextField/TextFieldRadio";
import TextFieldNumber from "../TextField/TextFieldNumber";
import Button from "../Button/Button";
import {GeneralProperties} from "../../generalModels";
import IconCar from "../Icon/IconCar";
import {useVehicleInsuranceValues} from "../../context/VehicleInsure/context";
import Link from "next/link";

function CallToAction(props: GeneralProperties) {
    const {className} = props;

    return (
        <div className={clsx("bg-purple-50 mb-8 px-3 py-4 flex rounded-md", className && className)}>
            <div className="mr-4">
                <IconCar/>
            </div>
            <div>
                <p style={{color: "var(--gray-light-2)"}}>¿No encuentras el modelo?</p>
                <a className="uppercase block text-purple-400 text-xs font-bold block mt-1" href="">Clic
                    Aquí</a>
            </div>
        </div>
    )
}

export default function FormCarData({changeStep}) {
    const {state, setState} = useVehicleInsuranceValues();

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
                    <h1 className="BillboardTitle">¡Hola <span className="BillboardTitleHighlighted">Juan</span>!
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
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                    </Select>

                    <Select
                        value={state.vehicleMake}
                        onChange={handlerChange}
                        name="vehicleMake"
                        className="mb-5 md:mb-10"
                        placeholder="Marca">
                        <option value="Wolkswagen">Wolkswagen</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Mercedez">Mercedez benz</option>
                        <option value="Hunday">Hunday</option>
                        <option value="Ferrari">Ferrari</option>
                    </Select>

                    <CallToAction className="md:hidden"/>

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
                    <CallToAction/>
                </div>
            </div>
        </div>
    )
}
