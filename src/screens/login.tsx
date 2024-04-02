import Grid from "@mui/material/Grid";
import FormularioLogin from "../components/login/formulario";
import LogoLogin from "../components/login/logo";

import { useState } from "react";

import COLORS from "../constant/COLORS";



const Login = () => {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/gerente/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "nome_usuario": username,
          "senha": senha 
        }),
      });

      if (!response.ok) {
        setError(await response.text())
      } else {
        document.cookie = `token=${await response.text()};`
        window.location.href = "/dados-principais"
      }
  
      setUsername('');
      setSenha('');
    } catch (error) {
      console.error(error);
      setError('Failed to login');
    }
  };
  
  return (



    <Grid container  style={{ minHeight: "100vh", backgroundColor: COLORS.primary }} alignItems="center" justifyContent="space-evenly">

      <Grid><LogoLogin/></Grid>
      <Grid item xs={10} sm={6} md={3} >
        <FormularioLogin
          username={username}
          usernameHandler={setUsername}
          senha={senha}
          senhaHandler={setSenha}
          loginHandler={handleLogin}
        />
        {error ? <p>{error}</p> : null}
      </Grid>
    </Grid>
  );
};

export default Login;
