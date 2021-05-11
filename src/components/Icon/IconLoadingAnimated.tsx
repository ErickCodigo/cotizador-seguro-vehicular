import {IconLoadingAnimated as IconLoadingAnimatedInterface} from "./models/IconLoadingAnimated";

export default function IconLoadingAnimated(props: IconLoadingAnimatedInterface) {
    const {height, width, ...rest} = props;

    return (
        <svg
            {...rest}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="https://www.w3.org/1999/xlink"
            style={{margin: "auto", display: "block",}}
            width={width || 98}
            height={height || 98}
            className="IconLoadingAnimated"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid">
            <circle
                cx="50"
                cy="50"
                r="32"
                strokeWidth="8"
                stroke="#fe718d"
                strokeDasharray="50.26548245743669 50.26548245743669"
                fill="none"
                strokeLinecap="round">
            </circle>
        </svg>
    )
}
