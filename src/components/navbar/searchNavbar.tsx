import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, AppBar, Toolbar, IconButton } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import FiltroPesquisa from "./filtrosPesquisa";
import BarraPesquisa from "./barraPesquisa";
import COLORS from "../../constant/COLORS";
import axios from "axios";
import DataTablePesquisa from "../datatable/dataTablePesquisa";
import { Data } from "../datatable/dataTablePesquisa";

const SearchNavbar: React.FC = () => {
  const navigate = useNavigate();
  const logo = require("../../assets/logo-simples.png") as string;
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [rows, setRows] = useState<Data[]>([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleLogoClick = () => {
    navigate("/dados-principais");
  };

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      setSearchPerformed(false);
      return;
    }

    let url = "http://localhost:3001/pesquisa?query=";

    if (filter === "option1") {
      url = "http://localhost:3001/pesquisa/projetos?query=";
    } else if (filter === "option2") {
      url = "http://localhost:3001/pesquisa/usuarios?query=";
    }

    try {
      const response = await axios.get(url + searchQuery);
      const data = response.data;

      const newRows = data.map((item: any) => {
        return { resultado: item.name, type: item.type, id: item.id };
      });

      setRows(newRows);
      setSearchPerformed(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchPerformed(false);
    }
  }, [searchQuery]);

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: COLORS.secondary }}>
        <Container maxWidth="lg" style={{ display: "flex", justifyContent: "space-between" }}>
          <Toolbar>
            <BarraPesquisa setSearchQuery={setSearchQuery} />
            <FiltroPesquisa setFilter={setFilter} />
            <IconButton edge="end" color="inherit" aria-label="search" onClick={handleSearch}>
              <SearchSharpIcon />
            </IconButton>
          </Toolbar>
          <img src={logo} alt="logo" height="40vw" style={{ margin: 10, cursor: "pointer" }} onClick={handleLogoClick} />
        </Container>
      </AppBar>
      <Container style={{ marginTop: "80px" }}>
        {searchPerformed && <DataTablePesquisa rows={rows} />}
      </Container>
    </>
  );
};

export default SearchNavbar;
