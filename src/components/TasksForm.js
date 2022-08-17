import { useState } from "react";
import { supabase } from "../supabase/client";

function TasksForm() {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = supabase.auth.user();
      const result = await supabase.from("tasks").insert({
        userId: user.id,
        name: taskName,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="taskname"
        placeholder="Write a task name"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default TasksForm;
