const axios = require('axios');


const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=383056a6eecf1dcaaae9e19fc978b088&units=metric`);

    return resp.data.main.temp;
};


module.exports = {
    getClima
};