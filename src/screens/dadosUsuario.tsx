import {
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import MainNavbar from "../components/navbar/navbar";
import NaoAutorizado from "../components/Errors/NãoAutorizado";
import GraficoStatus from "../components/dadosUsuario/graficoStatus";
import Title from "../components/Title/title";
import { useEffect, useState } from "react";
import PoligonosUsuario from "../components/dadosUsuario/poligonos";
import { useParams } from "react-router-dom";
import getUserById from "../services/getUserById";
import { UserById, ProjectByUser } from "../types/userById";

const DadosUsuario = () => {
  const { loading, authorized } = useAuth();
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserById | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (id) {
        const userData = await getUserById(id);
        setUser(userData || null);
      }
    };

    fetchUserData();
  }, [id]);

  // Function to filter and organize data by cargo
  const separarDadosPorCargo = (projetos: ProjectByUser[], cargo: string) => {
    return projetos.filter((projeto) => projeto.cargo === cargo);
  };

  return loading ? (
    <p>Loading...</p>
  ) : authorized ? (
    <Grid container>
      <MainNavbar />
      <Title styles={{ marginTop: 100 }}>
        {user ? user.nome : "Nome Usuario"}
      </Title>
      <Grid container justifyContent="space-around">
        <Grid item xs={5} md={4}>
          <p>Apontamentos: {user ? user.qtd_total_apontamentos : "-"}</p>
        </Grid>
        <PoligonosUsuario project={user} />
        <GraficoStatus user={user} subtitle="Quadriculas" />
      </Grid>

      <Grid container justifyContent="center" style={{ marginTop: 30 }}>
        <Grid item xs={10} md={10}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 220 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nome Projeto</TableCell>
                    <TableCell>Cargo</TableCell>
                    <TableCell>Total Quadriculas Revisao</TableCell>
                    <TableCell>Revisadas</TableCell>
                    <TableCell>Pendentes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {separarDadosPorCargo(user?.projetos || [], "REVISOR").map(
                    (projeto, index) => (
                      <TableRow key={index}>
                        <TableCell>{projeto.nome_projeto}</TableCell>
                        <TableCell>{projeto.cargo}</TableCell>
                        <TableCell>
                          {projeto.total_quadriculas_revisao}
                        </TableCell>
                        <TableCell>{projeto.revisadas}</TableCell>
                        <TableCell>{projeto.pendentes}</TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" style={{ marginTop: 30 }}>
        <Grid item xs={10} md={10}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer component={Paper} sx={{ maxHeight: 220 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nome Projeto</TableCell>
                    <TableCell>Cargo</TableCell>
                    <TableCell>Total Quadriculas Atribuidas</TableCell>
                    <TableCell>Feitas</TableCell>
                    <TableCell>Andamento</TableCell>
                    <TableCell>Km Mapeados</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {separarDadosPorCargo(user?.projetos || [], "INTERPRETE").map(
                    (projeto, index) => (
                      <TableRow key={index}>
                        <TableCell>{projeto.nome_projeto}</TableCell>
                        <TableCell>{projeto.cargo}</TableCell>
                        <TableCell>
                          {projeto.total_quadriculas_atribuidas}
                        </TableCell>
                        <TableCell>{projeto.feitas}</TableCell>
                        <TableCell>{projeto.andamento}</TableCell>
                        <TableCell>{projeto.km_mapeados}</TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ marginBottom: 30, marginTop: 80 }}
      >
        <Grid item xs={11} sm={11} md={11}></Grid>
      </Grid>
    </Grid>
  ) : (
    <NaoAutorizado />
  );
};

export default DadosUsuario;
