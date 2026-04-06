// JavaScript Number Datatype

const a = 1;
const b = 1.01;
const c = -0.09;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

const notANumber = "Hello" / 2;
console.log(notANumber); // NaN - not a number
console.log(typeof notANumber); // number

const infinityNumber = 1 / 0;
console.log(infinityNumber); // Infinity
console.log(typeof infinityNumber); // number

// Type Coercion
const result = '10' + 5;

console.log(result); // 105
console.log(typeof result); // string

const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number

const result1 = true + 1;
console.log(result1); // 2
console.log(typeof result1); // number

const result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number

const result3 = 'Hello' + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string

const result4 = null + 5;
console.log(result4); // 5
console.log(typeof result4); // number

const result5 = undefined + 5;
console.log(result5); // NaN
console.log(typeof result5); // number

