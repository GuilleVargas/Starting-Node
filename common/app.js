let doubleNumber = require('./double.js');
let tripleNumber = require('./triple.js');
let personita = require('./personita.js');

let results = tripleNumber(6);
console.log(results);

let result = doubleNumber(2);
console.log(result);

let obPersonita = new personita("Guille","Vargas");
console.log(obPersonita.getNombre());
obPersonita.setNombre("Pepe");
console.log(obPersonita.getNombre());