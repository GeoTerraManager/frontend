import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DadosPrincipais, Login, DadosProjeto, DadosUsuario } from "../screens";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dados-principais" element={<DadosPrincipais />} />
        <Route path="/dados-projeto" element={<DadosProjeto />} />
        <Route path="/dados-usuario" element={<DadosUsuario />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
