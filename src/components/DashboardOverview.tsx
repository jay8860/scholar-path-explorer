import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, School, TrendingUp, Award } from "lucide-react";
import { OverviewChart } from "@/components/Charts/OverviewChart";
import { RecentTestsTable } from "@/components/Tables/RecentTestsTable";

const stats = [
  {
    title: "Total Students",
    value: "2,847",
    change: "+12% from last month",
    icon: Users,
    trend: "up"
  },
  {
    title: "Schools",
    value: "24",
    change: "Active in district",
    icon: School,
    trend: "stable"
  },
  {
    title: "Avg. Performance",
    value: "78.5%",
    change: "+3.2% improvement",
    icon: TrendingUp,
    trend: "up"
  },
  {
    title: "Top Performers",
    value: "342",
    change: "Students above 90%",
    icon: Award,
    trend: "up"
  }
];

export const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">District Dashboard</h1>
        <p className="text-muted-foreground">Overview of academic performance across all schools</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="bg-gradient-card shadow-soft border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className={`text-xs ${
                  stat.trend === "up" ? "text-success" : "text-muted-foreground"
                }`}>
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card shadow-soft border-0">
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <OverviewChart />
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-soft border-0">
          <CardHeader>
            <CardTitle>Recent Test Results</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentTestsTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};