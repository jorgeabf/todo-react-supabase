import { NavLink } from "react-router-dom";
import { supabase } from "../supabase/client";

function Navbar() {
  return (
    <header>
      <div className="container-90">
        <NavLink to="/">
          <a className="nav-link nav-link--title">
            Tasks App
          </a>
        </NavLink>
        <a
          className="nav-link"
          href="#!"
          onClick={async () =>
            await supabase.auth.signOut()
          }
        >
          Logout
        </a>
      </div>
    </header>
  );
}

export default Navbar;
