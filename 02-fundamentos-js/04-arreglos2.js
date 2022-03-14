let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('Largo Array: ', juegos.length);

let primero = juegos[0];
// let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1];

console.log({primero, ultimo})

console.log('\n');
juegos.forEach((elemento, indice, arr) => {
    console.log(elemento, indice, arr);
});

console.log('\n');
// Agregar elemento al final del arreglo
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

console.log('\n');
// Agrega elemento al inicio del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

console.log('\n');
// Elimina el ultimo elemento
let juegoBorrado = juegos.pop();;
console.log({juegoBorrado, juegos});

console.log('\n');
let pos = 1;
// Apartir de la posicion 1, borra 2
console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

console.log('\n');
// indexOf nos regresa el indice en el cual se encuentra
// el elemento que le pasamos
// Si retorna -1 quiere decir que no lo encontro
// CaseS Sensitive
let metroidIndex2 = juegos.indexOf('metroid');
console.log({metroidIndex2});
let metroidIndex = juegos.indexOf('Metroid')
console.log({metroidIndex});
