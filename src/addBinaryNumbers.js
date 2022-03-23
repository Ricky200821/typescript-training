"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBinary = void 0;
const checkBinaries_1 = require("./checkBinaries");
function addBinary(a, b) {
    const error = (0, checkBinaries_1.checkBinaries)(a, b);
    if (error !== undefined) {
        console.error(error.message);
        return undefined;
    }
    var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    return dec.toString(2);
}
exports.addBinary = addBinary;
/*export function addBinary(a: string, b: string) {
    const allBinaries = areBinaries(a, b)
    if (allBinaries === false) {
        console.error('one parameter is not a binary')
        return undefined
    }
    var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    return dec.toString(2);
}*/
//# sourceMappingURL=addBinaryNumbers.js.map