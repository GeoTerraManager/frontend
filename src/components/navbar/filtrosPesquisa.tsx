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
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const FiltroPesquisa = () => {
  return (
    <>
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
      >
        <MenuItem value="all">Pesquisar por...</MenuItem>
        <MenuItem value="option1">Projeto</MenuItem>
        <MenuItem value="option2">Analista</MenuItem>
        <MenuItem value="option2">Revisor</MenuItem>
        <MenuItem value="option2">Interprete</MenuItem>
        <MenuItem value="option2">Periodo</MenuItem>
      </Select>
    </>
  );
};

export default FiltroPesquisa;
