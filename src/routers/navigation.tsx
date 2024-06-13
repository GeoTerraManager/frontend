import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DadosPrincipais, Login, DadosProjeto, DadosUsuario } from "../screens";
import CustomButton from "../components/customButtom/CustomButton";

const WithCustomButton = ({ children }: { children: React.ReactNode }) => (
  <>
    {children}
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: 16 }}>
      <CustomButton />
    </div>
  </>
);

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dados-principais" element={<WithCustomButton><DadosPrincipais /></WithCustomButton>} />
        <Route path="/dados-projeto/:id" element={<WithCustomButton><DadosProjeto /></WithCustomButton>} />
        <Route path="/dados-usuario" element={<WithCustomButton><DadosUsuario /></WithCustomButton>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;