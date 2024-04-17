import { PieChart } from '@mui/x-charts/PieChart';
import Title from '../Title';

const GraficoStatus =()=> {
    return(
      <div>
        <Title styles={{marginTop: 80}}>Status</Title>
        <PieChart
        colors={['red', 'blue', 'green']} 
        series={[
          {
            data: [
              { id: 0, value: 25, label: 'Em Andamento', color: "blue" },
              { id: 1, value: 30, label: 'Feito',color: "green" },
              { id: 2, value: 10, label: 'Parado', color: "red" },
            ],
          },
        ]}
        width={500}
        height={200}
      />
      </div>
    )

}

export default GraficoStatus