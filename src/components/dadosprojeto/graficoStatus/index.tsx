import { PieChart } from "@mui/x-charts/PieChart";
import SubTitle from "../../Title/subTitle";
import { Grid } from "@mui/material";

interface Props {
  subtitle: string;
}

const GraficoStatus: React.FC<Props> = ({ subtitle }) => {
  return (
    <Grid item md={2} xs={10}>
      <SubTitle>{subtitle}</SubTitle>
      <PieChart
        colors={["red", "blue", "green"]}
        series={[
          {
            data: [
              { id: 0, value: 25, label: "Andamento", color: "blue" },
              { id: 1, value: 30, label: "Feito", color: "green" },
              { id: 2, value: 10, label: "Parado", color: "red" },
            ],
            cx: 50,
          },
        ]}
        width={270}
        height={100}
      />
    </Grid>
  );
};

export default GraficoStatus;
