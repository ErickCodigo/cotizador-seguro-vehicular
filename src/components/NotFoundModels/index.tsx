import clsx from "clsx";
import IconCar from "../Icon/IconCar";
import {GeneralProperties} from "../../generalModels";

export function NotFoundModels(props: GeneralProperties) {
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
