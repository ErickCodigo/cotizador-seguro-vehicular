import React from "react";
import ButtonBase from "./ButtonBase";
import {ButtonCall as ButtonCallInterface} from "./models/Button";

export default function ButtonCall(props: ButtonCallInterface) {
    const {text} = props;

    const IconSVGCall = (
        <svg
            className="inline-block mr-2"
            width="17"
            height="20"
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.82997 11.3334C5.05561 8.78682 4.40608 7.33539 6.03955 6.18605C7.44439 5.19744 7.35139 5.08734 6.08794 2.63343C4.92049 0.366231 4.43417 -0.220044 2.82702 1.08199C-0.747249 3.57822 0.204097 7.62914 4.09173 13.2089C7.97936 18.7888 11.5852 21.0744 15.0462 18.62C16.8132 17.5475 16.4315 16.8877 14.7108 15.01C12.8484 12.9776 12.7592 12.8768 11.3781 13.8488C9.76874 14.9813 8.60431 13.88 6.82997 11.3334Z"
                fill="#6769FF"/>
        </svg>
    );

    return (
        <ButtonBase
            className="flex items-center button-call"
            text={text}
            iconLeft={IconSVGCall}
        />
    )
}
