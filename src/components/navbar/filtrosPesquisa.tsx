import React from "react";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

interface FiltroPesquisaProps {
  setFilter: (filter: string) => void;
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "4px 4px 4px 4px",
    color: "gray",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const FiltroPesquisa: React.FC<FiltroPesquisaProps> = ({ setFilter }) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    setFilter(event.target.value);
  };

  return (
    <Select
      defaultValue="all"
      style={{
        marginRight: "10px",
        marginLeft: "10px",
        minWidth: "150px",
        backgroundColor: "white",
        maxHeight: "33px",
        borderRadius: 3,
        borderWidth: 0,
        borderColor: "white",
      }}
      input={<BootstrapInput />}
      onChange={handleChange}
    >
      <MenuItem value="all">Pesquisar por...</MenuItem>
      <MenuItem value="option1">Projeto</MenuItem>
      <MenuItem value="option2">Analista</MenuItem>
    </Select>
  );
};

export default FiltroPesquisa;
