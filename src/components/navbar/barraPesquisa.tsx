import React from "react";
import { InputBase } from "@mui/material";

interface BarraPesquisaProps {
  setSearchQuery: (query: string) => void;
}

const BarraPesquisa: React.FC<BarraPesquisaProps> = ({ setSearchQuery }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <InputBase
      placeholder="Digite aqui..."
      inputProps={{ "aria-label": "search" }}
      style={{ flex: 1, maxWidth: "300px", backgroundColor: "white", borderRadius: 3, paddingLeft: 10 }}
      onChange={handleChange}
    />
  );
};

export default BarraPesquisa;
