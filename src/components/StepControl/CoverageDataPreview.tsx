import IconFlexVehicle from "../Icon/IconFlexVehicle";
import IconCheck from "../Icon/IconCheck";
import Button from "../Button/Button";

export default function CoverageDataPreview({onClick}) {
    const benefit = ["Llanta de repuesto", "Análisis de motor", "Aros gratis"];

    return (
        <div className="bg-white rounded-2xl">
            <div className="py-6">
                <div className="flex mb-4 pb-4 border-b border-gray-300">
                    <div className="flex70">
                        <span className="text-2xl text-gray-900 block">$35.00</span>
                        <span className="text-xs text-gray-900 uppercase">Mensual</span>
                    </div>
                    <div className="flex30">
                        <IconFlexVehicle/>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-lg text-gray-900 mb-3">El precio incluye:</h3>
                    <ul>
                        {benefit.map(text => (
                            <li key={text} className="text-gray-500 flex items-center">
                                <IconCheck className="mr-2"/>
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <Button
                        type="button"
                        onClick={onClick}
                        className="block bg-red-500 py-4 md:px-8 w-full text-white uppercase rounded-xl"
                        variant="ButtonBase"
                        text="Continuar"/>
                </div>
            </div>
        </div>
    )
}
