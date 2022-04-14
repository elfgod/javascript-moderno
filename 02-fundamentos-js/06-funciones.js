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
const saludar4 = () => {
  console.log('Saludar 4')
}
