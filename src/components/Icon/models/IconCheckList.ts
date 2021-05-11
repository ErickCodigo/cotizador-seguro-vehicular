import React from "react";
import {GeneralProperties} from "../../../generalModels";

export interface IconCheckList extends GeneralProperties{
    onClick?: (event?: React.MouseEvent<SVGSVGElement>) => void;
}
