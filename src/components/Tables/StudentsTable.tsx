import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Edit } from "lucide-react";

interface StudentsTableProps {
  searchTerm: string;
  selectedSchool: string;
}

const students = [
  {
    id: "STU001",
    name: "Emma Johnson",
    school: "Riverside Elementary",
    grade: "5th Grade",
    lastScore: 92,
    trend: "improving",
    subjects: ["Math", "English", "Science"]
  },
  {
    id: "STU002",
    name: "Michael Chen",
    school: "Oak Middle School",
    grade: "7th Grade",
    lastScore: 78,
    trend: "stable",
    subjects: ["Math", "English", "Science", "Social Studies"]
  },
  {
    id: "STU003",
    name: "Sarah Williams",
    school: "Central High School",
    grade: "10th Grade",
    lastScore: 85,
    trend: "improving",
    subjects: ["Math", "English", "Science", "Social Studies"]
  },
  {
    id: "STU004",
    name: "David Martinez",
    school: "Lincoln Elementary",
    grade: "3rd Grade",
    lastScore: 88,
    trend: "improving",
    subjects: ["Math", "English"]
  },
  {
    id: "STU005",
    name: "Jessica Brown",
    school: "Riverside Elementary",
    grade: "4th Grade",
    lastScore: 72,
    trend: "declining",
    subjects: ["Math", "English", "Science"]
  }
];

export const StudentsTable = ({ searchTerm, selectedSchool }: StudentsTableProps) => {
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSchool = selectedSchool === "all" || 
                         student.school.toLowerCase().replace(/\s+/g, '-') === selectedSchool;
    return matchesSearch && matchesSchool;
  });

  const getTrendBadge = (trend: string) => {
    switch (trend) {
      case "improving":
        return <Badge className="bg-success/10 text-success">Improving</Badge>;
      case "declining":
        return <Badge className="bg-destructive/10 text-destructive">Declining</Badge>;
      default:
        return <Badge className="bg-muted text-muted-foreground">Stable</Badge>;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-success";
    if (score >= 75) return "text-warning";
    return "text-destructive";
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Student ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>School</TableHead>
          <TableHead>Grade</TableHead>
          <TableHead>Last Score</TableHead>
          <TableHead>Trend</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredStudents.map((student) => (
          <TableRow key={student.id}>
            <TableCell className="font-mono text-sm">{student.id}</TableCell>
            <TableCell className="font-medium">{student.name}</TableCell>
            <TableCell>{student.school}</TableCell>
            <TableCell>{student.grade}</TableCell>
            <TableCell>
              <span className={`font-semibold ${getScoreColor(student.lastScore)}`}>
                {student.lastScore}%
              </span>
            </TableCell>
            <TableCell>{getTrendBadge(student.trend)}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};