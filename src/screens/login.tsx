import Grid from "@mui/material/Grid";
import FormularioLogin from "../components/login/formulario";
import COLORS from "../constant/COLORS";

const Login = () => {
  return (
    <div
      style={{ height: "100%", width: "100%", backgroundColor: COLORS.primary }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormularioLogin />
        </Grid>
      
      </Grid>
    </div>
  );
};

export default Login;
