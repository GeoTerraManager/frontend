import { Grid } from "@mui/material";
import DataTable from "../components/datatable/dataTable";
import FONT from "../constant/FONT";
import COLORS from "../constant/COLORS";
import { useAuth } from "../context/AuthContext";
import MainNavbar from "../components/navbar/navbar";
import NaoAutorizado from "../components/Errors/NãoAutorizado";
import GraficoStatus from "../components/graficoStatus";
import Title from "../components/Title";


const DadosProjeto = () => {
  const { loading, authorized } = useAuth();

  return (
    loading ? (
      <p>Loading...</p>
    ) : authorized ? (
     
        
      <Grid >
        <MainNavbar/>
     
      
      <GraficoStatus/>
      </Grid>
      
    ) : (
      <NaoAutorizado/>
    )
  );
};

export default DadosProjeto;
