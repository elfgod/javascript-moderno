let personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  coords: {
    lat: 30.034,
    lng: -118.7,
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, California',
  },
  'ultima-pelicula': 'Infinity War',
}

console.log('Nombre:', personaje.nombre)
console.log('personaje: ', personaje)
console.log(personaje['nombre'])
console.log('Personaje Edad:', personaje.edad)

console.log('Personaje Coords: ', personaje.coords)
console.log('Personaje Coords Lat: ', personaje.coords.lat)

console.log('No. Personaje Trajes: ', personaje.trajes.length)
console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length - 1])

const x = 'vivo'
console.log('Vivo', personaje[x])
console.log('Personaje Ultima Pelicula: ', personaje['ultima-pelicula'])

// Mas detalles

personaje.edad = null

console.log(personaje) // edad = null

console.log('\n')
delete personaje.edad

console.log(personaje) // edad no existe

console.log('\n')
personaje.casado = true
const entriesPares = Object.entries(personaje)
console.log(entriesPares)

// Declarar el objeto como constante (const) no evitara que
// se pueda modificar el objeto agregar o borrarndo valores
// lo que si no puedes hacer es redeclarar el objeto

// TypeError: Assignment to constant variable.
// personaje = true o personaje = []

console.log('\n')
// Congela el objeto, no se puede agregar, editar o borrar valores
Object.freeze(personaje)
personaje.dinero = 100
personaje.casado = false
console.log(personaje)

console.log('\n')
// Si podre cambiar el valor de una propiedad
personaje.direccion.ubicacion = 'Colombia'

const propiedades = Object.getOwnPropertyNames(personaje)
const valores = Object.values(personaje)
console.log({ propiedades })
console.log('\n')
console.log({ valores })

console.log('\n')
// Obtener todas las propiedades de un objeto
