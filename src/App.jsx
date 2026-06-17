import TasksPage from './pages/TodoPage';
import styles from './App.module.sass';
import Header from './components/Header';

function App () {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <main className={styles.main}>
        <TasksPage />
      </main>
    </div>
  );
}

export default App;
