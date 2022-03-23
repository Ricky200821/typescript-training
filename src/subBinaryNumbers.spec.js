"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const subBinaryNumbers_1 = require("./subBinaryNumbers");
describe(`when subBinary subtracs two binaries`, () => {
    it(`it should return the right binary`, () => {
        const response = (0, subBinaryNumbers_1.subBinary)('10110', '1101');
        (0, chai_1.expect)(response).equal('1001');
    });
});
describe(`when subBinary has the first parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, subBinaryNumbers_1.subBinary)('abc', '110');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when subBinary has the second parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, subBinaryNumbers_1.subBinary)('110', '123');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when subBinary has both the first and the second parameters not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, subBinaryNumbers_1.subBinary)('456', '123');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
//# sourceMappingURL=subBinaryNumbers.spec.js.map