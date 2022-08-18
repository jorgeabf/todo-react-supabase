import { useState } from "react";
import { useTasks } from "../context/TasksContext";

function TasksForm() {
  const [taskName, setTaskName] = useState("");
  const { createTask, adding } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    createTask(taskName);
    setTaskName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1em",
      }}
    >
      <input
        type="text"
        name="taskname"
        placeholder="Write a task name"
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
      />
      <button disabled={adding} className="button">
        {adding ? "Adding..." : "Add"}
      </button>
    </form>
  );
}

export default TasksForm;
