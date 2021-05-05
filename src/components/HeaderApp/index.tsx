import React from "react";
import clsx from "clsx";
import Logo from "../Logo";
import Button from "../Button/Button";
import {HeaderApp as HeaderAppInterface} from "./models/HeaderApp";
import useBreakpoint from "../customHooks/useBreakpoint";
import {valuesBreakpoints} from "../../specs/valuesBreakpoints";
import {ButtonBase} from "../Button";

export default function HeaderApp(props: HeaderAppInterface) {
    const {className} = props;
    const isDesktop = useBreakpoint(valuesBreakpoints.lg);
    const text = isDesktop ? "(01) 411 6001" : "Llámanos";

    return (
        <div className={clsx("HeaderApp", className && className)}>
            <div className="w-full max-w-screen-lg mx-auto flex items-center justify-between">
                <div>
                    <Logo/>
                </div>
                <div className="flex flex-nowrap items-center">
                    <ButtonBase className="text-sm mr-3 text-gray-400 hidden md:inline-block"
                                text="¿Tienes alguna duda?"/>
                    <Button variant="ButtonCall" text={text}/>
                </div>
            </div>
        </div>
    )
}
