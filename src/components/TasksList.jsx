import { useTasks } from "../context/TasksContext";
import { useEffect } from "react";
import TaskCard from "./TaskCard";

function TasksList({ done = false }) {
   const { tasks, getTasks, loading } = useTasks();

   useEffect(() => {
      getTasks(done);
   }, [done]);

   function renderTasks() {
      if (loading) {
         return <p>Cargando...</p>;
      } else if (tasks.length === 0) {
         return <p>No se han encontrado tareas</p>;
      } else {
         return (
            <ul className="tasks-list">
               {tasks.map((task) => (
                  <TaskCard
                     task={task}
                     key={task.id}
                  />
               ))}
            </ul>
         );
      }
   }

   return <div>{renderTasks()}</div>;
}

export default TasksList;
