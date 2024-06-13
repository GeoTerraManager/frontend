import { Grid } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import MainNavbar from "../components/navbar/navbar";
import NaoAutorizado from "../components/Errors/NãoAutorizado";
import GraficoStatus from "../components/dadosprojeto/graficoStatus";
import Title from "../components/Title/title";
import GraficoRecorrencia from "../components/dadosprojeto/graficoRecorrencia";
import { useState } from "react";
import ProjectById from "../types/projectById";
import SubTitle from "../components/Title/subTitle";
import DataTable from "../components/datatable/dataTable";
import GraficoRevisao from "../components/dadosprojeto/graficoRevisao";
import Poligonos from "../components/dadosprojeto/poligonos";

const DadosUsuario = () => {
  const { loading, authorized } = useAuth();
  const [project, setProject] = useState<ProjectById | null>(null);

  return loading ? (
    <p>Loading...</p>
  ) : authorized ? (
    <Grid>
      <MainNavbar />

      <Title styles={{ marginTop: 100 }}>Nome Usuario</Title>
      <Grid container justifyContent="space-around">
      <Poligonos project={project} />
      <GraficoStatus project={project} subtitle="Status" />
        <GraficoRecorrencia project={project} />
      
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ marginBottom: 30, marginTop: 80 }}
      >
        <Grid item xs={11} sm={11} md={11}>
          <DataTable />
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <NaoAutorizado />
  );
};

export default DadosUsuario;
