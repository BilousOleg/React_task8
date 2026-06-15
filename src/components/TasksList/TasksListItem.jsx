import { useDispatch } from 'react-redux';
import { deleteTask, checkTask } from '../../store/slices/tasksSlice';

function TasksListItem ({ id, text, isDone }) {
  const dispatch = useDispatch();

  return (
    <li>
      <article>
        <label>
          <input
            type='checkbox'
            checked={isDone}
            onChange={({ target: { checked } }) => {
              dispatch(checkTask({ id, checked }));
            }}
          />
          <span>{text}</span>
        </label>

        <button
          onClick={() => {
            dispatch(deleteTask(id));
          }}
        >
          Del
        </button>
      </article>
    </li>
  );
}

export default TasksListItem;
