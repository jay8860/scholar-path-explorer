import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

interface ScoreEntryTableProps {
  school: string;
  subject: string;
  maxScore: number;
}

const mockStudents = [
  { id: "STU001", name: "Emma Johnson", grade: "5th Grade" },
  { id: "STU002", name: "Michael Chen", grade: "5th Grade" },
  { id: "STU003", name: "Sarah Williams", grade: "5th Grade" },
  { id: "STU004", name: "David Martinez", grade: "5th Grade" },
  { id: "STU005", name: "Jessica Brown", grade: "5th Grade" },
];

export const ScoreEntryTable = ({ school, subject, maxScore }: ScoreEntryTableProps) => {
  const [scores, setScores] = useState<Record<string, string>>({});

  const handleScoreChange = (studentId: string, score: string) => {
    setScores(prev => ({
      ...prev,
      [studentId]: score
    }));
  };

  const getScoreColor = (score: string) => {
    const numScore = parseFloat(score);
    if (isNaN(numScore)) return "";
    
    const percentage = (numScore / maxScore) * 100;
    if (percentage >= 85) return "border-success text-success";
    if (percentage >= 75) return "border-warning text-warning";
    if (percentage < 60) return "border-destructive text-destructive";
    return "";
  };

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground">
        Entering scores for <span className="font-semibold">{subject}</span> at{" "}
        <span className="font-semibold">{school.replace(/-/g, " ")}</span> (Max: {maxScore})
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Percentage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockStudents.map((student) => {
            const score = scores[student.id] || "";
            const percentage = score ? ((parseFloat(score) / maxScore) * 100).toFixed(1) : "";
            
            return (
              <TableRow key={student.id}>
                <TableCell className="font-mono text-sm">{student.id}</TableCell>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.grade}</TableCell>
                <TableCell>
                  <Input
                    type="number"
                    max={maxScore}
                    min="0"
                    value={score}
                    onChange={(e) => handleScoreChange(student.id, e.target.value)}
                    className={`w-20 ${getScoreColor(score)}`}
                    placeholder="0"
                  />
                </TableCell>
                <TableCell>
                  {percentage && (
                    <span className={`font-semibold ${
                      parseFloat(percentage) >= 85 ? 'text-success' : 
                      parseFloat(percentage) >= 75 ? 'text-warning' : 
                      parseFloat(percentage) < 60 ? 'text-destructive' : ''
                    }`}>
                      {percentage}%
                    </span>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};