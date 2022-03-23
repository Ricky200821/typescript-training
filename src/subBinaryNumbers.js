"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subBinary = void 0;
const checkBinaries_1 = require("./checkBinaries");
function subBinary(a, b) {
    const error = (0, checkBinaries_1.checkBinaries)(a, b);
    if (error !== undefined) {
        console.error(error.message);
        return undefined;
    }
    var dec = Number(parseInt(a, 2)) - Number(parseInt(b, 2));
    return dec.toString(2);
}
exports.subBinary = subBinary;
//# sourceMappingURL=subBinaryNumbers.js.map