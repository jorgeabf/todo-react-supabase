import { NavLink } from "react-router-dom";
import { supabase } from "../supabase/client";

function Navbar() {
   return (
      <header>
         <div className="container-90">
            <nav className="navbar">
               <NavLink
                  to="/"
                  className="nav-link nav-link--title">
                  App de tareas
               </NavLink>
               <NavLink
                  to="/"
                  className="nav-link"
                  onClick={async () =>
                     await supabase.auth.signOut()
                  }>
                  Cerrar sesión
               </NavLink>
            </nav>
         </div>
      </header>
   );
}

export default Navbar;
