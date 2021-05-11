import clsx from "clsx";
import IconArrowToLeftBordered from "../Icon/IconArrowToLeftBordered";
import ProgressBar from "../ProgressBar";
import {StepByStepProgress as StepByStepProgressInterface} from "./models/StepByStepProgress";

export default function StepByStepProgress(props: StepByStepProgressInterface) {
    const {steps, currentStep, className, style} = props;

    return (
        <div
            className={clsx("py-1 flex flex-nowrap items-center border-b border-gray-300", className && className)}
            style={style}>

            <IconArrowToLeftBordered className="h-full" height={40} width={40}/>

            <span
                className="mx-5 inline-block uppercase"
                style={{whiteSpace: "nowrap", fontSize: ".8rem", fontWeight: 500}}>Paso {currentStep} de {steps}</span>
            <ProgressBar percentageProgress={currentStep / steps * 100}/>
        </div>
    )
}
