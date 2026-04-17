import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Call', value: 45 },
  { name: 'Text', value: 320 },
  { name: 'Video', value: 12 },
];
const COLORS = ['#15803D', '#C2410C', '#7E22CE'];

const Stats = () => (
  <div className="max-w-4xl mx-auto py-20 px-6 text-center">
    <h2 className="text-4xl font-black mb-10 text-gray-900">Friendship Analytics</h2>
    <div className="bg-white p-10 rounded-[40px] shadow-2xl h-[400px] border-4 border-white">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} innerRadius={80} outerRadius={120} paddingAngle={5} dataKey="value">
            {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default Stats;