import { PieChart } from "@mui/x-charts/PieChart";
import SubTitle from "../../Title/subTitle";
import { Grid } from "@mui/material";

const GraficoRecorrencia = () => {
  return (
    <Grid item md={2} xs={10}>
      <SubTitle>Recorrência:</SubTitle>
      <PieChart
        colors={["red", "blue", "green"]}
        series={[
          {
            data: [
              { id: 0, value: 25, color: "blue" },
              { id: 1, value: 30, color: "green" },
            ],
            innerRadius: 25,
            outerRadius: 45,
            cx: 50,
          },
        ]}
        width={270}
        height={100}
      />
    </Grid>
  );
};

export default GraficoRecorrencia;
