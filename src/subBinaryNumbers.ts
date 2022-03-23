import { checkBinaries } from "./checkBinaries";

export function subBinary(a: string, b: string) {
    const error = checkBinaries(a, b)
    if (error !== undefined) {
        console.error(error.message)
        return undefined
    }
    var dec = Number(parseInt(a, 2)) - Number(parseInt(b, 2));
    return dec.toString(2);
}