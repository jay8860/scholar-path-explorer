import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, TrendingDown, Award, AlertTriangle } from "lucide-react";
import { PerformanceChart } from "@/components/Charts/PerformanceChart";
import { SubjectAnalysisChart } from "@/components/Charts/SubjectAnalysisChart";
import { SchoolComparisonChart } from "@/components/Charts/SchoolComparisonChart";

const performanceData = [
  {
    school: "Riverside Elementary",
    avgScore: 85.2,
    trend: "up",
    change: "+4.5%",
    icon: TrendingUp,
    status: "improving"
  },
  {
    school: "Oak Middle School",
    avgScore: 78.9,
    trend: "down",
    change: "-2.1%",
    icon: TrendingDown,
    status: "declining"
  },
  {
    school: "Central High School",
    avgScore: 82.7,
    trend: "up",
    change: "+1.8%",
    icon: TrendingUp,
    status: "improving"
  },
  {
    school: "Lincoln Elementary",
    avgScore: 88.4,
    trend: "up",
    change: "+3.2%",
    icon: Award,
    status: "top-performer"
  }
];

export const SchoolAnalytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">School Analytics</h1>
          <p className="text-muted-foreground">Comprehensive analysis of school performance</p>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select time period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Time</SelectItem>
            <SelectItem value="year">This Year</SelectItem>
            <SelectItem value="semester">This Semester</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* School Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceData.map((school) => {
          const Icon = school.icon;
          const isImproving = school.status === "improving" || school.status === "top-performer";
          
          return (
            <Card key={school.school} className="bg-gradient-card shadow-soft border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {school.school}
                </CardTitle>
                <div className={`p-2 rounded-lg ${
                  school.status === "top-performer" 
                    ? "bg-gradient-success" 
                    : isImproving 
                      ? "bg-gradient-primary" 
                      : "bg-destructive"
                }`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{school.avgScore}%</div>
                <p className={`text-xs ${
                  isImproving ? "text-success" : "text-destructive"
                }`}>
                  {school.change} from last period
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card shadow-soft border-0">
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart />
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-soft border-0">
          <CardHeader>
            <CardTitle>Subject-wise Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <SubjectAnalysisChart />
          </CardContent>
        </Card>
      </div>

      {/* School Comparison */}
      <Card className="bg-gradient-card shadow-soft border-0">
        <CardHeader>
          <CardTitle>School Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <SchoolComparisonChart />
        </CardContent>
      </Card>
    </div>
  );
};