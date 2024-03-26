import Grid from "@mui/material/Grid";
import FormularioLogin from "../components/login/formulario";
import LogoLogin from "../components/login/logo";


const Login = () => {

  
  return (
    <Grid container  style={{ minHeight: "100vh" }} alignItems="center" justifyContent="space-evenly">
      <Grid><LogoLogin/></Grid>
      <Grid item xs={10} sm={6} md={3} >
        <FormularioLogin />
      </Grid>
    </Grid>
    
  );
};

export default Login;
