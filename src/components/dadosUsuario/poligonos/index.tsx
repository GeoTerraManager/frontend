import { Grid } from "@mui/material";
import SubTitle from "../../Title/subTitle";
import ProjectById from "../../../types/projectById";
import { UserById } from "../../../types/userById";

interface EquipeProps {
  project: UserById | null;
}


const PoligonosUsuario = ({ project }: EquipeProps) => {
  
  return (
    <Grid item xs={5} md={1}>
      <SubTitle>Poligonos:</SubTitle>
      <p>{project ? project.qtd_quadriculas_atribuidas : "-"}</p>
    </Grid>
  );
};

export default PoligonosUsuario;
