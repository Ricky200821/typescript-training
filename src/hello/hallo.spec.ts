import { expect } from 'chai';
import { halloYou } from './hallo';

describe(`when you call halloYou function`, () => {
    it(`it should return a string`, () => {
        const response = halloYou();
        expect(typeof response).equal('string');
    });
});
