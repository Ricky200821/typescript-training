"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const hallo_1 = require("./hallo");
describe(`when you call halloYou function`, () => {
    it(`it should return a string`, () => {
        const response = (0, hallo_1.halloYou)();
        (0, chai_1.expect)(typeof response).equal('string');
    });
});
//# sourceMappingURL=hallo.spec.js.map