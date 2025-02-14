import { Button, Grid } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import MainNavbar from "../components/navbar/navbar";
import NaoAutorizado from "../components/Errors/NãoAutorizado";
import GraficoStatus from "../components/dadosprojeto/graficoStatus";
import Title from "../components/Title/title";
import GraficoRecorrencia from "../components/dadosprojeto/graficoRecorrencia";
import Equipe from "../components/dadosprojeto/equipe";
import Poligonos from "../components/dadosprojeto/poligonos";

import DataTableUsuario from "../components/datatable/dataTableUsuario";
import SubTitle from "../components/Title/subTitle";


const DadosProjeto = () => {
  const { loading, authorized } = useAuth();

  return loading ? (
    <p>Loading...</p>
  ) : authorized ? (
    <Grid>
      <MainNavbar />

      <Title styles={{ marginTop: 100 }}>Nome Projeto</Title>
      <Grid container justifyContent="space-around">
        <Equipe />
        <Poligonos />
        <GraficoStatus subtitle="Status" />
        <GraficoRecorrencia />
      </Grid>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ marginBottom: 30 }}
      >
        <Grid item xs={11} sm={11} md={11}>
          <SubTitle>Interpretes</SubTitle>
          <DataTableUsuario />
        </Grid>

      </Grid>
    </Grid>
  ) : (
    <NaoAutorizado />
  );
};

export default DadosProjeto;
