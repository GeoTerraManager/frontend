import { Container } from "@mui/material";
import InputLogin from "./inputsLogin";
import BotaoLogin from "./botaoLogin";
import COLORS from "../../constant/COLORS";
import FONT from "../../constant/FONT";
import FormularioLoginProps from "../../types/FormularioLoginProps";


const FormularioLogin = (props: FormularioLoginProps) => {

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
      <InputLogin 
        placeholder="Nome de Usuario" 
        value={props.username}
        handler={props.usernameHandler}
      />
      <InputLogin 
        placeholder="Senha"
        value={props.senha}
        handler={props.senhaHandler} 
      />
      <BotaoLogin 
        handler={props.loginHandler}
      />
      <p style={{alignSelf: "center", marginTop: 30,color: COLORS.primary}}>Esqueci minha senha</p>
    </Container>
  );
};

export default FormularioLogin;
