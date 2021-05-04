import React from "react";

export interface TextField {
    name?: string;
    value?: string;
    onChange?: (event?: React.FormEvent<HTMLInputElement>) => void;
    className?: string;
    placeholder?: string;
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
