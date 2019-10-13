const axios = require('axios');

const getCityLatLng = async ( direccion ) => {

    const encodeUrl = encodeURI( direccion );

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': 'f87500917amsh74be5719fc9af51p1008b9jsn2ed054bad896' }
    });


    const resp = await instance.get();
      
    if (resp.data.Results.length < 1) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = resp.data.Results[0];
    const ciudad = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        ciudad,
        lat,
        lng
    };

};

module.exports = {
    getCityLatLng
};