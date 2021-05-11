interface Props {
    width?: number;
    height?: number;
}

export default function IconMinus({ width, height}: Props) {
    return (
        <svg
            width={width || "12"}
            height={height || "2"} viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L1 1" stroke="#939DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
