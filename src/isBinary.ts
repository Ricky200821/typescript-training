export function isBinary(a: string) {
    for (let i = 0; i < a.length; i++) {
        const stringChar = a[i]
        if (stringChar !== '0' && stringChar !== '1') {
            return false
        }
    }
    return true
}
