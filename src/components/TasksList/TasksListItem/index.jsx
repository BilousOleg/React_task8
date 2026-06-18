import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import classNames from 'classnames';
import { deleteTask, checkTask } from '../../../store/slices/tasksSlice';
import styles from './TasksListItem.module.sass';

function TasksListItem ({ id, text, isDone, deadline }) {
  const dispatch = useDispatch();

  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      setNow(Date.now());
    }, 60000);
    return () => clearInterval(id);
  }, []);

  const dateOfDeadline = new Date(deadline);

  const isExpired = !isDone && dateOfDeadline.getTime() < now;

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
          <span className={styles.deadline}>
            {dateOfDeadline.toLocaleString('uk-UA', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>

          <button
            className={styles.deleteBtn}
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
