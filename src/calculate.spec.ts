import { expect } from 'chai';
import { calculate } from './calculate';

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