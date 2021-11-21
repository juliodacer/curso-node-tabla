const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, l = false, h = 10) => {
    try {
        let salida = "";
        let consola = "";

        for (let i = 1; i <= h; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${"x".green} ${i} ${"=".red} ${base * i}\n`;
        }

        if (l) {
            console.log("==================");
            console.log(`    TABLA DEL ${base}`.blue);
            console.log("==================");

            console.log(consola);
        }

        // fs.writeFile(`tabla-${ base }.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log(`tabla-${ base }.txt creado!`);
        // });

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        //console.log(`tabla-${base} creado!`); //Cuando se cambia a async tiene que retornar
        return colors.rainbow(`tabla-${base}.txt`);
    } catch (err) {
        throw err;
    }
};

module.exports = {
    // crearArchivo: crearArchivo
    crearArchivo,
};
