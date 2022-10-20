import { useTasks } from "../context/TasksContext";
import Button from "../components/Button";

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
            <Button
               color="red"
               onClick={() => handleDelete()}>
               Delete
            </Button>
            <Button
               color="green"
               onClick={() => handleToggleDone()}>
               Done
            </Button>
         </div>
      </li>
   );
}

export default TaskCard;
