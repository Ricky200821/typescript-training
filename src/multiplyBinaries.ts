import { areBinaries } from "./areBinaries"

export function multiplyBinaries(a: string, b: string) {
    const allBinaries = areBinaries(a, b)
    if (allBinaries === false) {
        console.error('one parameter is not a binary')
        return undefined
    }
    var dec = Number(parseInt(a, 2)) * Number(parseInt(b, 2));
    return dec.toString(2);
}