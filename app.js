const argv = require('./configValues/yargs').argv;
const ciudad = require('./ciudad/ciudad');
const clima = require('./clima/clima');

/*
ciudad.getCityLatLng( argv.direccion )
    .then( console.log )
    .catch( err => console.log(err));
*/
const getInfo = async ( direccion ) => {


    try {
        const city = await ciudad.getCityLatLng(direccion);
        const temp = await clima.getClima(city.lat, city.lng);
        return `El clima de ${ direccion } es de ${ temp }ºC`;
    } catch (error) {
        return `No se puede determinar el clima de ${ direccion }`;
    }
    
};

getInfo( argv.direccion )
    .then(console.log)
    .catch(console.log)
