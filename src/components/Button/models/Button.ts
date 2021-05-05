import {CSSProperties, ReactElement} from "react";

export interface ButtonBase {
    text: string;
    className?: string;
    type?: 'submit' | 'reset' | 'button';
    style?: CSSProperties;
    iconLeft?: SVGElement | ReactElement | string;
    iconRight?: SVGElement | ReactElement | string;
}

export interface ButtonHandler extends ButtonBase {
    variant: string;
}

export interface ButtonCall {
    text: string;
}
