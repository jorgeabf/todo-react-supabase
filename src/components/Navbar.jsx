import { NavLink } from "react-router-dom";
import { supabase } from "../supabase/client";

function Navbar() {
  return (
    <header>
      <div className="container-90">
        <nav className="navbar">
          <NavLink
            to="/"
            className="nav-link nav-link--title"
          >
            Tasks App
          </NavLink>
          <NavLink
            className="button buttonDelete"
            to="/"
            onClick={async () =>
              await supabase.auth.signOut()
            }
          >
            Logout
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
