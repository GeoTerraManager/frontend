import { Button } from "@mui/material";
import COLORS from "../../constant/COLORS";

const BotaoLogin = () => {
  return (
    <Button style={{ backgroundColor: COLORS.primary, borderWidth: 0, borderRadius: 50  }} variant="contained">
      Login
    </Button>
  );
};

export default BotaoLogin;
