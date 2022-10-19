import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";

function Login() {
   const [email, setEmail] = useState("");
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         await supabase.auth.signIn({ email });
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      if (supabase.auth.user()) {
         navigate("/");
      }
   }, [navigate]);

   return (
      <div className="container-90">
         <main>
            <h2 style={{ marginBottom: "2rem" }}>
               Login with Magic Link
            </h2>
            <form onSubmit={handleSubmit}>
               <input
                  type="email"
                  name="email"
                  placeholder="youremail@site.com"
                  onChange={(e) => setEmail(e.target.value)}
               />
               <button className="button">Send</button>
            </form>
         </main>
      </div>
   );
}

export default Login;
