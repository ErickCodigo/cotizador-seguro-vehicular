import IconMinus from "../Icon/IconMinus";
import IconPlus from "../Icon/IconPlus";
import {TextFieldNumber as TextFieldNumberInterface} from "./models/TextField";

export default function TextFieldNumber(props: TextFieldNumberInterface) {
    const {value, step, max, min, onMinus, onPlus, ...rest} = props;

    function isInRange(x: number) {
        if (!isNaN(max) && isNaN(min)) return x <= max;
        if (!isNaN(min) && isNaN(max)) return x >= min;

        return x <= max && x >= min;
    }

    function handlerMinus(value: number) {
        const x = value - (step || 1);

        if (isInRange(x)) onMinus(x);
    }

    function handlerPlus(value: number) {
        const x = value + (step || 1);

        if (isInRange(x)) onPlus(x);
    }

    return (
        <div className="px-8 py-3 border rounded border-gray-300 flex">
            <span style={{flex: "1 0 0"}} className="text-center flex items-center">
                <button type="button" className="p-3" onClick={() => handlerMinus(value)}>
                    <IconMinus/>
                </button>
            </span>

            <input
                {...rest}
                value={value}
                style={{flex: "2 0 0"}}
                className="block w-full bg-white text-center rounded focus:bg-gray-100"
                type="text"/>

            <span style={{flex: "1 0 0"}} className="text-center flex items-center justify-end">
                <button type="button" className="p-3" onClick={() => handlerPlus(value)}>
                    <IconPlus/>
                </button>
            </span>
        </div>
    )
}
