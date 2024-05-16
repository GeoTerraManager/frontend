import SubTitle from "../../Title/subTitle";
import FONT from "../../../constant/FONT";
import COLORS from "../../../constant/COLORS";
import { Grid } from "@mui/material";

const Equipe = () => {
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
      <p>1</p>
      <p
        style={{
          fontFamily: FONT.poppinsBold,
          color: COLORS.primary,
          margin: 0,
        }}
      >
        Analistas:
      </p>
      <p>5</p>
    </Grid>
  );
};

export default Equipe;
