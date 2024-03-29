import { Grid } from "@mui/material";
import DataTable from "../components/datatable/dataTable";

const DadosPrincipais = () => {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={9} sm={9} md={9}>
        <DataTable />
      </Grid>
    </Grid>
  );
};

export default DadosPrincipais;
