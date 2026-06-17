import { useSelector } from 'react-redux';
import TasksListItem from './TasksListItem';

function TasksList () {
  const { tasks } = useSelector(({ tasks }) => tasks);

  return (
    <>
      {!!tasks.length && (
        <ul>
          {tasks.map(t => (
            <TasksListItem
              key={t.id}
              id={t.id}
              text={t.taskText}
              isDone={t.isDone}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default TasksList;
