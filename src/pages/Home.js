import { supabase } from "../supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TasksForm from "../components/TasksForm";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!supabase.auth.user()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => supabase.auth.signOut()}>
        Logout
      </button>
      <TasksForm />
    </div>
  );
}

export default Home;
