"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBinary = void 0;
function isBinary(a) {
    for (let i = 0; i < a.length; i++) {
        const stringChar = a[i];
        if (stringChar !== '0' && stringChar !== '1') {
            return false;
        }
    }
    return true;
}
exports.isBinary = isBinary;
//# sourceMappingURL=isBinary.js.map