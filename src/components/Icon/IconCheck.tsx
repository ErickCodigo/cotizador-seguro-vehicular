import {IconCheck as IconCheckInterface} from "./models/IconCheck";

export default function IconCheck(props: IconCheckInterface) {
    const {width, height, ...rest} = props;

    return (
        <svg
            {...rest}
            width={width || "16"}
            height={height || "16"}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.3178 3.92748C12.634 4.19503 12.6734 4.66827 12.4059 4.98447L6.90588 11.4845C6.76799 11.6474 6.56719 11.7439 6.3538 11.7497C6.14041 11.7556 5.93465 11.6702 5.78808 11.515L2.95474 8.51498C2.67033 8.21384 2.6839 7.73916 2.98503 7.45476C3.28617 7.17035 3.76085 7.18391 4.04526 7.48505L6.30263 9.87521L11.2608 4.01556C11.5284 3.69935 12.0016 3.65992 12.3178 3.92748Z" fill="#43B748"/>
        </svg>
    )
}
