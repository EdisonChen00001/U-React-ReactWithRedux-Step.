import axios from 'axios';

const API_KEY = '8c2f96c28a050c68df920a6bcb9ef29b'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},US`; //this US can be change any country simple code 
    const request = axios.get(url);

    console.log('Request: this is come from action creater--->', request);

    return{
        type:FETCH_WEATHER,
        payload : request
    };
}
