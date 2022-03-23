"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const addBinaryNumbers_1 = require("./addBinaryNumbers");
describe(`when addBinary sums two binaries`, () => {
    it(`it should return the right binary`, () => {
        const response = (0, addBinaryNumbers_1.addBinary)('101', '110');
        (0, chai_1.expect)(response).equal('1011');
    });
});
describe(`when addBinary sums two binaries`, () => {
    it(`it should return the right binary`, () => {
        const response = (0, addBinaryNumbers_1.addBinary)('1001', '110');
        (0, chai_1.expect)(response).equal('1111');
    });
});
describe(`when addBinary has the first parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, addBinaryNumbers_1.addBinary)('abc', '110');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when addBinary has the second parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, addBinaryNumbers_1.addBinary)('110', '123');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when addBinary has both the first and the second parameters not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, addBinaryNumbers_1.addBinary)('456', '123');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
//# sourceMappingURL=addBinaryNumbers.spec.js.map