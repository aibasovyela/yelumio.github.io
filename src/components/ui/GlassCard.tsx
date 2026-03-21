import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "light";
}

export const GlassCard = ({
  children,
  className,
  hover = true,
  variant = "default"
}: GlassCardProps) => {
  return (
    <div className={cn(
      "rounded-xl p-6 md:p-8 border border-border bg-card text-card-foreground transition-all duration-300",
      hover && "hover:border-primary/20 hover:shadow-[0_0_30px_hsl(var(--primary)/0.06)]",
      className
    )}>
      {children}
    </div>
  );
};
