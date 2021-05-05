import React, {InputHTMLAttributes} from "react";

export interface TextField extends InputHTMLAttributes<HTMLInputElement>{
    onChange?: (event?: React.FormEvent<HTMLInputElement>) => void;
}

export interface SelectOption {
    id: number;
    text: string;
    value: string;
}

export interface Select extends TextField {
    onChangeSelect?: (event?: React.ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
}

export interface AcceptTermsAndConditions {
    defaultValue?: boolean;
    onAgree: (x: boolean) => void;
}
