import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Sep', riverside: 82, oak: 75, central: 80, lincoln: 85 },
  { month: 'Oct', riverside: 84, oak: 76, central: 81, lincoln: 87 },
  { month: 'Nov', riverside: 85, oak: 78, central: 82, lincoln: 88 },
  { month: 'Dec', riverside: 85, oak: 79, central: 83, lincoln: 88 },
];

export const PerformanceChart = () => {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="riverside" 
            stroke="hsl(217 91% 60%)" 
            strokeWidth={2}
            name="Riverside Elementary"
          />
          <Line 
            type="monotone" 
            dataKey="oak" 
            stroke="hsl(0 84% 60%)" 
            strokeWidth={2}
            name="Oak Middle"
          />
          <Line 
            type="monotone" 
            dataKey="central" 
            stroke="hsl(172 66% 50%)" 
            strokeWidth={2}
            name="Central High"
          />
          <Line 
            type="monotone" 
            dataKey="lincoln" 
            stroke="hsl(142 76% 36%)" 
            strokeWidth={2}
            name="Lincoln Elementary"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};