"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const calculate_1 = require("./calculate");
describe(`when calculate receives two binaries and the plus operation`, () => {
    it(`it should return the sum of the binaries`, () => {
        const response = (0, calculate_1.calculate)('101', '110', '+');
        (0, chai_1.expect)(response).equal('1011');
    });
});
describe(`when calculate receives two binaries and the minus operation`, () => {
    it(`it should return the difference of the binaries`, () => {
        const response = (0, calculate_1.calculate)('111', '110', '-');
        (0, chai_1.expect)(response).equal('1');
    });
});
describe(`when calculate receives two binaries and the multiply operation`, () => {
    it(`it should return the multiplication of the binaries`, () => {
        const response = (0, calculate_1.calculate)('111', '110', '*');
        (0, chai_1.expect)(response).equal('101010');
    });
});
describe(`when calculate receives one binary and one not binary and the plus operation`, () => {
    it(`it should return undefined`, () => {
        const response = (0, calculate_1.calculate)('101', 'abc', '+');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
//# sourceMappingURL=calculate.spec.js.map