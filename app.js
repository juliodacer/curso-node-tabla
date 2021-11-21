const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yarns');
                    

console.clear();
// console.log(process.argv); //procesos propios de node
console.log(argv); // yargs
// console.log("base: yargs", argv.b);
// console.log("list: yargs", argv.l);

// const [ , ,arg3 = 'base=5'] = process.argv;
// //console.log(arg3.split('='));
// const [ , base = 5] = arg3.split('=');

// console.log(arg3);
//  console.log(base);

//const base = 4;

crearArchivo( argv.b, argv.l, argv.h)
    .then((nombreArchivo) =>
        console.log(nombreArchivo, `Creado satisfactoriamente`)
    )
    .catch((err) => console.log(err));
