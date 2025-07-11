import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Search, Filter } from "lucide-react";
import { StudentsTable } from "@/components/Tables/StudentsTable";
import { ExcelUpload } from "@/components/ExcelUpload";

export const StudentManagement = () => {
  const [showUpload, setShowUpload] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Student Management</h1>
          <p className="text-muted-foreground">Manage student data across all schools</p>
        </div>
        <Button 
          onClick={() => setShowUpload(true)}
          className="bg-gradient-primary hover:opacity-90 shadow-medium"
        >
          <Upload className="h-4 w-4 mr-2" />
          Upload Excel
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-gradient-card shadow-soft border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedSchool} onValueChange={setSelectedSchool}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select school" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Schools</SelectItem>
                <SelectItem value="riverside-elementary">Riverside Elementary</SelectItem>
                <SelectItem value="oak-middle">Oak Middle School</SelectItem>
                <SelectItem value="central-high">Central High School</SelectItem>
                <SelectItem value="lincoln-elementary">Lincoln Elementary</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card className="bg-gradient-card shadow-soft border-0">
        <CardHeader>
          <CardTitle>Students</CardTitle>
        </CardHeader>
        <CardContent>
          <StudentsTable searchTerm={searchTerm} selectedSchool={selectedSchool} />
        </CardContent>
      </Card>

      {/* Excel Upload Modal */}
      {showUpload && (
        <ExcelUpload onClose={() => setShowUpload(false)} />
      )}
    </div>
  );
};