import { Grid } from "@mui/material";
const NaoAutorizado = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      flexDirection="column"
      height="100vh"
    >
      <h1>403 Usuario nao autorizado</h1>
      <a href="/">
        <p>Voltar para o login</p>
      </a>
    </Grid>
  );
};

export default NaoAutorizado;
