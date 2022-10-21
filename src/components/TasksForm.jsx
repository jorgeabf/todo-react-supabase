import { useState } from "react";
import { useTasks } from "../context/TasksContext";
import Button from "../components/Button";
import Input from "../components/Input";

function TasksForm() {
   const [taskName, setTaskName] = useState("");
   const { createTask, adding } = useTasks();

   const handleSubmit = async (e) => {
      e.preventDefault();
      createTask(taskName);
      setTaskName("");
   };

   return (
      <form onSubmit={handleSubmit}>
         <Input
            name="taskname"
            placeholder="Escriba tarea"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
         />
         <Button disabled={adding}>
            {adding ? "Añadiendo..." : "Añadir"}
         </Button>
      </form>
   );
}

export default TasksForm;
