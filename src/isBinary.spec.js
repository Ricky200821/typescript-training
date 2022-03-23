"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const isBinary_1 = require("./isBinary");
describe(`when check a real binary`, () => {
    it(`it should return true`, () => {
        const result = (0, isBinary_1.isBinary)('10110');
        (0, chai_1.expect)(result).equal(true);
    });
});
describe(`when a not binary is passed`, () => {
    it(`it should return false`, () => {
        const result = (0, isBinary_1.isBinary)('1bx0');
        (0, chai_1.expect)(result).equal(false);
    });
});
//# sourceMappingURL=isBinary.spec.js.map