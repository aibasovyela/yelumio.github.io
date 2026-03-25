export const GlassBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, hsl(48 100% 50% / 0.04) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, hsl(48 100% 50% / 0.03) 0%, transparent 50%)",
        }}
      />
    </div>
  );
};
