import {GeneralProperties} from "../../../generalModels";

export interface StepByStepProgress extends GeneralProperties{
    steps: number;
    currentStep: number;
}
