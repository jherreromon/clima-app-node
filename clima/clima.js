//Esta parte es mas sencilla, ya que no hay que mandar
//el apiKey en el header, sino que va directamente en la 
//URL

//sirve para acceder a un servicio rest
const axios = require('axios');


const getClima = async(lat, lng) => {

    //esta función devuelve una promesa
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&cnt=10&appid=6f3293c3b92077664e8fa87be2211a8c&units=metric`);
    //objeto del JSON que se devuelve q contiene la temperatura del sitio 
    return resp.data.list[0].main.temp;
}


module.exports = {
    getClima
}