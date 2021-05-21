import {useState} from "react";

const initialStateFallback = {};

export function useValidator(initialState) {
    const [validator, setValidator] = useState(initialState || initialStateFallback);

    function handlerChangeValidator(values) {
        setValidator(x => ({...x, ...values}));
    }

    return { validator, handlerChangeValidator };
}
