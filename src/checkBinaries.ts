import { isBinary } from "./isBinary";

export type BinaryError = {
    message: string
}

export function checkBinaries(a: string, b: string) {
    const aBinary = isBinary(a)
    const bBinary = isBinary(b)
    let err: BinaryError
    if (!aBinary && !bBinary) {
        err = {
            message: 'both a and b are not binaries'
        }
        return err
    }
    if (!aBinary) {
        err = {
            message: 'a is not binary'
        }
        return err
    }
    if (!bBinary) {
        err = {
            message: 'b is not binary'
        }
        return err
    }
}