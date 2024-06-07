import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DadosPrincipais, Login, DadosProjeto, DadosUsuario } from "../screens";
import CustomButton from "../components/dadosprojeto/dadosCargo/CustomButton";

function AppRouter() {
  return (

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dados-principais" element={<WithExportButton><DadosPrincipais /></WithExportButton>} />
          <Route path="/dados-projeto/:id" element={<WithExportButton><DadosProjeto /></WithExportButton>} />
          <Route path="/dados-usuario" element={<WithExportButton><DadosUsuario /></WithExportButton>} />
        </Routes>
      </Router>
 
  );
}

const WithExportButton = ({ children }: { children: React.ReactNode }) => (
  <>
    {children}
    <CustomButton />
  </>
);

export default AppRouter;
