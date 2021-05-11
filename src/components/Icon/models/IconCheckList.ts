import React from "react";
import {GeneralProperties} from "../../../generalModels";
import {Icon} from "./index";

export interface IconCheckList extends GeneralProperties, Icon{
    onClick?: (event?: React.MouseEvent<SVGSVGElement>) => void;
}
