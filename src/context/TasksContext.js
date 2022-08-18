import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";

export const TasksContext = createContext();

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context)
    throw new Error(
      "useTasks must be used within a TasksContextProvider"
    );
  return context;
};

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const getTasks = async (done = false) => {
    setLoading(true);
    const user = supabase.auth.user();
    const { error, data } = await supabase
      .from("tasks")
      .select()
      .eq("userId", user.id)
      .eq("done", done)
      .order("id", { ascending: true });

    if (error) throw error;

    setTasks(data);
    setLoading(false);
  };

  const createTask = async (taskName) => {
    setAdding(true);
    try {
      const user = supabase.auth.user();
      const { error, data } = await supabase
        .from("tasks")
        .insert({
          userId: user.id,
          name: taskName,
        });

      if (error) throw error;

      setTasks([...tasks, ...data]);
    } catch (error) {
      console.error(error);
    } finally {
      setAdding(false);
    }
  };

  const deleteTask = async (id) => {
    const user = supabase.auth.user();

    const { error, data } = await supabase
      .from("tasks")
      .delete()
      .eq("userId", user.id)
      .eq("id", id);

    if (error) throw error;

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = async (id, updateFields) => {
    const user = supabase.auth.user();

    const { error, data } = await supabase
      .from("tasks")
      .update(updateFields)
      .eq("userId", user.id)
      .eq("id", id);

    if (error) throw error;

    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        getTasks,
        createTask,
        adding,
        loading,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
