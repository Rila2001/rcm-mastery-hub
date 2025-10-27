import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: string;
}

export const StatCard = ({ icon: Icon, value, label, delay = "" }: StatCardProps) => {
  return (
    <div 
      className={`flex items-center gap-3 p-4 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up ${delay}`}
    >
      <div className="p-2 bg-primary/10 rounded-lg">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  );
};
