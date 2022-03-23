"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const checkBinaries_1 = require("./checkBinaries");
describe(`when a and b are both binaries`, () => {
    it(`it should return undefined`, () => {
        const response = (0, checkBinaries_1.checkBinaries)('101', '110');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when a is not binary`, () => {
    it(`it should return an object of type BinaryError with a message that says that a is not binary`, () => {
        const response = (0, checkBinaries_1.checkBinaries)('123', '110');
        (0, chai_1.expect)(response.message).not.undefined;
    });
});
describe(`when b is not binary`, () => {
    it(`it should return an object of type BinaryError with a message that says that b is not binary`, () => {
        const response = (0, checkBinaries_1.checkBinaries)('111', '20');
        (0, chai_1.expect)(response.message).not.undefined;
    });
});
describe(`when a and b are both not binary`, () => {
    it(`it should return an object of type BinaryError with a message that says that a and b are both not binary`, () => {
        const response = (0, checkBinaries_1.checkBinaries)('123', '112');
        (0, chai_1.expect)(response.message).not.undefined;
    });
});
//# sourceMappingURL=checkBinaries.spec.js.map