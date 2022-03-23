"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkBinaries = void 0;
const isBinary_1 = require("./isBinary");
function checkBinaries(a, b) {
    const aBinary = (0, isBinary_1.isBinary)(a);
    const bBinary = (0, isBinary_1.isBinary)(b);
    let err;
    if (!aBinary && !bBinary) {
        err = {
            message: 'both a and b are not binaries'
        };
        return err;
    }
    if (!aBinary) {
        err = {
            message: 'a is not binary'
        };
        return err;
    }
    if (!bBinary) {
        err = {
            message: 'b is not binary'
        };
        return err;
    }
}
exports.checkBinaries = checkBinaries;
//# sourceMappingURL=checkBinaries.js.map