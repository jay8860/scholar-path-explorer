import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Save } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { ScoreEntryTable } from "@/components/Tables/ScoreEntryTable";

export const TestScoreEntry = () => {
  const [selectedSchool, setSelectedSchool] = useState<string>("");
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [testDate, setTestDate] = useState<Date>();
  const [testName, setTestName] = useState("");
  const [maxScore, setMaxScore] = useState("100");

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log("Saving test scores...");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Test Score Entry</h1>
        <p className="text-muted-foreground">Enter monthly test scores for students</p>
      </div>

      {/* Test Configuration */}
      <Card className="bg-gradient-card shadow-soft border-0">
        <CardHeader>
          <CardTitle>Test Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="school">School</Label>
              <Select value={selectedSchool} onValueChange={setSelectedSchool}>
                <SelectTrigger>
                  <SelectValue placeholder="Select school" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="riverside-elementary">Riverside Elementary</SelectItem>
                  <SelectItem value="oak-middle">Oak Middle School</SelectItem>
                  <SelectItem value="central-high">Central High School</SelectItem>
                  <SelectItem value="lincoln-elementary">Lincoln Elementary</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="social-studies">Social Studies</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Test Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !testDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {testDate ? format(testDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={testDate}
                    onSelect={setTestDate}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="maxScore">Max Score</Label>
              <Input
                id="maxScore"
                value={maxScore}
                onChange={(e) => setMaxScore(e.target.value)}
                placeholder="100"
                type="number"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="testName">Test Name</Label>
            <Input
              id="testName"
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
              placeholder="Enter test name (e.g., Monthly Assessment - December 2024)"
            />
          </div>
        </CardContent>
      </Card>

      {/* Score Entry Table */}
      {selectedSchool && selectedSubject && (
        <Card className="bg-gradient-card shadow-soft border-0">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Score Entry</CardTitle>
            <Button onClick={handleSave} className="bg-gradient-success hover:opacity-90">
              <Save className="h-4 w-4 mr-2" />
              Save Scores
            </Button>
          </CardHeader>
          <CardContent>
            <ScoreEntryTable school={selectedSchool} subject={selectedSubject} maxScore={parseInt(maxScore)} />
          </CardContent>
        </Card>
      )}
    </div>
  );
};