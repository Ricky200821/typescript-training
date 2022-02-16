import { expect } from 'chai';
import { multiplyBinaries } from './multiplyBinaries';

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