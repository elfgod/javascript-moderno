function saludar() {
  console.log('Hola Mundo')
}

saludar()

console.log('\n')
// Funcion anonima que no tiene un nombre
// Esta funcion nos evitara errores de reasignacion de nombre
const saludar2 = function () {
  console.log('Saludar 2')
}

saludar2()

console.log('\n')
const saludar3 = function (nombre) {
  console.log('hola ' + nombre)
}

// saludar3() // undefined por que no le pasamos ningun parametro
saludar3('elfgod')

console.log('\n')
// Funcion flecha o arrow function
const saludar4 = () => {
  console.log('Saludar 4, Funcion flecha o arrow function')
}

saludar4()

// Toda funcion no se retorne nada, se retorna undefined
console.log('\n')
const saludar5 = () => {
  return 10
  // Esto esta despues del return, no se ejecuta
  // console.log('esto no se va a ejecutar')
}

const retornoSaludar5 = saludar5()
console.log('retornoSaludar5: ', retornoSaludar5)

console.log('\n')
const returnArray = () => {
  return [1, 2, 3]
}

console.log('returnArray(): ', returnArray())

console.log('\n')
const retorna2Valores = () => {
  // Error
  // return 1, 2

  return [50, 20]
}

const retorna2Values = retorna2Valores()

console.log(retorna2Values[0])
console.log(retorna2Values[1])

console.log('\n')
function sumar(a, b) {
  return a + b
}

console.log('sumar: ', sumar(1, 2))

console.log('\n')
const sumar2 = (a, b) => {
  return a + b
}
console.log('sumar2: ', sumar2(9, 2))

console.log('\n')
const restar = (a, b) => a - b

console.log('restar: ', restar(10, 2))

console.log('\n')
function getAleatorio() {
  return Math.random()
}

console.log('getAleatorio(): ', getAleatorio())

console.log('\n')
const getAleatorio2 = () => Math.random()
console.log('getAleatorio2: ', getAleatorio2())
