import { useEffect, useRef } from "react";

/**
 * Full-page fixed background with abstract yellow orbs/shapes
 * that smoothly translate on scroll (parallax).
 */
export const GlassBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const y = window.scrollY;
      const children = containerRef.current.children;
      // Each child moves at a different parallax rate
      for (let i = 0; i < children.length; i++) {
        const el = children[i] as HTMLElement;
        const speed = parseFloat(el.dataset.speed || "0.05");
        const direction = i % 2 === 0 ? 1 : -1;
        const translateY = y * speed * direction;
        const translateX = y * speed * 0.3 * (i % 3 === 0 ? 1 : -1);
        el.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" ref={containerRef}>
      {/* Large orb — top right */}
      <div
        data-speed="0.03"
        className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(48 100% 50% / 0.35) 0%, hsl(48 100% 50% / 0.08) 50%, transparent 70%)",
        }}
      />

      {/* Medium orb — left center */}
      <div
        data-speed="0.06"
        className="absolute top-[30%] -left-32 w-[500px] h-[500px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(42 90% 50% / 0.3) 0%, hsl(48 100% 50% / 0.05) 60%, transparent 75%)",
        }}
      />

      {/* Small orb — center */}
      <div
        data-speed="0.08"
        className="absolute top-[55%] left-[45%] w-[350px] h-[350px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(48 100% 55% / 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Tiny accent — bottom right */}
      <div
        data-speed="0.1"
        className="absolute top-[75%] right-[10%] w-[250px] h-[250px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(45 100% 50% / 0.35) 0%, transparent 65%)",
        }}
      />

      {/* Extra orb — bottom left */}
      <div
        data-speed="0.04"
        className="absolute top-[90%] -left-10 w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(48 80% 55% / 0.25) 0%, transparent 70%)",
        }}
      />

      {/* Abstract elongated shape — top left */}
      <div
        data-speed="0.07"
        className="absolute top-[10%] left-[20%] w-[200px] h-[400px] rounded-[50%] opacity-10 rotate-45"
        style={{
          background: "radial-gradient(ellipse, hsl(48 100% 50% / 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Ring shape — right middle */}
      <div
        data-speed="0.05"
        className="absolute top-[45%] right-[5%] w-[300px] h-[300px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, transparent 40%, hsl(48 100% 50% / 0.15) 50%, transparent 60%)",
        }}
      />
    </div>
  );
};
