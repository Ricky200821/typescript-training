"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const areBinaries_1 = require("./areBinaries");
describe(`when areBinaries cheks two binaries`, () => {
    it(`it should return true`, () => {
        const response = (0, areBinaries_1.areBinaries)('101', '110');
        (0, chai_1.expect)(response).equal(true);
    });
});
describe(`when a is not binary but b is binary`, () => {
    it(`it should return false`, () => {
        const response = (0, areBinaries_1.areBinaries)('214', '110');
        (0, chai_1.expect)(response).equal(false);
    });
});
describe(`when b is not binary but a is binary`, () => {
    it(`it should return false`, () => {
        const response = (0, areBinaries_1.areBinaries)('101', 'abc');
        (0, chai_1.expect)(response).equal(false);
    });
});
describe(`when both a and b are not binary`, () => {
    it(`it should return false`, () => {
        const response = (0, areBinaries_1.areBinaries)('567', 'abc');
        (0, chai_1.expect)(response).equal(false);
    });
});
//# sourceMappingURL=areBinaries.spec.js.map