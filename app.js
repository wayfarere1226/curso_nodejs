const { crearArchivo } = require('./helpers/multiplicar');
const argv  = require('./configs/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creada'))
    .catch(err => console.log(err));