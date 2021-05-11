import {Select as SelectInterface} from "./models/TextField";
import clsx from "clsx";

export default function Select(props: SelectInterface) {
    const {children, options, onChange, className, style, placeholder, ...rest} = props;

    return (

        <div className={clsx("border rounded", className && className)}>
            <div className="text-xs text-gray-300 pl-4 pt-2">{placeholder}</div>
            <select
                {...rest}
                onChange={onChange}
                className="block w-full border-0 p-3 pt-1 bg-white border-gray-300">
                style={style}
                {children && children}

                {!children && (
                    options.map((o) => (
                        <option key={o.id} value={o.value}>{o.text}</option>
                    ))
                )}
            </select>
        </div>
    )
}
