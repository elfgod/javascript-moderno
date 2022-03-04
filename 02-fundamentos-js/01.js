/* 
Tipos de datos Primitivos

Boolean: true / false :: Verdadero y Falso
Null: Sin valor en lo absoluto
Undefined: Una variable declarada que aun no se le asigna valor
Number: Integrers, floats, etc
Symbol: Es un valor unico que no es igual a ningun otro valor

*/

let nombre = 'Spiderman';
console.log(nombre)

// Error estamos reinializando la variable
// let nombre = 'Kakaroto' 
nombre = 'Kakaroto';
console.log(nombre);

nombre = 'Tia May';
console.log(nombre);
nombre = "Krilin";
console.log(nombre);
nombre = `Yamcha`;
console.log(nombre);

console.log('####')
console.log(typeof nombre);

let isUserLogged = true;
console.log('isUserLogged: ', isUserLogged);
isUserLogged = false;
console.log('isUserLogged: ', isUserLogged);

// Si se fijan ambos datos van a dar numero apesar que
// el primero es un entero y el segundo un decimal (float)
let edad = 34;
console.log(typeof edad);

edad = 34.001;
console.log(typeof edad);

console.log('####')
let superPoder;
console.log(superPoder);
console.log(typeof superPoder);
console.log('####')
let soyNull = null;
console.log(soyNull);
console.log(typeof soyNull);

console.log('####')
let symbol1 = Symbol();
let symbol2 = Symbol();

console.log(typeof symbol1)
console.log(symbol1 === symbol2);