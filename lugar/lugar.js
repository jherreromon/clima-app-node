const axios = require('axios');

//una función async REGRESA UNA PROMESA
const getLugarLatLng = async(dir) => {
    //obtenemos formatos URL-> q puedan tener espacios x ejemplo
    const encodeUlr = encodeURI(dir);
    //console.log(encodeUlr)

    // objeto axios que sirve para trabajar con un api rest
    // en este caso, se compone de url + headers
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: { 'X-RapidAPI-Key': 'fca2ebf4bamshe8786ca1ab4899fp11ca5bjsn830acb7850b8' }

    });
    //instance.get()->devuelve una promesa
    const resp = await instance.get();
    //si el lugar no existe: Results = vacio
    if (resp.data.Results.length === 0) {
        throw new Error(`no hay resultados para ${dir}`)

    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        //datos necesarios para obtener el clima
        direccion,
        lat,
        lng

    }

}

module.exports = {
    getLugarLatLng
}