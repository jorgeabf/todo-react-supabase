import { useTasks } from "../context/TasksContext";
import { useEffect } from "react";
import TaskCard from "./TaskCard";

function TasksList({done=false}) {
  const { tasks, getTasks, loading } = useTasks();

  useEffect(() => {
    getTasks(done);
  }, [done]);

  function renderTasks() {
    if (loading) {
      return <p>Loading...</p>;
    } else if (tasks.length === 0) {
      return <p>No tasks found</p>;
    } else {
      return (
        <ul>
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </ul>
      );
    }
  }

  return <div className="tasks-list">{renderTasks()}</div>;
}

export default TasksList;
