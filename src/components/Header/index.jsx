import WeatherWidget from '../WeatherWidget';
import styles from './Header.module.sass';

function Header () {
  return (
    <header className={styles.header}>
      <h1>To Do List</h1>
      <WeatherWidget />
    </header>
  );
}

export default Header;
