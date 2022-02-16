import { calculate } from "./calculate"

console.log('ricky"s binary calculator')

const firstNumber = process.argv[2]
const secondNumber = process.argv[3]
const operation = process.argv[4]
if (operation !== '+' && operation !== '-' && operation !== '*') {
    console.error('operation not valid', operation)
    process.exit(1)
}
const result = calculate(firstNumber, secondNumber, operation)
if (result === undefined) {
    console.error('one of the numbers is not binary')
    process.exit(1)
}

console.log('first number', firstNumber);
console.log('second number', secondNumber);
console.log('operation', operation);
console.log('the result is', result)