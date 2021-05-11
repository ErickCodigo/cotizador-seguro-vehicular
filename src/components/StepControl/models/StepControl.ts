import {GeneralProperties} from "../../../generalModels";

export interface StepControl extends GeneralProperties{
    stepsList: string[];
    currentStep: number;
}
