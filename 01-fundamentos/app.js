console.log('Hola Mundo')

console.log('\n');
console.log('%c Comentarios', 'color: orange; font-weight: bold; font-size: 16px');
// comentario de 1 linea
/* 
comentarios de
multilineas
*/

console.log('\n');
console.log('%c Intro a variables', 'color: orange; font-weight: bold; font-size: 16px');
let a = 10;
var b = 10;
const c = 10;
// c = 20; // esto no se puede hacer por que es una variable constante
a = 25; 
b = 35;

console.log(a);
console.log(b);
console.log(a+b);

// declarar varias variables en 1 sola linea
// let x, y, z;
// let o = 1, p = 2, q = 3;

// let x = 1,
//		 y = 2,
//     z = 3

console.log('\n');
console.log('%c Intro a la consola', 'color: orange; font-weight: bold; font-size: 16px');
console.log('a: ', a);
console.warn('b: ', b);
console.error('a+b: ', a+b);
console.info('a: ', a);
console.table('b: ', b)

console.log('\n');
console.log({a});
console.warn({b});
console.error('a + b: ', a+b);
console.info({a});
console.table({b})

console.log('\n');
let string1 = 'hola';
let string2 = 'Spiderman'
console.log(string1 + ' ' + string2);
console.table({string1, string2})

const saludo = string1 + string2
console.log('saludo: ', saludo)




console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
