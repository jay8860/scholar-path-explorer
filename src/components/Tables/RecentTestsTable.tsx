import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const recentTests = [
  {
    school: "Riverside Elementary",
    subject: "Mathematics",
    date: "2024-12-15",
    avgScore: 85.2,
    status: "completed"
  },
  {
    school: "Oak Middle School",
    subject: "English",
    date: "2024-12-14",
    avgScore: 78.9,
    status: "completed"
  },
  {
    school: "Central High School",
    subject: "Science",
    date: "2024-12-13",
    avgScore: 82.7,
    status: "completed"
  },
  {
    school: "Lincoln Elementary",
    subject: "Social Studies",
    date: "2024-12-12",
    avgScore: 88.4,
    status: "completed"
  }
];

export const RecentTestsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>School</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Avg Score</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentTests.map((test, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{test.school}</TableCell>
            <TableCell>{test.subject}</TableCell>
            <TableCell>{new Date(test.date).toLocaleDateString()}</TableCell>
            <TableCell>
              <span className={`font-semibold ${
                test.avgScore >= 85 ? 'text-success' : 
                test.avgScore >= 75 ? 'text-warning' : 'text-destructive'
              }`}>
                {test.avgScore}%
              </span>
            </TableCell>
            <TableCell>
              <Badge variant="secondary" className="bg-success/10 text-success">
                {test.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};