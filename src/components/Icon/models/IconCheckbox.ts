import React from "react";
import {GeneralProperties} from "../../../generalModels";
import {Icon} from "./index";

export interface IconCheckbox extends GeneralProperties, Icon{
    onClick?: (event?: React.MouseEvent<SVGSVGElement>) => void;
}
