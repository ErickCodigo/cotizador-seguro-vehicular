import {IconSwitchOff as IconSwitchOffInterface} from "./models/IconSwitchOff";

export default function IconSwitchOff(props: IconSwitchOffInterface) {
    const {width, height, ...rest} = props;

    return (
        <svg width="51" height="32" viewBox="0 0 51 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.43959 6.93959 0.5 15.5 0.5H35.5C44.0604 0.5 51 7.43959 51 16C51 24.5604 44.0604 31.5 35.5 31.5H15.5C6.93959 31.5 0 24.5604 0 16Z" fill="#E3E9F7"/>
            <g filter="url(#filter0_dd)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 30C23.232 30 29.5 23.732 29.5 16C29.5 8.26801 23.232 2 15.5 2C7.76801 2 1.5 8.26801 1.5 16C1.5 23.732 7.76801 30 15.5 30Z" fill="white"/>
            </g>
            <defs>
                <filter id="filter0_dd" x="-0.5" y="2" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.64 0 0 0 0 0.672 0 0 0 0 0.8 0 0 0 0.06 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.64 0 0 0 0 0.672 0 0 0 0 0.8 0 0 0 0.3 0"/>
                    <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}
