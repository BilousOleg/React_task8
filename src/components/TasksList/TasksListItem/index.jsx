import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { FaTrashAlt } from 'react-icons/fa';
import { deleteTask, checkTask } from '../../../store/slices/tasksSlice';
import styles from './TasksListItem.module.sass';
import { formatDate } from '../../../utils/dateUtils';

function TasksListItem ({ id, text, isDone, deadline, now }) {
  const dispatch = useDispatch();

  const isExpired = !isDone && deadline < now;

  const taskCardClassNames = classNames(styles.taskCard, {
    [styles.isExpired]: isExpired,
  });

  const textClassNames = classNames(styles.taskText, {
    [styles.isChecked]: isDone,
  });

  return (
    <li className={styles.tasksListItem}>
      <article className={taskCardClassNames}>
        <label>
          <input
            type='checkbox'
            checked={isDone}
            onChange={({ target: { checked } }) => {
              dispatch(checkTask({ id, checked }));
            }}
          />
          <span title={text} className={textClassNames}>
            {text}
          </span>
        </label>

        <div className={styles.cardGroup}>
          <span className={styles.deadline}>{formatDate(deadline)}</span>

          <button
            className={styles.deleteBtn}
            aria-label={`Delete task '${text}'`}
            onClick={() => {
              dispatch(deleteTask(id));
            }}
          >
            <FaTrashAlt />
          </button>
        </div>
      </article>
    </li>
  );
}

export default TasksListItem;
