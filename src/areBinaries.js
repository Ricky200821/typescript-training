"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areBinaries = void 0;
const isBinary_1 = require("./isBinary");
function areBinaries(a, b) {
    const aBinary = (0, isBinary_1.isBinary)(a);
    const bBinary = (0, isBinary_1.isBinary)(b);
    return aBinary && bBinary;
}
exports.areBinaries = areBinaries;
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
//# sourceMappingURL=areBinaries.js.map