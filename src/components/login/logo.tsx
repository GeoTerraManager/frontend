import React from "react";
import COLORS from "../../constant/COLORS";
import FONT from "../../constant/FONT";

const LogoLogin = () => {
  const logo = require("../../../src/assets/logo-simples.png") as string;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Empilha os elementos verticalmente
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center", // Alinha o texto centralmente
      }}
    >
      <img src={logo} alt="logo terra" width={"150vh"} style={{ marginBottom: 10 }} /> {/* Adiciona um espaçamento abaixo da imagem */}
      <h1
        style={{
          color: COLORS.white,
          fontFamily: FONT.poppinsBold,
          fontWeight: 200,
          marginLeft: 20,
          marginRight: 20, // Adiciona um espaçamento nas laterais
        }}
      >
        TerraGeo <strong>Manager</strong>
      </h1>
    </div>
  );
};

export default LogoLogin;
