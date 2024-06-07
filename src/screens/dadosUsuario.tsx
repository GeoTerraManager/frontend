import { Grid } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import MainNavbar from "../components/navbar/navbar";
import NaoAutorizado from "../components/Errors/NãoAutorizado";
import GraficoStatus from "../components/dadosprojeto/graficoStatus";
import Title from "../components/Title/title";
import GraficoRecorrencia from "../components/dadosprojeto/graficoRecorrencia";

const DadosUsuario = () => {
  const { loading, authorized } = useAuth();

  return loading ? (
    <p>Loading...</p>
  ) : authorized ? (
    <Grid>
      <MainNavbar />

      <Title styles={{ marginTop: 100 }}>Nome Usuario</Title>
      <Grid container justifyContent="space-around">
      {/* <GraficoRecorrencia /> 
        <GraficoStatus subtitle="Revisor:" />
        <GraficoStatus subtitle="Interprete:" />  */}
      </Grid>
    </Grid>
  ) : (
    <NaoAutorizado />
  );
};

export default DadosUsuario;
