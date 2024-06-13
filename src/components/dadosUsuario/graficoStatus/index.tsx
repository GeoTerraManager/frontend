import React from 'react';
import { Grid } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import SubTitle from '../../Title/subTitle';
import { UserById } from '../../../types/userById';

interface Props {
  subtitle: string;
  user: UserById | null;
}

const GraficoStatus: React.FC<Props> = ({ subtitle, user }) => {
  // Calculate the data for the PieChart based on user values
  const data = [
    { id: 0, value: user?.qtd_quadriculas_andamento || 0, label: 'Em andamento', color: 'blue' },
    { id: 1, value: user?.qtd_quadriculas_finalizadas || 0, label: 'Finalizadas', color: 'green' },
    { id: 2, value: user?.qtd_quadriculas_atribuidas || 0, label: 'Atribuídas', color: 'purple' },
  ];

  return (
    <Grid item md={2} xs={10}>
      <SubTitle>{subtitle}</SubTitle>
      <PieChart
        colors={['blue', 'green', 'purple']} // Adjusted colors to match the labels
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
