import { expect } from 'chai';
import { isBinary } from './isBinary';

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