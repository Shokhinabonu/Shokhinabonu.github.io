const fetch = require('node-fetch');

//TODO implement the error handling for the API
const picOfTheDay = async () => {
    const NASA_API_KEY = process.env.NASA_API_KEY;
    const URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

    const responseData = await fetch(URL);
    const responseDataJSON = await responseData.json();

    const successResponse = `${responseDataJSON.title} \n${responseDataJSON.explanation}\nCopyright: ${responseDataJSON.copyright}\n${responseDataJSON.url}`;
    const failureResponse = responseDataJSON.msg;

    return responseDataJSON.code === 404 ? failureResponse : successResponse;
}

module.exports = picOfTheDay;