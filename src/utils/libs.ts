import {ApiPolicyholder} from "./api";

export function matchToUp(breakpoint: string): boolean {
    return matchMedia(`(min-width: ${breakpoint})`).matches;
}

export function containsNumber(x: string):boolean {
    const regex = /^[0-9]*$/g
    return regex.test(x);
}

export function isLicensePlate(x:string) {
    const regex = /^[0-9A-Za-z-]*$/g
    return regex.test(x);
}

export async function isValidDNI(type: string, value: string) {
    const response = await new ApiPolicyholder().findOne(type, value);
    return !!Object.keys(response).length;
}
