import { addBinary } from "./addBinaryNumbers"
import { multiplyBinaries } from "./multiplyBinaries"
import { subBinary } from "./subBinaryNumbers"

type Operation = '+' | '-' | '*'

export function calculate(a: string, b: string, operation: Operation) {
    if (operation === '+') {
        return addBinary(a, b)
    }
    if (operation === '-') {
        return subBinary(a, b)
    }
    if (operation === '*') {
        return multiplyBinaries(a, b)
    }
}
