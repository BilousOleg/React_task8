import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTemperatureLow, FaWind } from 'react-icons/fa';
import { getWeatherThunk } from '../../store/slices/weatherSlice';
import styles from './WeatherWidget.module.sass';
import CONSTANTS from '../../constants';

const {
  DISPLAY: { UNITS },
} = CONSTANTS;

function WeatherWidget () {
  const dispatch = useDispatch();

  const { temperature, tempUnit, windSpeed, windSpeedUnit, isFetching, error } =
    useSelector(({ weather }) => weather);

  useEffect(() => {
    dispatch(getWeatherThunk({ tempUnit, windSpeedUnit }));
  }, [dispatch, tempUnit, windSpeedUnit]);

  if (isFetching) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error!</span>;
  }

  return (
    <article>
      <ul className={styles.weatherList}>
        <li>
          <FaTemperatureLow aria-hidden='true' />
          <span aria-label={`Temperature in ${UNITS[tempUnit]}`}>
            {temperature} {UNITS[tempUnit]}
          </span>
        </li>
        <li>
          <FaWind aria-hidden='true' />
          <span aria-label={`Wind speed in ${UNITS[windSpeedUnit]}`}>
            {windSpeed} {UNITS[windSpeedUnit]}
          </span>
        </li>
      </ul>
    </article>
  );
}

export default WeatherWidget;
