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
      <div className="container-90">
        <main>
          <div className="tasks-filter">
            <h2 className="tasks-filter__title">
              {showTaskDone ? "Tasks done" : "Tasks to do"}
            </h2>
            <button
              className="button"
              onClick={() => setShowTaskDone(!showTaskDone)}
            >
              {showTaskDone
                ? "Show tasks to do"
                : "Show tasks done"}
            </button>
          </div>
          <TasksForm />
          <TasksList done={showTaskDone} />
        </main>
      </div>
    </div>
  );
}

export default Home;
