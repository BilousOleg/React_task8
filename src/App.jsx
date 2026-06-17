import TasksPage from './pages/TodoPage';
import styles from './App.module.sass';

function App () {
  return (
    <div className={styles.appWrapper}>
      <main className={styles.main}>
        <TasksPage />
      </main>
    </div>
  );
}

export default App;
