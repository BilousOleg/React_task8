import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TasksListItem from './TasksListItem';

function TasksList () {
  const { tasks } = useSelector(({ tasks }) => tasks);

  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      setNow(Date.now());
    }, 60000);
    return () => clearInterval(id);
  }, []);

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
              deadline={t.taskDeadline}
              now={now}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default TasksList;
