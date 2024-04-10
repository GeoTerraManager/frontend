import { InputBase } from "@mui/material"

const BarraPesquisa = () =>{
    return(
        <>
        <InputBase
            placeholder="Digite aqui..."
            inputProps={{ "aria-label": "search" }}
            style={{ flex: 1, maxWidth: "300px", backgroundColor: "white", borderRadius: 3, paddingLeft: 10 }}
          />
        </>
    )}

    export default BarraPesquisa