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
      "bg-[hsl(0_0%_100%/0.7)] backdrop-blur-2xl border border-[hsl(240_6%_10%/0.08)]",
      "shadow-[0_4px_24px_hsl(240_6%_10%/0.06),inset_0_1px_0_hsl(0_0%_100%/0.5)]",
      hover && "hover:border-primary/30 hover:shadow-[0_8px_32px_hsl(48_100%_50%/0.12),inset_0_1px_0_hsl(0_0%_100%/0.6)] hover:-translate-y-1",
      className
    )}>
      {/* Top shine line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(0_0%_100%/0.6)] to-transparent" />
      {/* Inner subtle glow */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
        background: "linear-gradient(135deg, hsl(0 0% 100% / 0.3) 0%, transparent 50%, hsl(48 100% 50% / 0.02) 100%)"
      }} />
      {children}
    </div>
  );
};
