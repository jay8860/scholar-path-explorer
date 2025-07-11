import { BarChart3, Users, FileSpreadsheet, TrendingUp, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeView: string;
  onViewChange: (view: "dashboard" | "students" | "test-entry" | "analytics") => void;
}

const navigation = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "students", label: "Student Management", icon: Users },
  { id: "test-entry", label: "Test Score Entry", icon: FileSpreadsheet },
  { id: "analytics", label: "School Analytics", icon: TrendingUp },
];

export const Sidebar = ({ activeView, onViewChange }: SidebarProps) => {
  return (
    <div className="w-64 bg-card border-r border-border shadow-soft">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">EduTracker</h1>
            <p className="text-sm text-muted-foreground">District Management</p>
          </div>
        </div>
      </div>
      
      <nav className="p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as any)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                isActive
                  ? "bg-gradient-primary text-white shadow-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};