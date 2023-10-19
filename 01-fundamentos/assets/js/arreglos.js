// const arr = new Array(10);
// console.log(arr);

let videoJuegos = ['mario 3', 'megaman', 'pou'];
console.log({videoJuegos});

console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'fernando',
    1+2,
    function(){},
    ()=>{},
    {a:1},
    ['conejo','mono','perro','lorito tikitito', ['dr willy','woodman']],
];

console.log(arregloCosas);

// manera 1 
let arregloDelArreglo = arregloCosas[7];
console.log(arregloDelArreglo[3])

// manera 2
console.log(arregloCosas[7][3])
console.log(arregloCosas[7][4][1])


