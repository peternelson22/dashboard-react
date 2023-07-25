import './barChartBox.scss';
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {
  title: string;
  chartData: object[];
  color: string;
  dataKey: string;
};

const BarChartBox = ({ title, chartData, color, dataKey }: Props) => {
  return (
    <div className='barChartBox'>
      <h1>{title}</h1>
      <div className='chart'>
        <ResponsiveContainer width='99%' height={150}>
          <BarChart data={chartData}>
            <Tooltip
              contentStyle={{ background: '#2a3447', borderRadius: '5px' }}
              labelStyle={{ display: 'none' }}
              cursor={{ fill: 'none' }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default BarChartBox;
