import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, delay = "" }: FeatureCardProps) => {
  return (
    <div 
      className={`p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105 animate-fade-in-up ${delay}`}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};
