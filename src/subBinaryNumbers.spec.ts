import { expect } from 'chai';
import { subBinary } from './subBinaryNumbers';

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