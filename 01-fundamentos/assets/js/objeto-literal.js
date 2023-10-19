let personajes = {
    nombre: "bob esponja",
    codeName: "Bob",
    vivo: false,
    edad: 30,
    coords: {
        lat : -27.9678416,
        long: +153.4169694
    },
    trajes: ['krustaseo cascarudo', 'traje','ropa cotidiana'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    // si queremos agregar si o si el guion medio podemos hacer esto
    "ultima-pelicula": 'monito chinchudo'
}

console.log(personajes);
console.log('Nombre', personajes.nombre);
console.log('Nombre',personajes['nombre']);
console.log('edad', personajes.edad);

console.log('Coors', personajes.coords);
console.log('Coors', personajes.coords.lat);

console.log('nro de trajes', personajes.trajes.length);
console.log('ultimo traje', personajes.trajes[personajes.trajes.length-1]);

const x = 'vivo'
console.log('vivo', personajes[x]);

console.log("ultima pelicula", personajes['ultima-pelicula']);

// que pasa cuando quiero eliminar un par de datos 
delete personajes.edad;
console.log(personajes)

// cuando quiero arreglos de dos valores 
const entriesPares = Object.entries( personajes);
console.log(entriesPares);

// si quiero agregar una propiedad mas a mi objeto personajes
personajes.casado = true;

// pero que pasa si no queremos que esos datos sean agregados a mi objeto personajes, lo solucionamos cambiando let por const ? no ya que const lo que nos bloquea es la reasignacion de esa variable. por lo tanto debemos de usar esto que si nos hace lo que estamos necesitando:

Object.freeze(personajes);

personajes.codeName = 'Gary';
personajes.vivo = true;

console.log(personajes);

// pero eso solamente bloquea los valores principales, por ejemplo si quiero cambiar la ubicacion del elemento direccion, puedo hacer ya que no bloquea los objetos dentro de esos elementos

personajes.direccion.ubicacion = 'costa rica'
console.log(personajes)

console.log('coors', personajes.coords);
console.log('lat', personajes.latw)

