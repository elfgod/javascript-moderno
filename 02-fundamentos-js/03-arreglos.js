/*

Son un objeto muy parecido a una lista de informacion, que
contienen un grupo de elementos

Es como una lista de ir al supermercado que la llenamos con
informacion de las cosas que vamos a comprar o que vamos
comprando y tachando

Usualmente dentro de un arreglo se almacena informacion con el
mismo tipo de dato, pero en JavaScript no es una regla y y no
siempre sucede

Ejemplo un estante de juegos, seria un arreglo de diferentes juegps

Los arreglos de JS inician en la posicion 0

*/

// Arreglo que tendra 10 elementos internamente
// Esto existe pero no es muy comun utilizarlo
const arr = new Array(10);
console.log(arr);

console.log('\n');
// Arreglo vacio
let arr2 = []

console.log('\n');
let videoJuegos = ['Mario 3', 'Megaman', 'Zelda'];
console.log(videoJuegos);
console.log({videoJuegos});
console.log(videoJuegos[0]);
console.log(videoJuegos[1]);
console.log(videoJuegos[2]);

console.log('\n');
let arregloCosas = [
    true,
    123,
    'ElgGod',
    1 + 2,
    function() {
        console.log('funcion normal en arreglo ')
    },
    () => {
        console.log('funcion arrow en arreglo');
    },
    {objeto: 100},
    ['X', 'Megaman', 'Zero', 'Dr. light', ['Dr WIlly', 'Woodman']],
]
console.log({arregloCosas})

console.log('\n');
console.log(arregloCosas[7]); 
console.log(arregloCosas[7][3]);
console.log(arregloCosas[7][4]);
console.log(arregloCosas[7][4][1]);

console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
