// Modules

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names');
const {john, peter} = require('./4-names'); //Destructuring
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

//console.log(names);
console.log(data);

//Acces properties
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

//Destructuring
sayHi(john);
sayHi(peter);

// Si solo existe una función se ejecuturá directamente pero debe de llamarse el el archivo.
require('./7-mind-grenade');