import {IconSwitchOn as IconChecklistSelectedInterface} from './models/IconSwitchOn';

export default function IconSwitchOn(props: IconChecklistSelectedInterface) {
    const {width, height, ...rest} = props;

    return (
        <svg
            {...rest}
            width={width || "51"}
            height={height || "32"}
            viewBox="0 0 51 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M51 15.5C51 6.93959 44.0604 0 35.5 0H15.5C6.93959 0 0 6.93959 0 15.5C0 24.0604 6.93959 31 15.5 31H35.5C44.0604 31 51 24.0604 51 15.5Z" fill="#7CC954"/>
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="51" height="31">
                <path fillRule="evenodd" clipRule="evenodd" d="M51 15.5C51 6.93959 44.0604 0 35.5 0H15.5C6.93959 0 0 6.93959 0 15.5C0 24.0604 6.93959 31 15.5 31H35.5C44.0604 31 51 24.0604 51 15.5Z" fill="#7CC954"/>
            </mask>
            <g mask="url(#mask0)">
                <g filter="url(#filter0_dd)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M35.5 29C27.768 29 21.5 22.732 21.5 15C21.5 7.26801 27.768 1 35.5 1C43.232 1 49.5 7.26801 49.5 15C49.5 22.732 43.232 29 35.5 29Z" fill="white"/>
                </g>
            </g>
            <defs>
                <filter id="filter0_dd" x="19.5" y="1" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.330521 0 0 0 0 0.475 0 0 0 0 0.367214 0 0 0 0.06 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.382031 0 0 0 0 0.679167 0 0 0 0 0.45682 0 0 0 0.6 0"/>
                    <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}
