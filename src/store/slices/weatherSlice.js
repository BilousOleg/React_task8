import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';
import CONSTANTS from '../../constants';

const {
  API: {
    UNITS: {
      TEMPERATURE: { CELS },
      SPEED: { KPH },
    },
  },
} = CONSTANTS;

const WEATHER_SLICE_NAME = 'weather';

// Одиниці виміру незмінні - їх ніде не можна буде обирати (як вказано в завданні - ВІДОБРАЖАТИ).
const initialState = {
  temperature: '',
  tempUnit: CELS,
  windSpeed: '',
  windSpeedUnit: KPH,
  isFetching: false,
  error: null,
};

export const getWeatherThunk = createAsyncThunk(
  `${WEATHER_SLICE_NAME}/getWeather`,
  async ({ tempUnit, windSpeedUnit }, { rejectWithValue }) => {
    try {
      const { data } = await API.getWeather({
        wind_speed_unit: windSpeedUnit,
        temperature_unit: tempUnit,
      });
      return {
        temperature: data.current.temperature_2m,
        windSpeed: data.current.wind_speed_10m,
      };
    } catch (error) {
      console.dir({ message: error.message });
      return rejectWithValue({ message: error.message });
    }
  }
);

const weatherSlice = createSlice({
  initialState,
  name: WEATHER_SLICE_NAME,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getWeatherThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(getWeatherThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.temperature = payload.temperature;
      state.windSpeed = payload.windSpeed;
    });

    builder.addCase(getWeatherThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer } = weatherSlice;

export default reducer;
