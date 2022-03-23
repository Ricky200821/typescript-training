"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = void 0;
const addBinaryNumbers_1 = require("./addBinaryNumbers");
const multiplyBinaries_1 = require("./multiplyBinaries");
const subBinaryNumbers_1 = require("./subBinaryNumbers");
function calculate(a, b, operation) {
    if (operation === '+') {
        return (0, addBinaryNumbers_1.addBinary)(a, b);
    }
    if (operation === '-') {
        return (0, subBinaryNumbers_1.subBinary)(a, b);
    }
    if (operation === '*') {
        return (0, multiplyBinaries_1.multiplyBinaries)(a, b);
    }
}
exports.calculate = calculate;
//# sourceMappingURL=calculate.js.map