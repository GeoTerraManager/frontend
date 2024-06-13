import { Grid } from "@mui/material";
import DataTable from "../components/datatable/dataTable";
import FONT from "../constant/FONT";
import COLORS from "../constant/COLORS";
import { useAuth } from "../context/AuthContext";
import MainNavbar from "../components/navbar/navbar";
import NaoAutorizado from "../components/Errors/NãoAutorizado";
import Title from "../components/Title/title";
import CustomButton from "../components/customButtom/CustomButton";
import SearchNavbar from "../components/navbar/searchNavbar";
import DataTablePesquisa from "../components/datatable/dataTablePesquisa";

const DadosPrincipais = () => {
  const { loading, authorized } = useAuth();

  return (
    loading ? (
      <p>Loading...</p>
    ) : authorized ? (
     
        
      <Grid container alignItems="center" justifyContent="center">
      <SearchNavbar/>
        <Grid item xs={11} sm={11} md={11} style={{marginTop: 60}}>
          
         <Title>Projetos</Title>
       
          <DataTable />
         
        </Grid>
      </Grid>
      
    ) : (
      <NaoAutorizado/>
    )
  );
};

export default DadosPrincipais;