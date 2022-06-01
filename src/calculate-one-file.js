"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areBinaries = exports.isBinary = exports.checkBinaries = exports.divideBinaries = exports.multiplyBinaries = exports.subBinary = exports.addBinary = exports.calculate = void 0;
function calculate(a, b, operation) {
    if (operation === '+') {
        return addBinary(a, b);
    }
    if (operation === '-') {
        return subBinary(a, b);
    }
    if (operation === '*') {
        return multiplyBinaries(a, b);
    }
    if (operation === '/') {
        return divideBinaries(a, b);
    }
}
exports.calculate = calculate;
function addBinary(a, b) {
    const error = checkBinaries(a, b);
    if (error !== undefined) {
        console.error(error.message);
        return undefined;
    }
    var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    return dec.toString(2);
}
exports.addBinary = addBinary;
function subBinary(a, b) {
    const error = checkBinaries(a, b);
    if (error !== undefined) {
        console.error(error.message);
        return undefined;
    }
    var dec = Number(parseInt(a, 2)) - Number(parseInt(b, 2));
    return dec.toString(2);
}
exports.subBinary = subBinary;
function multiplyBinaries(a, b) {
    const error = checkBinaries(a, b);
    if (error !== undefined) {
        console.error(error.message);
        return undefined;
    }
    var dec = Number(parseInt(a, 2)) * Number(parseInt(b, 2));
    return dec.toString(2);
}
exports.multiplyBinaries = multiplyBinaries;
function divideBinaries(a, b) {
    const error = checkBinaries(a, b);
    if (error !== undefined) {
        console.error(error.message);
        return undefined;
    }
    var dec = Number(parseInt(a, 2)) / Number(parseInt(b, 2));
    return dec.toString(2);
}
exports.divideBinaries = divideBinaries;
function checkBinaries(a, b) {
    const aBinary = isBinary(a);
    const bBinary = isBinary(b);
    let err;
    if (!aBinary && !bBinary) {
        err = {
            message: 'both a and b are not binaries',
        };
        return err;
    }
    if (!aBinary) {
        err = {
            message: 'a is not binary',
        };
        return err;
    }
    if (!bBinary) {
        err = {
            message: 'b is not binary',
        };
        return err;
    }
}
exports.checkBinaries = checkBinaries;
function isBinary(a) {
    for (let i = 0; i < a.length; i++) {
        const stringChar = a[i];
        if (stringChar !== '0' && stringChar !== '1') {
            return false;
        }
    }
    return true;
}
exports.isBinary = isBinary;
function areBinaries(a, b) {
    const aBinary = isBinary(a);
    const bBinary = isBinary(b);
    return aBinary && bBinary;
}
exports.areBinaries = areBinaries;
//# sourceMappingURL=calculate-one-file.js.map