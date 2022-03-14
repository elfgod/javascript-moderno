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
console.log('%c Depuracion y breakpoints', 'color: orange; font-weight: bold; font-size: 16px');
/*
Debbuging o Depuracion en español, y breakpoints
Para poder hacer esta practica debemos hacerla en el navegador
agregar los break points en el tab o pestaña del navegador
y irle dando play siguiente para irlo reproduciendo

En el IDE tambien hacemos el mismo prodecimiento pero necesitamos
tener instalado NodeJS, run, start debugging

Para que?:
Muchas veces nuestra aplicacion tiene errores y con este procedimiento
podemos saber en que parte esta sucediendo este problema

Donde veo los errores?:
En el navegador en dicha pestaña

En la consola ctrl + j, en el tab pestaña de DEBUG CONSOLE
*/

console.log('\n');
console.log('%c Orden y lugar de las importaciones', 'color: orange; font-weight: bold; font-size: 16px');
/*
El orden en que importamos los codigos JS o archivos JS si importa
Se ejecutaran los archivos en orden desde el primero, segundo y etc

<script src="assets/js/app.js"></script>
<script src="assets/js/alerts.js"></script>

No es lo mismo que

<script src="assets/js/alerts.js"></script>
<script src="assets/js/app.js"></script>
*/

console.log('\n');
console.log('%c Prompt, confirm y alert', 'color: orange; font-weight: bold; font-size: 16px');
