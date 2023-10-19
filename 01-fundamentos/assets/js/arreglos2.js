let juegos = ['zelda','mario','billy'];

console.log(juegos.length);

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr})
});

let nuevaLongitud = juegos.push('F-zero');
console.log({nuevaLongitud});

nuevaLongitud = juegos.unshift('e.a')
console.log(nuevaLongitud, juegos)


juegos.pop()