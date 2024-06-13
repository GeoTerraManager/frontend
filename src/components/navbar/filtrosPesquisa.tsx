// filtrosPesquisa.tsx
import { Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

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

interface FiltroPesquisaProps {
  setFilter: (filter: string) => void;
}

const FiltroPesquisa: React.FC<FiltroPesquisaProps> = ({ setFilter }) => {
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
      onChange={(e) => setFilter(e.target.value as string)}
    >
      <MenuItem value="all">Pesquisar por...</MenuItem>
      <MenuItem value="option1">Projetos</MenuItem>
      <MenuItem value="option2">Usuários</MenuItem>
    </Select>
  );
};

export default FiltroPesquisa;
