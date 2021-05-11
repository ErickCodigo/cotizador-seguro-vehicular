import IconArrowToLeftBordered from "../Icon/IconArrowToLeftBordered";
import Button from "../Button/Button";
import CarDataPreview from "./CarDataPreview";
import IconStolenTire from "../Icon/IconStolenTire";
import IconVehicleCollisions from "../Icon/IconVehicleCollisions";
import IconSwitchOn from "../Icon/IconSwitchOn";
import CoverageDataPreview from "./CoverageDataPreview";
import {useRouter} from "next/router";

export default function FormCoverageData({changeStep}) {
    const router = useRouter();

    return (
        <div className="md:pl-20 md:pt-8 bg-white flex flex-nowrap">
            <div className="md:flex60">
                <div className="pb-12 mb-12">
                    <div className="mb-8">
                        <div onClick={() => changeStep(1)}
                             className="cursor-pointer hidden md:inline-flex items-center uppercase text-xs text-gray-300 mb-4">
                            <IconArrowToLeftBordered className="mr-3"/>
                            Volver
                        </div>
                        <h1 className="BillboardTitle pt-12 md:pt-0">Mira las coberturas</h1>
                        <p className="BillboardParagraph md:mb-8">Conoce las coberturas para tu plan</p>
                    </div>

                    <CarDataPreview/>
                </div>

                <div>
                    <h2 className="text-2xl mb-2">Agrega o quita coberturas</h2>

                    <div>
                        <header className="flex flex-nowrap mb-6">
                            <div
                                className="py-3 pr-3 uppercase text-sm font-bold text-red-400 border-b-4 border-red-500">Protege
                                a tu auto
                            </div>
                            <div
                                className="py-3 pr-3 uppercase text-sm font-medium text-gray-400 border-b border-gray-300">Protege
                                a los que te
                                rodean
                            </div>
                            <div
                                className="py-3 uppercase text-sm font-medium text-gray-400 border-b border-gray-300">Mejora
                                tu plan
                            </div>
                        </header>

                        <div className="mb-12">
                            <section className="border-b border-gray-300 py-3">
                                <div className="flex flex-nowrap items-center mb-2">
                                    <IconStolenTire className="mr-4"/>
                                    <h4>Llanta robada</h4>
                                    <IconSwitchOn className="ml-auto md:hidden"/>
                                </div>
                                <div className="pl-14">
                                    <p className="text-gray-500 mb-3">He salido de casa a las cuatro menos cinco para ir
                                        a
                                        la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi
                                        bici,
                                        na llego a la academia que está en el centro del pueblo en una plaza medio
                                        grande y
                                        dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las
                                        bicis</p>
                                    <span className="uppercase text-gray-400 text-xs font-bold">Ver menos</span>
                                </div>
                            </section>

                            <section className="border-b border-gray-300 py-3">
                                <div className="flex flex-nowrap items-center mb-2">
                                    <IconVehicleCollisions className="mr-4"/>
                                    <h4>Choque y/o pasarte la luz roja</h4>
                                    <IconSwitchOn className="ml-auto md:hidden"/>
                                </div>

                                <div className="pl-14">
                                    <span className="uppercase text-xs font-bold" style={{color: "var(--purple-2)"}}>
                                        Ver más
                                    </span>
                                </div>
                            </section>

                            <section className="border-b border-gray-300 py-3">
                                <div className="flex flex-nowrap items-center mb-2">
                                    <IconVehicleCollisions className="mr-4"/>
                                    <h4>Atropello en la vía Evitamiento</h4>
                                    <IconSwitchOn className="ml-auto md:hidden"/>
                                </div>

                                <div className="pl-14">
                                    <span className="uppercase text-gray-400 text-xs font-bold" style={{color: "var(--purple-2)"}}>
                                        Ver más
                                    </span>
                                </div>
                            </section>
                        </div>

                        <div className="flex flex-nowrap justify-between md:hidden">
                            <div>
                                <span className="text-2xl text-gray-900 block">$35.00</span>
                                <span className="text-xs text-gray-900 uppercase">Mensual</span>
                            </div>
                            <div className="flex70">
                                <Button
                                    type="button"
                                    onClick={() => router.push("/thank-you")}
                                    className="bg-red-500 py-4 md:px-8 w-full md:w-auto text-white uppercase rounded-xl"
                                    variant="ButtonBase"
                                    text="Continuar"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden md:block ml-12 flex40">
                <CoverageDataPreview onClick={() => router.push("/thank-you")}/>
            </div>
        </div>
    )
}
