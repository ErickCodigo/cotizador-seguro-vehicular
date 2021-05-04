import {useEffect, useState} from "react";
import {matchToUp} from "../../utils/libs";

export default function useBreakpoint(valueBreakpoint: string) {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        setIsDesktop(matchToUp(valueBreakpoint));
    }, [])

    return isDesktop;
}
