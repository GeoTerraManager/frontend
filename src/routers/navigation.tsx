import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DadosPrincipais, Login } from "../screens";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dados-principais" element={<DadosPrincipais />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
