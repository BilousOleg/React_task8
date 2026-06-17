import axios from 'axios';
import CONSTANTS from '../constants';

const {
  API: {
    COORDINATES: { LATITUDE, LONGITUDE },
  },
} = CONSTANTS;

const weatherInstance = axios.create({
  baseURL: 'https://api.open-meteo.com/v1/forecast',
});

export const getWeather = queryParams =>
  weatherInstance.get('', {
    params: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      current: 'temperature_2m,wind_speed_10m',
      ...queryParams,
    },
  });
