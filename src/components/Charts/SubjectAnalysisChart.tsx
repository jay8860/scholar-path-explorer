import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'Math', score: 78 },
  { subject: 'English', score: 85 },
  { subject: 'Science', score: 76 },
  { subject: 'Social Studies', score: 82 },
];

export const SubjectAnalysisChart = () => {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="subject" />
          <YAxis />
          <Tooltip />
          <Bar 
            dataKey="score" 
            fill="hsl(217 91% 60%)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};