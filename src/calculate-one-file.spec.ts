import { expect } from 'chai';
import { addBinary, calculate, checkBinaries, divideBinaries, isBinary, multiplyBinaries, subBinary } from './calculate-one-file';

describe(`when calculate receives two binaries and the plus operation`, () => {
    it(`it should return the sum of the binaries`, () => {
        const response = calculate('101', '110', '+');
        expect(response).equal('1011');
    });
});

describe(`when calculate receives two binaries and the minus operation`, () => {
    it(`it should return the difference of the binaries`, () => {
        const response = calculate('111', '110', '-');
        expect(response).equal('1');
    });
});

describe(`when calculate receives two binaries and the multiply operation`, () => {
    it(`it should return the multiplication of the binaries`, () => {
        const response = calculate('111', '110', '*');
        expect(response).equal('101010');
    });
});

describe(`when calculate receives one binary and one not binary and the plus operation`, () => {
    it(`it should return undefined`, () => {
        const response = calculate('101', 'abc', '+');
        expect(response).equal(undefined);
    });
});

describe(`when addBinary sums two binaries`, () => {
    it(`it should return the right binary`, () => {
        const response = addBinary('101', '110');
        expect(response).equal('1011');
    });
});

describe(`when addBinary sums two binaries`, () => {
    it(`it should return the right binary`, () => {
        const response = addBinary('1001', '110');
        expect(response).equal('1111');
    });
});

describe(`when addBinary has the first parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = addBinary('abc', '110');
        expect(response).equal(undefined);
    });
});

describe(`when addBinary has the second parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = addBinary('110', '123');
        expect(response).equal(undefined);
    });
});

describe(`when addBinary has both the first and the second parameters not binary`, () => {
    it(`it should return undefined`, () => {
        const response = addBinary('456', '123');
        expect(response).equal(undefined);
    });
});

describe(`when subBinary subtracs two binaries`, () => {
    it(`it should return the right binary`, () => {
        const response = subBinary('10110', '1101');
        expect(response).equal('1001');
    });
});

describe(`when subBinary has the first parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = subBinary('abc', '110');
        expect(response).equal(undefined);
    });
});

describe(`when subBinary has the second parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = subBinary('110', '123');
        expect(response).equal(undefined);
    });
});

describe(`when subBinary has both the first and the second parameters not binary`, () => {
    it(`it should return undefined`, () => {
        const response = subBinary('456', '123');
        expect(response).equal(undefined);
    });
});

describe(`when multiplyBinaries multiplies two binaries`, () => {
    it(`it should return the right binary`, () => {
        const response = multiplyBinaries('101', '110');
        expect(response).equal('11110');
    });
});

describe(`when multiplyBinaries has the first parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = multiplyBinaries('abc', '111');
        expect(response).equal(undefined);
    });
});

describe(`when multiplyBinaries has the second parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = multiplyBinaries('1001', '123');
        expect(response).equal(undefined);
    });
});

describe(`when multiplyBinaries has both the first and the second parameters not binary`, () => {
    it(`it should return undefined`, () => {
        const response = multiplyBinaries('456', 'cbn');
        expect(response).equal(undefined);
    });
});

describe('when divideBinaries has both the first and the second parameters binary', () => {
    it(`it should return the result`, () => {
        const response = divideBinaries('1100', '110');
        //       expect(response).equal(re);
        console.log(response)
    });
})

describe(`when divideBinaries has the first parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = divideBinaries('abc', '111');
        expect(response).equal(undefined);
    });
});

describe(`when divideBinaries has the second parameter not binary`, () => {
    it(`it should return undefined`, () => {
        const response = divideBinaries('1001', '123');
        expect(response).equal(undefined);
    });
});

describe(`when divideBinaries has both the first and the second parameters not binary`, () => {
    it(`it should return undefined`, () => {
        const response = divideBinaries('456', 'cbn');
        expect(response).equal(undefined);
    });
});

describe(`when a and b are both binaries`, () => {
    it(`it should return undefined`, () => {
        const response = checkBinaries('101', '110');
        expect(response).equal(undefined);
    });
});

describe(`when a is not binary`, () => {
    it(`it should return an object of type BinaryError with a message that says that a is not binary`, () => {
        const response = checkBinaries('123', '110');
        expect(response.message).not.undefined;
    });
});

describe(`when b is not binary`, () => {
    it(`it should return an object of type BinaryError with a message that says that b is not binary`, () => {
        const response = checkBinaries('111', '20');
        expect(response.message).not.undefined;
    });
});

describe(`when a and b are both not binary`, () => {
    it(`it should return an object of type BinaryError with a message that says that a and b are both not binary`, () => {
        const response = checkBinaries('123', '112');
        expect(response.message).not.undefined;
    });
});

describe(`when check a real binary`, () => {
    it(`it should return true`, () => {
        const result = isBinary('10110');
        expect(result).equal(true);
    });
});

describe(`when a not binary is passed`, () => {
    it(`it should return false`, () => {
        const result = isBinary('1bx0');
        expect(result).equal(false);
    });
});
