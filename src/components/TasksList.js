import { useTasks } from "../context/TasksContext";
import { useEffect } from "react";

function TasksList() {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.name}</h3>
          <span>{JSON.stringify(task.done)}</span>
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
