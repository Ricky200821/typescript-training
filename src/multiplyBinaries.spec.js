"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const multiplyBinaries_1 = require("./multiplyBinaries");
describe(`when multiplyBinaries multiplies two binaries`, () => {
    it(`it should return the right binary`, () => {
        const response = (0, multiplyBinaries_1.multiplyBinaries)('101', '110');
        (0, chai_1.expect)(response).equal('11110');
    });
});
describe(`when multiplyBinaries has the first parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, multiplyBinaries_1.multiplyBinaries)('abc', '111');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when multiplyBinaries has the second parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, multiplyBinaries_1.multiplyBinaries)('1001', '123');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when multiplyBinaries has both the first and the second parameters not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, multiplyBinaries_1.multiplyBinaries)('456', 'cbn');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
//# sourceMappingURL=multiplyBinaries.spec.js.map