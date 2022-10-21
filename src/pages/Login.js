import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

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
               Iniciar sesión con Enlace Mágico
            </h2>
            <form onSubmit={handleSubmit}>
               <Input
                  type="email"
                  name="email"
                  placeholder="youremail@site.com"
                  onChange={(e) => setEmail(e.target.value)}
               />
               <Button className="button">Enviar</Button>
            </form>
         </main>
      </div>
   );
}

export default Login;
