import { isBinary } from "./isBinary";

export function areBinaries(a: string, b: string) {
    const aBinary = isBinary(a)
    const bBinary = isBinary(b)
    return aBinary && bBinary
}

// alternative version
/*export function areBinaries1(a: string, b: string) {
    const aBinary = isBinary(a)
    if (aBinary === false) {
        return false
    }
    const bBinary = isBinary(b)
    if (bBinary === false) {
        return false
    }
    return true
}*/