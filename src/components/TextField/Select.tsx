import {Select as SelectInterface} from "./models/TextField";

export default function Select(props: SelectInterface) {
    const {value, onChange, onChangeSelect, options, placeholder} = props;

    return (
        <div className="mb-5 flex border-gray-300 border rounded">
            <select onChange={onChangeSelect} className="p-3 bg-white border border-l-0 border-t-0 border-b-0">
                {options.map((o) => (
                    <option key={o.id} value={o.value}>{o.text}</option>
                ))}
            </select>

            <input value={value} onChange={onChange} className="px-3" type="text" placeholder={placeholder}
                   style={{width: "100%"}}/>
        </div>
    )
}
