import { PieChart } from "@mui/x-charts/PieChart";
import SubTitle from "../../Title/subTitle";
import { Grid } from "@mui/material";
import ProjectById from "../../../types/projectById";

interface Props {
  subtitle: string;
  project: ProjectById | null;
}

const GraficoStatus: React.FC<Props> = ({ subtitle, project }) => {
  // Calculate the data for the PieChart based on project values
  const data = [
    { id: 0, value: project?.qtdGradeAndamento || 0, label: "Em revisão", color: "blue" },
    { id: 1, value: project?.qtdGradeFeita || 0, label: "Feito", color: "green" },
    { id: 2, value: project?.qtdGradePendente || 0, label: "Pendente", color: "purple" },
  ];

  return (
    <Grid item md={2} xs={10}>
      <SubTitle>{subtitle}</SubTitle>
      <PieChart
        colors={["red", "blue", "green"]}
        series={[
          {
            data,
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
