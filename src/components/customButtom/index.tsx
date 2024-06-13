import { Grid, Button } from "@mui/material";
import SubTitle from "../Title/subTitle";
import CustomButtom from "./CustomButton";

export const DadosRevisores = () => {
  return (
    <Grid container item xs={10} md={10}>
      <Grid item xs={12}>
        <SubTitle>Revisores</SubTitle>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item spacing={1}>
          <CustomButtom />
          <CustomButtom />
          <CustomButtom />
        </Grid>
      </Grid>
    </Grid>
  );
};

export const DadosInterprete = () => {
  return (
    <Grid container item xs={10} md={10}>
      <Grid item xs={12}>
        <SubTitle>Interpretes</SubTitle>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item spacing={1}>
          <CustomButtom />
          <CustomButtom />
          <CustomButtom />
        </Grid>
      </Grid>
    </Grid>
  );
};
