// BarraPesquisa.tsx
import { InputBase } from "@mui/material";

interface BarraPesquisaProps {
  setSearchQuery: (query: string) => void;
}

const BarraPesquisa: React.FC<BarraPesquisaProps> = ({ setSearchQuery }) => {
  return (
    <InputBase
      placeholder="Digite aqui..."
      inputProps={{ "aria-label": "search" }}
      style={{ flex: 1, maxWidth: "300px", backgroundColor: "white", borderRadius: 3, paddingLeft: 10 }}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default BarraPesquisa;
