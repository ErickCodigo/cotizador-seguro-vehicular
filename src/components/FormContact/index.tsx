import {FormContact as FormContactInterface} from "./models/FormContact";
import clsx from "clsx";
import FormContactContent from "./FormContactContent";

export default function FormContact(props: FormContactInterface) {
    const {className, style} = props;

    return (
        <div className={clsx("FormContact", className && className)} style={style}>
            <div className="FormContactWrapper">
                <h2 className="FormContactTitle">Déjanos tus datos</h2>
                <FormContactContent />
            </div>
        </div>
    );
}
