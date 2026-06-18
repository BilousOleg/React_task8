import TasksForm from '../TasksForm';
import TasksList from '../TasksList';
import styles from './TodoWidget.module.sass';

function TodoWidget () {
  return (
    <article className={styles.todoWidget}>
      <h2 className={styles.todoHeading}>To Do List</h2>
      <section>
        <TasksForm />
      </section>
      <section className={styles.listSection}>
        <h3 className={styles.tasksHeading}>Tasks List</h3>
        <TasksList />
      </section>
    </article>
  );
}

export default TodoWidget;
