import { Grid } from "@mui/material";
import FONT from "../constant/FONT";
import COLORS from "../constant/COLORS";
import { useAuth } from "../context/AuthContext";
import MainNavbar from "../components/navbar/navbar";
import NaoAutorizado from "../components/Errors/NãoAutorizado";
import GraficoStatus from "../components/graficoStatus";
import Title from "../components/Title/title";
import SubTitle from "../components/Title/subTitle";
import GraficoRecorrencia from "../components/graficoRecorrencia";

const DadosProjeto = () => {
  const { loading, authorized } = useAuth();

  return loading ? (
    <p>Loading...</p>
  ) : authorized ? (
    <Grid>
      <MainNavbar />

      <Title styles={{ marginTop: 100 }}>Nome Projeto</Title>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
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
        </div>
        <div>
          <SubTitle>Poligonos:</SubTitle>
          <p
            
          >
            230
          </p>
        </div>

        <GraficoStatus />
        <GraficoRecorrencia />
      </div>
    </Grid>
  ) : (
    <NaoAutorizado />
  );
};

export default DadosProjeto;
