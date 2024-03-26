import { Button, Grid } from "@mui/material";
import COLORS from "../../constant/COLORS";
import FONT from "../../constant/FONT";

const BotaoLogin = () => {
  return (
    <Button
      style={{
        backgroundColor: COLORS.primary,
        borderWidth: 0,
        borderRadius: 50,
        alignSelf: "center",
        width: "50%",
        fontFamily: FONT.poppinsBold,
        textTransform: "capitalize",
        marginTop: 20
      }}
      variant="contained"
    >
      Login
    </Button>
  );
};

export default BotaoLogin;
