import React, {useState} from "react";
import Layout from "../src/components/Layout";
import StepControl from "../src/components/StepControl";
import FormCarData from "../src/components/StepControl/FormCarData";
import FormCoverageData from "../src/components/StepControl/FormCoverageData";

export default function CreateCar() {
    const [currentStep, setCurrentStep] = useState(1);
    const steps = ["Datos del auto", "Arma tu plan"];

    return (
        <Layout headerBorder>
            <div className="MainContent max-w-screen-lg mx-auto md:flex w-full px-6 md:px-0 pb-4">
                <div className="border-r border-gray-100 flex30">
                    <StepControl currentStep={currentStep} stepsList={steps} />
                </div>

                <div className="flex70">
                    {/*animate this*/}
                    {currentStep === 1 && <FormCarData changeStep={setCurrentStep} />}
                    {currentStep === 2 && <FormCoverageData changeStep={setCurrentStep} />}
                </div>
            </div>
        </Layout>
    )
}
