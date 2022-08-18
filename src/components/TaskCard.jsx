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
    <li>
      <h3>{`${task.id}. ${task.name}`}</h3>
      <p>{task.done ? "Done ✅" : "Not done ❌"}</p>
      <div className="button-group">
        <button onClick={() => handleDelete()}>
          Delete
        </button>
        <button onClick={() => handleToggleDone()}>
          Done
        </button>
      </div>
    </li>
  );
}

export default TaskCard;
