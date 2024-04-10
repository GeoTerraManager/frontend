import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import FiltroPesquisa from "./filtrosPesquisa";
import BarraPesquisa from "./barraPesquisa";
import COLORS from "../../constant/COLORS";

const MainNavbar: React.FC = () => {
  return (
    <AppBar position="fixed" style={{backgroundColor: COLORS.secondary}}>
      <Container maxWidth="lg" >
        <Toolbar >
          <BarraPesquisa />
          <FiltroPesquisa />
          <IconButton edge="end" color="inherit" aria-label="search" >
            <SearchSharpIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainNavbar;
