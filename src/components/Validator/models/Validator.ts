import {GeneralProperties} from "../../../generalModels";

export interface Validator extends GeneralProperties{
    text: string;
    isValid: boolean;
}
