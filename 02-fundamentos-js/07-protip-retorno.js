function crearPersona1(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido,
  }
}

function crearPersona2(nombre, apellido) {
  return {
    nombre,
    apellido,
  }
}

const crearPersona3 = (nombre, apellido) => {
  return {
    nombre,
    apellido,
  }
}

const crearPersona4 = (nombre, apellido) => ({ nombre, apellido })

const persona = crearPersona4('Elf', 'God')
console.log(persona)

console.log('\n')
function imprimeArgumentos() {
  console.log(arguments)
}

imprimeArgumentos(35, true, false, 'Elf', 'God')
console.log('\n')

// Despues del parametro REST, no puede haber mas parametros
const imprimeArgumentos2 = (...args) => {
  console.log(args)
}
imprimeArgumentos2(35, true, false, 'Elf', 'God')
console.log('\n')

const imprimeArgumentos3 = (edad, ...args) => {
  // console.log(edad)
  // console.log(args)

  // console.log({ edad, args })

  return args
}
const argumentos = imprimeArgumentos3(35, true, false, 'Elf', 'God')

console.log('\n')
console.log({ argumentos })
console.log('\n')
console.log(argumentos[0])
console.log(argumentos[1])
console.log(argumentos[2])
console.log(argumentos[3])
console.log(argumentos[4]) // undefined

console.log('\n')
// La edad 35, se extrae del primer parametro, no viene la edad
const [casado, vivo, nombre, apellido] = imprimeArgumentos3(
  35,
  true,
  false,
  'Elf',
  'God'
)

console.log({ casado, vivo, nombre, apellido })

console.log('\n')
const { nombre: name, apellido: lastName } = crearPersona4('Elf', 'God')
console.log(name, lastName)
console.log('\n')
console.log({ name, lastName })

console.log('\n')
let elf = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
}

const imprimePropiedades = (personaje) => {
  console.log('nombre: ', personaje.nombre)
  console.log('codeName: ', personaje.codeName)
  console.log('vivo: ', personaje.vivo)
  console.log('edad: ', personaje.edad)
  console.log('traje: ', personaje.trajes)
}

imprimePropiedades(elf)

console.log('\n')
const imprimePropiedades2 = ({ nombre, codeName, vivo, edad, trajes }) => {
  // Si no envian alguna propiedad, se puede validar
  edad = edad || 0

  console.log({ nombre })
  console.log({ codeName })
  console.log({ vivo })
  console.log({ edad })
  console.log({ trajes })
}

imprimePropiedades2(elf)

console.log('\n')

delete elf.nombre

const imprimePropiedades3 = ({
  nombre = 'Rich James',
  codeName,
  vivo,
  edad,
  trajes,
}) => {
  console.log({ nombre })
  console.log({ codeName })
  console.log({ vivo })
  console.log({ edad })
  console.log({ trajes })
}

imprimePropiedades3(elf)
