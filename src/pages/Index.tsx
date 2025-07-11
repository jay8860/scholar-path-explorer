import { useState } from "react";
import { DashboardOverview } from "@/components/DashboardOverview";
import { StudentManagement } from "@/components/StudentManagement";
import { TestScoreEntry } from "@/components/TestScoreEntry";
import { SchoolAnalytics } from "@/components/SchoolAnalytics";
import { Sidebar } from "@/components/Navigation/Sidebar";
import { Header } from "@/components/Navigation/Header";

type ActiveView = "dashboard" | "students" | "test-entry" | "analytics";

const Index = () => {
  const [activeView, setActiveView] = useState<ActiveView>("dashboard");

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <DashboardOverview />;
      case "students":
        return <StudentManagement />;
      case "test-entry":
        return <TestScoreEntry />;
      case "analytics":
        return <SchoolAnalytics />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar activeView={activeView} onViewChange={setActiveView} />
        <div className="flex-1">
          <Header />
          <main className="p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
