import { expect } from 'chai';
import { addBinary } from './addBinaryNumbers';

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