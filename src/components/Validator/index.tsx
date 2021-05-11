import {Validator as ValidatorInterface} from "./models/Validator";

export default function ValidatorMessage(props: ValidatorInterface) {
    const {text, isValid, ...rest} = props;

    return (
        <div {...rest}>
            {!!text.length && !isValid && <span>{text}</span>}
        </div>
    )
}
