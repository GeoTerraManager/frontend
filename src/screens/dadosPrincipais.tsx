import { Grid } from "@mui/material";
import DataTable from "../components/datatable/dataTable";
import FONT from "../constant/FONT";
import COLORS from "../constant/COLORS";

const DadosPrincipais = () => {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={11} sm={11} md={11}>
        <h3
          style={{
            fontFamily: FONT.poppinsBold,
            paddingLeft: 25,
            marginBottom: 10,
            color: COLORS.primary,
          }}
        >
          Hoje:
        </h3>
        <DataTable />
      </Grid>
      <Grid item xs={11} sm={11} md={11}>
        <h3
          style={{
            fontFamily: FONT.poppinsBold,
            paddingLeft: 25,
            marginBottom: 10,
            color: COLORS.primary,
          }}
        >
          Semana Passada:
        </h3>
        <DataTable />
      </Grid>
    </Grid>
  );
};

export default DadosPrincipais;
