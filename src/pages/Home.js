import { supabase } from "../supabase/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TasksForm from "../components/TasksForm";
import TasksList from "../components/TasksList";

function Home() {
  const [showTaskDone, setShowTaskDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!supabase.auth.user()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <main>
        <TasksForm />
        <div className="pending">
          <span>
            {showTaskDone ? "Task done" : "Task to do"}
          </span>
          <button
            onClick={() => setShowTaskDone(!showTaskDone)}
          >
            {showTaskDone
              ? "Show task to do"
              : "Show tasks done"}
          </button>
        </div>
        <TasksList done={showTaskDone} />
      </main>
    </div>
  );
}

export default Home;
