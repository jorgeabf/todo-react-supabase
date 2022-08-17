import { supabase } from "../supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TasksForm from "../components/TasksForm";
import TasksList from "../components/TasksList";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!supabase.auth.user()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <header>
        <h1>Home</h1>
        <button onClick={() => supabase.auth.signOut()}>
          Logout
        </button>
      </header>
      <TasksForm />
      <TasksList />
    </div>
  );
}

export default Home;
