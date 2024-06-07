import SubTitle from "../../Title/subTitle";
import FONT from "../../../constant/FONT";
import COLORS from "../../../constant/COLORS";
import { Grid } from "@mui/material";
import ProjectById from "../../../types/projectById";

interface EquipeProps {
  project: ProjectById | null;
}

const Equipe = ({ project }: EquipeProps) => {
  return (
    <Grid item xs={5} md={1}>
      <SubTitle>Equipe:</SubTitle>
      <p
        style={{
          fontFamily: FONT.poppinsBold,
          color: COLORS.primary,
          margin: 0,
        }}
      >
        Revisores:
      </p>
      <p>{project ? project.qtdRevisores : "-"}</p>
      <p
        style={{
          fontFamily: FONT.poppinsBold,
          color: COLORS.primary,
          margin: 0,
        }}
      >
        Analistas:
      </p>
      <p>{project ? project.qtdAnalistas : "-"}</p>
    </Grid>
  );
};

export default Equipe;
