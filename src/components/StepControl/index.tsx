import clsx from "clsx";
import StepByStepProgress from "../StepByStepProgress";
import {StepControl as StepControlInterface} from "./models/StepControl";

export default function StepControl(props: StepControlInterface) {
    const {stepsList, currentStep} = props;

    return (
        <div>
            <StepByStepProgress
                className="md:hidden py-4"
                currentStep={currentStep}
                steps={stepsList.length}/>

            <div className="mt-8 hidden md:block">
                {stepsList.map((x, i) => (
                    <div key={i} className={clsx("flex items-center", i < stepsList.length - 1 && "mb-8")}>
                        <span
                            className={clsx("StepControlItem", currentStep === (i + 1) && "StepControlItemFilled")}>
                            {i + 1}
                        </span>

                        <span>{x}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
