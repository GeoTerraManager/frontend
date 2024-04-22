import { Grid } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import MainNavbar from "../components/navbar/navbar";
import NaoAutorizado from "../components/Errors/NãoAutorizado";
import GraficoStatus from "../components/dadosprojeto/graficoStatus";
import Title from "../components/Title/title";
import GraficoRecorrencia from "../components/dadosprojeto/graficoRecorrencia";
import Equipe from "../components/dadosprojeto/equipe";
import Poligonos from "../components/dadosprojeto/poligonos";

const DadosProjeto = () => {
  const { loading, authorized } = useAuth();

  return loading ? (
    <p>Loading...</p>
  ) : authorized ? (
    <Grid>
      <MainNavbar />

      <Title styles={{ marginTop: 100 }}>Nome Projeto</Title>
      <Grid container item justifyContent="space-around">
        <Equipe />
        <Poligonos />
        <GraficoStatus />
        <GraficoRecorrencia />
      </Grid>
    </Grid>
  ) : (
    <NaoAutorizado />
  );
};

export default DadosProjeto;
