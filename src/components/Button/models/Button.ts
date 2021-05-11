import {ButtonHTMLAttributes, CSSProperties, ReactElement} from "react";

export interface ButtonBase extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    iconLeft?: SVGElement | ReactElement | string;
    iconRight?: SVGElement | ReactElement | string;
}

export interface ButtonHandler extends ButtonBase {
    variant: string;
}

export interface ButtonCall extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
}
