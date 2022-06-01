type Operation = '+' | '-' | '*' | '/'

export function calculate(a: string, b: string, operation: Operation) {
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

export function addBinary(a: string, b: string) {
    const error = checkBinaries(a, b);
    if (error !== undefined) {
        console.error(error.message);
        return undefined;
    }
    var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    return dec.toString(2);
}

export function subBinary(a: string, b: string) {
    const error = checkBinaries(a, b);
    if (error !== undefined) {
        console.error(error.message);
        return undefined;
    }
    var dec = Number(parseInt(a, 2)) - Number(parseInt(b, 2));
    return dec.toString(2);
}

export function multiplyBinaries(a: string, b: string) {
    const error = checkBinaries(a, b);
    if (error !== undefined) {
        console.error(error.message);
        return undefined;
    }
    var dec = Number(parseInt(a, 2)) * Number(parseInt(b, 2));
    return dec.toString(2);
}

export function divideBinaries(a: string, b: string) {
    const error = checkBinaries(a, b);
    if (error !== undefined) {
        console.error(error.message);
        return undefined
    }
    var dec = Number(parseInt(a, 2)) / Number(parseInt(b, 2));
    return dec.toString(2);
}

export type BinaryError = {
    message: string;
};

export function checkBinaries(a: string, b: string) {
    const aBinary = isBinary(a);
    const bBinary = isBinary(b);
    let err: BinaryError;
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

export function isBinary(a: string) {
    for (let i = 0; i < a.length; i++) {
        const stringChar = a[i];
        if (stringChar !== '0' && stringChar !== '1') {
            return false;
        }
    }
    return true;
}

export function areBinaries(a: string, b: string) {
    const aBinary = isBinary(a)
    const bBinary = isBinary(b)
    return aBinary && bBinary
}