let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 30.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
}

console.log('Nombre:', personaje.nombre);
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