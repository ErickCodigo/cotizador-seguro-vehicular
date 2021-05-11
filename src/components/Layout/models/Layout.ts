import {GeneralProperties} from "../../../generalModels";
import {ReactElement} from "react";

export interface Layout extends GeneralProperties{
    children: ReactElement | ReactElement[];
    headerBorder?: boolean;
}
