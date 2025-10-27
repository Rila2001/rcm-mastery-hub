interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  delay?: string;
}

export const ProcessCard = ({ number, title, description, delay = "" }: ProcessCardProps) => {
  return (
    <div 
      className={`relative p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 animate-fade-in-up ${delay}`}
    >
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center shadow-lg">
        <span className="text-xl font-bold text-primary-foreground">{number}</span>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl" />
    </div>
  );
};
