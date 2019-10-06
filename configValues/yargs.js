const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        describe: 'Ciudad para buscar su clima',
        demandOption: true
    }
}).argv;


module.exports = {
    argv
};

