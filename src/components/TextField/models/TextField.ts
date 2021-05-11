import React, {InputHTMLAttributes, ReactElement} from "react";
import {GeneralProperties} from "../../../generalModels";

export interface TextField extends InputHTMLAttributes<HTMLInputElement>{
}

export interface SelectOption {
    id: number;
    text: string;
    value: string;
}

export interface Select extends InputHTMLAttributes<HTMLSelectElement> {
    options?: SelectOption[];
    children?: ReactElement<SelectOption> | ReactElement<SelectOption>[];
}

export interface TextFieldNumber extends TextField{
    onMinus?: (value: number) => void;
    onPlus?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    value: number;
}

export interface AcceptTermsAndConditions {
    defaultValue?: boolean;
    onAgree: (x: boolean) => void;
    required?: boolean;
}

export interface FormGroup extends GeneralProperties{
    children: ReactElement | ReactElement[]
}
