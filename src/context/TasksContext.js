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

  const getTasks = async (done = false) => {
    const user = supabase.auth.user();
    const { error, data } = await supabase
      .from("tasks")
      .select()
      .eq("userId", user.id)
      .eq("done", done)
      .order("id", { ascending: true });

    if (error) throw error;

    setTasks(data);
  };

  return (
    <TasksContext.Provider value={{ tasks, getTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
