import Grid from "@mui/material/Grid";
const Login = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        {" "}
        <div
          style={{ width: "100%", height: "100%", backgroundColor: "red" }}
        >
         <h1>Red</h1>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div
          style={{ width: "100%", height: "100%", backgroundColor: "green" }}
        ><h1>Green</h1></div>
      </Grid>
    </Grid>
  );
};

export default Login;
