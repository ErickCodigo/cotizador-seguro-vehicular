export function matchToUp(breakpoint: string): boolean {
    return matchMedia(`(min-width: ${breakpoint})`).matches;
}

export function isNumber(x: string):boolean {
    const regex = /^[0-9]*$/g
    return regex.test(x);
}

export function isLicensePlate(x:string) {
    const regex = /^[0-9A-Za-z-]*$/g
    return regex.test(x);
}
