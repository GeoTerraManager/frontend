import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import FiltroPesquisa from "./filtrosPesquisa";
import BarraPesquisa from "./barraPesquisa";
import COLORS from "../../constant/COLORS";

const MainNavbar: React.FC = () => {
  const navigate = useNavigate();
  const logo = require("../../assets/logo-simples.png") as string;

  const handleLogoClick = () => {
    navigate("/dados-principais");
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: COLORS.secondary }}>
      <Container
        maxWidth="lg"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Toolbar>
          <BarraPesquisa />
          <FiltroPesquisa />
          <IconButton edge="end" color="inherit" aria-label="search">
            <SearchSharpIcon />
          </IconButton>
        </Toolbar>
        <img
          src={logo}
          alt="logo"
          height="40vw"
          style={{ margin: 10, cursor: "pointer" }}
          onClick={handleLogoClick}
        />
      </Container>
    </AppBar>
  );
};

export default MainNavbar;
