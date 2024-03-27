import { Container } from "@mui/material";
import InputLogin from "./inputsLogin";
import BotaoLogin from "./botaoLogin";
import COLORS from "../../constant/COLORS";
import FONT from "../../constant/FONT";

const FormularioLogin = () => {
  return (
    <Container
      fixed
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: COLORS.white,
        padding: 20,
        borderRadius: 20,
        paddingTop: 40,
        paddingBottom: 20,
      }}
    >
      <h1
        style={{
          fontFamily: FONT.poppinsBold,
          color: COLORS.primary,
          alignSelf: "center",
        }}
      >
        BEM-VINDO
      </h1>
      <InputLogin placeholder="Email" />
      <InputLogin placeholder="Senha" />
      <BotaoLogin />
      <p style={{alignSelf: "center", marginTop: 30,color: COLORS.primary}}>Esqueci minha senha</p>
    </Container>
  );
};

export default FormularioLogin;
