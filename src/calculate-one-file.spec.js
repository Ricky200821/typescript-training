"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const calculate_one_file_1 = require("./calculate-one-file");
describe(`when calculate receives two binaries and the plus operation`, () => {
    it(`it should return the sum of the binaries`, () => {
        const response = (0, calculate_one_file_1.calculate)('101', '110', '+');
        (0, chai_1.expect)(response).equal('1011');
    });
});
describe(`when calculate receives two binaries and the minus operation`, () => {
    it(`it should return the difference of the binaries`, () => {
        const response = (0, calculate_one_file_1.calculate)('111', '110', '-');
        (0, chai_1.expect)(response).equal('1');
    });
});
describe(`when calculate receives two binaries and the multiply operation`, () => {
    it(`it should return the multiplication of the binaries`, () => {
        const response = (0, calculate_one_file_1.calculate)('111', '110', '*');
        (0, chai_1.expect)(response).equal('101010');
    });
});
describe(`when calculate receives one binary and one not binary and the plus operation`, () => {
    it(`it should return undefined`, () => {
        const response = (0, calculate_one_file_1.calculate)('101', 'abc', '+');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when addBinary sums two binaries`, () => {
    it(`it should return the right binary`, () => {
        const response = (0, calculate_one_file_1.addBinary)('101', '110');
        (0, chai_1.expect)(response).equal('1011');
    });
});
describe(`when addBinary sums two binaries`, () => {
    it(`it should return the right binary`, () => {
        const response = (0, calculate_one_file_1.addBinary)('1001', '110');
        (0, chai_1.expect)(response).equal('1111');
    });
});
describe(`when addBinary has the first parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, calculate_one_file_1.addBinary)('abc', '110');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when addBinary has the second parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, calculate_one_file_1.addBinary)('110', '123');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when addBinary has both the first and the second parameters not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, calculate_one_file_1.addBinary)('456', '123');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when subBinary subtracs two binaries`, () => {
    it(`it should return the right binary`, () => {
        const response = (0, calculate_one_file_1.subBinary)('10110', '1101');
        (0, chai_1.expect)(response).equal('1001');
    });
});
describe(`when subBinary has the first parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, calculate_one_file_1.subBinary)('abc', '110');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when subBinary has the second parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, calculate_one_file_1.subBinary)('110', '123');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when subBinary has both the first and the second parameters not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, calculate_one_file_1.subBinary)('456', '123');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when multiplyBinaries multiplies two binaries`, () => {
    it(`it should return the right binary`, () => {
        const response = (0, calculate_one_file_1.multiplyBinaries)('101', '110');
        (0, chai_1.expect)(response).equal('11110');
    });
});
describe(`when multiplyBinaries has the first parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, calculate_one_file_1.multiplyBinaries)('abc', '111');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when multiplyBinaries has the second parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, calculate_one_file_1.multiplyBinaries)('1001', '123');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when multiplyBinaries has both the first and the second parameters not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, calculate_one_file_1.multiplyBinaries)('456', 'cbn');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe('when divideBinaries has both the first and the second parameters binary', () => {
    it(`it should return the result`, () => {
        const response = (0, calculate_one_file_1.divideBinaries)('1100', '110');
        //       expect(response).equal(re);
        console.log(response);
    });
});
describe(`when divideBinaries has the first parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, calculate_one_file_1.divideBinaries)('abc', '111');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when divideBinaries has the second parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, calculate_one_file_1.divideBinaries)('1001', '123');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when divideBinaries has both the first and the second parameters not binary`, () => {
    it(`it should return undefined`, () => {
        const response = (0, calculate_one_file_1.divideBinaries)('456', 'cbn');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when a and b are both binaries`, () => {
    it(`it should return undefined`, () => {
        const response = (0, calculate_one_file_1.checkBinaries)('101', '110');
        (0, chai_1.expect)(response).equal(undefined);
    });
});
describe(`when a is not binary`, () => {
    it(`it should return an object of type BinaryError with a message that says that a is not binary`, () => {
        const response = (0, calculate_one_file_1.checkBinaries)('123', '110');
        (0, chai_1.expect)(response.message).not.undefined;
    });
});
describe(`when b is not binary`, () => {
    it(`it should return an object of type BinaryError with a message that says that b is not binary`, () => {
        const response = (0, calculate_one_file_1.checkBinaries)('111', '20');
        (0, chai_1.expect)(response.message).not.undefined;
    });
});
describe(`when a and b are both not binary`, () => {
    it(`it should return an object of type BinaryError with a message that says that a and b are both not binary`, () => {
        const response = (0, calculate_one_file_1.checkBinaries)('123', '112');
        (0, chai_1.expect)(response.message).not.undefined;
    });
});
describe(`when check a real binary`, () => {
    it(`it should return true`, () => {
        const result = (0, calculate_one_file_1.isBinary)('10110');
        (0, chai_1.expect)(result).equal(true);
    });
});
describe(`when a not binary is passed`, () => {
    it(`it should return false`, () => {
        const result = (0, calculate_one_file_1.isBinary)('1bx0');
        (0, chai_1.expect)(result).equal(false);
    });
});
//# sourceMappingURL=calculate-one-file.spec.js.map