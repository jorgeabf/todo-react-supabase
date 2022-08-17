import "./App.css";
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

import { supabase } from "./supabase/client";
import { TasksContextProvider } from "./context/TasksContext";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="App">
      <TasksContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </TasksContextProvider>
    </div>
  );
}

export default App;
