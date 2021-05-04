import {CSSProperties, ReactElement} from "react";

export interface ButtonBase {
    text: string;
    className?: string;
    style?: CSSProperties;
    iconLeft?: SVGElement | ReactElement | string;
    iconRight?: SVGElement | ReactElement | string;
}

export interface ButtonHandler extends ButtonBase {
    type: string;
}

export interface ButtonCall {
    text: string;
}
