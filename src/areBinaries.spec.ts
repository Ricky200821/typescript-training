import { expect } from 'chai';
import { areBinaries } from './areBinaries';

describe(`when areBinaries cheks two binaries`, () => {
    it(`it should return true`, () => {
        const response = areBinaries('101', '110');
        expect(response).equal(true);
    });

});

describe(`when a is not binary but b is binary`, () => {
    it(`it should return false`, () => {
        const response = areBinaries('214', '110');
        expect(response).equal(false);
    });

});

describe(`when b is not binary but a is binary`, () => {
    it(`it should return false`, () => {
        const response = areBinaries('101', 'abc');
        expect(response).equal(false);
    });

});

describe(`when both a and b are not binary`, () => {
    it(`it should return false`, () => {
        const response = areBinaries('567', 'abc');
        expect(response).equal(false);
    });

});
