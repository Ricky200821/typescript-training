import { expect } from "chai";
import { checkBinaries } from "./checkBinaries";


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