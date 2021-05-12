import React from "react";
import clsx from "clsx";
import Logo from "../Logo";
import Button from "../Button/Button";
import {HeaderApp as HeaderAppInterface} from "./models/HeaderApp";
import useBreakpoint from "../customHooks/useBreakpoint";
import {valuesBreakpoints} from "../../specs/valuesBreakpoints";
import {ButtonBase} from "../Button";
import {useRouter} from "next/router";

export default function HeaderApp(props: HeaderAppInterface) {
    const {className} = props;
    const isDesktop = useBreakpoint(valuesBreakpoints.lg);
    const text = isDesktop ? "(01) 411 6001" : "Llámanos";
    const router = useRouter();

    return (
        <div className={clsx("HeaderApp", className && className)}>
            <div className="w-full h-full max-w-screen-lg mx-auto flex items-center justify-between">
                <div className="cursor-pointer" onClick={() => router.push("/")}>
                    <Logo/>
                </div>
                <div className="flex flex-nowrap items-center">
                    <ButtonBase
                        className="text-xs mr-3 text-gray-400 hidden md:inline-block"
                        text="¿Tienes alguna duda?"/>

                    <Button className="text-sm" variant="ButtonCall" text={text}/>
                </div>
            </div>
        </div>
    )
}
