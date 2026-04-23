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
      "relative overflow-hidden rounded-2xl p-6 md:p-8 text-card-foreground transition-all duration-400",
      "bg-card/60 backdrop-blur-2xl border border-border",
      "shadow-[0_4px_24px_hsl(0_0%_0%/0.5),inset_0_1px_0_hsl(38_60%_56%/0.08)]",
      hover && "hover:border-primary/40 hover:shadow-[0_8px_32px_hsl(38_60%_56%/0.2),inset_0_1px_0_hsl(38_60%_56%/0.15)] hover:-translate-y-1",
      className
    )}>
      {/* Top shine line — gold */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      {/* Inner subtle glow */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
        background: "linear-gradient(135deg, hsl(38 60% 56% / 0.06) 0%, transparent 50%, hsl(38 60% 56% / 0.03) 100%)"
      }} />
      {children}
    </div>
  );
};
