import { useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import classNames from 'classnames';
import { deleteTask, checkTask } from '../../../store/slices/tasksSlice';
import styles from './TasksListItem.module.sass';

function TasksListItem ({ id, text, isDone }) {
  const dispatch = useDispatch();

  const textClassNames = classNames(styles.taskText, {
    [styles.isChecked]: isDone,
  });

  return (
    <li className={styles.tasksListItem}>
      <article className={styles.taskCard}>
        <label>
          <input
            type='checkbox'
            checked={isDone}
            onChange={({ target: { checked } }) => {
              dispatch(checkTask({ id, checked }));
            }}
          />
          <span className={textClassNames}>{text}</span>
        </label>

        <button
          className={styles.deleteBtn}
          onClick={() => {
            dispatch(deleteTask(id));
          }}
        >
          <FaTrashAlt />
        </button>
      </article>
    </li>
  );
}

export default TasksListItem;
