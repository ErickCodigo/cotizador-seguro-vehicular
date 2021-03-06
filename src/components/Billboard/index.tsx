import clsx from "clsx";
import {Billboard as BillboardInterface} from "./models/Billboard";
import BackgroundRoadMovil from "../BackgroundRoad/BackgroundRoadMovil";
import BackgroundRoad from "../BackgroundRoad";

export default function Billboard(props: BillboardInterface) {
    const { className, style } = props;

    return (
        <div
            className={clsx(className && className, "Billboard")}
            style={style}>

            <div className="BillboardRelativeBackground">
                <BackgroundRoad className="hidden md:block" />
                <BackgroundRoadMovil className="md:hidden" />
            </div>
        </div>
    )
}
