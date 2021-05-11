import clsx from "clsx";
import {IconRadio as IconRadioInterface} from "./models/IconRadio";

export default function IconRadio(props: IconRadioInterface) {
    const {className} = props;

    return (
        <svg
            className={clsx("IconRadioOutline", className && className)}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                className="TextFieldIconFilled"
                fillRule="evenodd" clipRule="evenodd"
                d="M10 4C13.3 4 16 6.7 16 10C16 13.3 13.3 16 10 16C6.7 16 4 13.3 4 10C4 6.7 6.7 4 10 4Z"/>
            <path
                d="M0.5 10C0.5 4.77614 4.77614 0.5 10 0.5C15.2239 0.5 19.5 4.77614 19.5 10C19.5 15.2239 15.2239 19.5 10 19.5C4.77614 19.5 0.5 15.2239 0.5 10Z"
                stroke="#ffffff" strokeLinecap="square"/>
        </svg>
    )
}
