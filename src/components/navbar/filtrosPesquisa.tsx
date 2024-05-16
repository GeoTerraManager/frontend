import { Select, MenuItem } from "@mui/material"

const FiltroPesquisa = () =>{
    return(
        <>
        <Select
            
            defaultValue="all"
            style={{ marginRight: "10px",marginLeft: "10px", minWidth: "150px", backgroundColor: "white", maxHeight: "33px", border: "none", borderRadius: 3 }}
          >
            <MenuItem value="all">Pesquisar por...</MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
        </>
    )
}

export default FiltroPesquisa