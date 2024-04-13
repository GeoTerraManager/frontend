// DadosPrincipais.js
import { Grid } from "@mui/material";
import DataTable from "../components/datatable/dataTable";
import FONT from "../constant/FONT";
import COLORS from "../constant/COLORS";
import { useAuth } from "../context/AuthContext";
import MainNavbar from "../components/navbar/navbar";
import NaoAutorizado from "../components/Errors/NãoAutorizado";

const DadosPrincipais = () => {
  const { loading, authorized } = useAuth();

  return (
    loading ? (
      <p>Loading...</p>
    ) : authorized ? (
     
        
      <Grid container alignItems="center" justifyContent="center">
      <MainNavbar/>
        <Grid item xs={11} sm={11} md={11} style={{marginTop: 50}}>
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
      
    ) : (
      <NaoAutorizado/>
    )
  );
};

export default DadosPrincipais;
