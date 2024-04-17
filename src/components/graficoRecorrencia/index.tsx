import { PieChart } from "@mui/x-charts/PieChart";
import SubTitle from "../Title/subTitle";

const GraficoRecorrencia = () => {
  return (
    <div style={{ width: "100%", maxWidth: "350px" }}>
      <SubTitle>Recorrência:</SubTitle>
      <PieChart
        colors={["red", "blue", "green"]}
        series={[
          {
            data: [
              { id: 0, value: 25, label: "Em Andamento", color: "blue" },
              { id: 1, value: 30, label: "Feito", color: "green" },
            ],
            innerRadius: 25,
            outerRadius: 45,
            cx: 50,
          },
        ]}
        width={270}
        height={100}
      />
    </div>
  );
};

export default GraficoRecorrencia;
