import HeaderApp from "../HeaderApp";
import {Layout as LayoutInterface} from "./models/Layout";
import {useEffect} from "react";
import {useRouter} from "next/router";
import NProgress from "nprogress";

export default function Layout(props: LayoutInterface) {
    const {children, headerBorder = false, ...rest} = props;
    const headerBorderClassName = headerBorder ? "border border-gray-200" : "";
    const router = useRouter();

    useEffect(() => {
        const handlerNProgressStart = () => NProgress.start();
        const handlerNProgressComplete = () => NProgress.done();

        router.events.on("routeChangeStart", handlerNProgressStart);
        router.events.on("routeChangeComplete", handlerNProgressComplete);

        return () => {
            router.events.off("routeChangeStart", handlerNProgressStart);
            router.events.off("routeChangeComplete", handlerNProgressComplete);
        }
    }, [])

    return (
        <div {...rest}>
            <HeaderApp className={headerBorderClassName} />
            {children}
        </div>
    )
}
