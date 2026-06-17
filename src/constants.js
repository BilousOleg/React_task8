const CONSTANTS = {
  FORM: {
    MAX_LENGTH: 150,
    MIN_LENGTH: 2,
    INITIAL_VALUE: '',
  },
  API: {
    COORDINATES: {
      LATITUDE: 52.52,
      LONGITUDE: 13.41,
    },
    UNITS: {
      TEMPERATURE: {
        CELS: 'celsius',
      },
      SPEED: {
        KPH: 'kmh',
      },
    },
  },
  DISPLAY: {
    UNITS: {
      celsius: '°C',
      kmh: 'Km/h',
    },
  },
};

export default CONSTANTS;

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&past_days=0&forecast_days=7&wind_speed_unit=kmh&temperature_unit=celsius
