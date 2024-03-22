import { Container } from "@mui/material";
import InputLogin from "./inputsLogin";
import BotaoLogin from "./botaoLogin";
import COLORS from "../../constant/COLORS";

const FormularioLogin = () => {
  return (
    <Container fixed
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: COLORS.white,
        padding: 30,
        borderRadius: 20
      }}
    >
      <InputLogin placeholder="Email" />
      <InputLogin placeholder="Senha" />
      <BotaoLogin />
    </Container>
  );
};

export default FormularioLogin;
