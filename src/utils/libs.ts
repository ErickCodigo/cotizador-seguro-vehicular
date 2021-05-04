export function matchToUp(breakpoint: string): boolean {
    return matchMedia(`(min-width: ${breakpoint})`).matches;
}
