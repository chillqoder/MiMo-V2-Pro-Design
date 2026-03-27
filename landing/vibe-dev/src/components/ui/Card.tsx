import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card/50 p-6",
        hover &&
          "transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(204,255,0,0.05)]",
        className
      )}
    >
      {children}
    </div>
  );
}
