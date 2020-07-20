let tripleFunction = require('./triple');

let value = process.argv.slice(2);
let number = value[0];

let result = tripleFunction(number);
console.log(result);