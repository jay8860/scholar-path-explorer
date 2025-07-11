import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { school: 'Riverside', math: 85, english: 87, science: 82, social: 86 },
  { school: 'Oak Middle', math: 78, english: 80, science: 76, social: 79 },
  { school: 'Central', math: 82, english: 84, science: 80, social: 83 },
  { school: 'Lincoln', math: 88, english: 90, science: 86, social: 89 },
];

export const SchoolComparisonChart = () => {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="school" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="math" fill="hsl(217 91% 60%)" name="Mathematics" />
          <Bar dataKey="english" fill="hsl(172 66% 50%)" name="English" />
          <Bar dataKey="science" fill="hsl(142 76% 36%)" name="Science" />
          <Bar dataKey="social" fill="hsl(45 93% 47%)" name="Social Studies" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};