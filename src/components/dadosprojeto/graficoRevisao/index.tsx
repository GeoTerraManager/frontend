import { PieChart } from "@mui/x-charts/PieChart";
import SubTitle from "../../Title/subTitle";
import { Grid } from "@mui/material";
import ProjectById from "../../../types/projectById";

interface Props {
  project: ProjectById | null;
}

const GraficoRevisao: React.FC<Props> = ({ project }) => {
  // Extract pctRecorrencia from the project data
  const pctRecorrencia = project?.pctRecorrencia || "0";

  // Convert the percentage string to a number
  const pctRecorrenciaNumber = parseFloat(pctRecorrencia);

  return (
    <Grid item md={2} xs={10}>
      <SubTitle>Revisões:</SubTitle>
      <PieChart
        colors={["red", "green"]}
        series={[
          {
            data: [
              { id: 0, value: pctRecorrenciaNumber || 0, color: "green" },
              { id: 1, value: 100 - (pctRecorrenciaNumber || 0), color: "gray" },
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

export default GraficoRevisao;
