import {ApiPolicyholder} from "./ApiPolicyholder";

export function isArray(xs: any) {
    return xs.hasOwnProperty("length");
}

export function isObject(xs: any): boolean {
    return !!Object.keys(xs || {}).length;
}

export function matchToUp(breakpoint: string): boolean {
    return matchMedia(`(min-width: ${breakpoint})`).matches;
}

export function containsNumber(x: string): boolean {
    const regex = /^[0-9]*$/g
    return regex.test(x);
}

export function isLicensePlate(x: string) {
    const regex = /^[0-9A-Za-z-]*$/g
    return regex.test(x);
}

export function isValidDNI(type: string, value: string): boolean {
    const response = new ApiPolicyholder().findOne(type, value);
    return isObject(response);
}
