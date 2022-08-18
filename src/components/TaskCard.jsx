import { useTasks } from "../context/TasksContext";

function TaskCard({ task }) {
  const { deleteTask, updateTask } = useTasks();

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleToggleDone = () => {
    updateTask(task.id, { done: !task.done });
  };

  return (
    <li className="task-card">
      <h3>{task.name}</h3>
      <p>{task.done ? "Done ✅" : "Not done ❌"}</p>
      <div className="button-group">
        <button className="button buttonDelete" onClick={() => handleDelete()}>
          Delete
        </button>
        <button className="button buttonDone" onClick={() => handleToggleDone()}>
          Done
        </button>
      </div>
    </li>
  );
}

export default TaskCard;
