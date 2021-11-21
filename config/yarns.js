const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        description: 'Es la base de la tabla de multiplicar'
    })
    .option("h", {
        alias: "hasta",
        type: "number",
        default: 10,
        demandOption: true,
        description: 'Indica hasta que numero multiplicará la base'
    })
    .option("l", {
        alias: "list",
        type: "boolean",
        //demandOption: true,
        default: false,
        description: 'Muestra la tabla en consola'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un numero";
        } 
        if (isNaN(argv.h)) {
            throw "Se requiere indicar hasta qué numero multiplicará la base";
        }
        return true;
    }).argv;

module.exports = argv;