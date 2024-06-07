import { Grid } from "@mui/material";
import SubTitle from "../../Title/subTitle";
import ProjectById from "../../../types/projectById";

interface EquipeProps {
  project: ProjectById | null;
}


const Poligonos = ({ project }: EquipeProps) => {
  
  return (
    <Grid item xs={5} md={1}>
      <SubTitle>Poligonos:</SubTitle>
      <p>{project ? project.qtdGrades : "-"}</p>
    </Grid>
  );
};

export default Poligonos;
