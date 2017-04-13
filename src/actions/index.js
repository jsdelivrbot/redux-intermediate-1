import axios from 'axios';

const WEATHER_API_KEY = "9f7717fcdf62f2d7d1624b028881ee0b";
const WEATHER_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

function getWeather (city) {
  const url = `${WEATHER_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

export default getWeather
