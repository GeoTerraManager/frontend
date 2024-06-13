import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import MainNavbar from "../components/navbar/navbar";
import NaoAutorizado from "../components/Errors/NãoAutorizado";
import GraficoStatus from "../components/dadosprojeto/graficoStatus";
import Title from "../components/Title/title";
import GraficoRecorrencia from "../components/dadosprojeto/graficoRecorrencia";
import Equipe from "../components/dadosprojeto/equipe";
import Poligonos from "../components/dadosprojeto/poligonos";
import getProjectById from "../services/getProjectById";
import SubTitle from "../components/Title/subTitle";
import { useParams } from "react-router-dom";
import { usePageData } from "../context/PageDataContext";
import ProjectById from "../types/projectById";
import DataTableUsuario from "../components/datatable/dataTableUsuarioInterprete";
import DataTableUsuarioRevisor from "../components/datatable/dataTableUsuarioRevisor";
import getUserById from "../services/getUserById";
import { UserById, ProjectByUser } from "../types/userById";

const DadosProjeto = () => {
  const { loading, authorized } = useAuth();
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectById | null>(null);
  const { setData } = usePageData(); // Obtendo a função setData do contexto
  const [interpretesData, setInterpretesData] = useState<ProjectByUser[]>([]);
  const [revisoresData, setRevisoresData] = useState<ProjectByUser[]>([]);

  useEffect(() => {
    const fetchProject = async () => {
      if (id) {
        const projectData = await getProjectById(id);
        if (projectData) {
          setProject(projectData);
          setData(projectData); // Definindo os dados do projeto no contexto
        }
      }
    };

    fetchProject();
  }, [id, setData]);

  useEffect(() => {
    const fetchUsersData = async () => {
      if (project) {
        const interpretes = await Promise.all(
          project.interpretes.map((id) => getUserById(id))
        );
        const revisores = await Promise.all(
          project.revisores.map((id) => getUserById(id))
        );

        const interpretesProjects = interpretes
          .filter((user): user is UserById => user !== undefined)
          .flatMap((user) =>
            user.projetos.filter(
              (proj) => proj.nome_projeto === project.nomeProjeto && proj.cargo === "INTERPRETE"
            )
          );

        const revisoresProjects = revisores
          .filter((user): user is UserById => user !== undefined)
          .flatMap((user) =>
            user.projetos.filter(
              (proj) => proj.nome_projeto === project.nomeProjeto && proj.cargo === "REVISOR"
            )
          );

        setInterpretesData(interpretesProjects);
        setRevisoresData(revisoresProjects);
      }
    };

    fetchUsersData();
  }, [project]);

  return loading ? (
    <p>Loading...</p>
  ) : authorized ? (
    <Grid>
      <MainNavbar />

      <Title styles={{ marginTop: 100 }}>{project?.nomeProjeto}</Title>
      <Grid container justifyContent="space-around">
        <Equipe project={project} />
        <Poligonos project={project} />
        <GraficoStatus project={project} subtitle="Status" />
        <GraficoRecorrencia project={project} />
      </Grid>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ marginBottom: 30 }}
      >
        <Grid item xs={11} sm={11} md={11}>
          <SubTitle>Interpretes</SubTitle>
          <DataTableUsuario interpretesData={interpretesData} />
        </Grid>
        <Grid item xs={11} sm={11} md={11}>
          <SubTitle>Revisores</SubTitle>
          <DataTableUsuarioRevisor revisoresData={revisoresData} />
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <NaoAutorizado />
  );
};

export default DadosProjeto;
