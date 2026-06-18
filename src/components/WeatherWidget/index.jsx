import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherThunk } from '../../store/slices/weatherSlice';
import { FaTemperatureLow, FaWind } from 'react-icons/fa';
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
  }, []);

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
          <span>
            {temperature} {UNITS[tempUnit]}
          </span>
        </li>
        <li>
          <FaWind aria-hidden='true' />
          <span>
            {windSpeed} {UNITS[windSpeedUnit]}
          </span>
        </li>
      </ul>
    </article>
  );
}

export default WeatherWidget;
