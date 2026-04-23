import { ArrowRight, Play, GraduationCap, HelpCircle } from "lucide-react";
import { useState } from "react";
import { EnrollModal } from "@/components/EnrollModal";
import { useLanguage } from "@/i18n/LanguageContext";

import authorPhoto from "@/assets/author-photo.png";

export const HeroSection = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background text-foreground">
        {/* Cinema Noir vignette + warm gold radial */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, hsl(38 60% 40% / 0.18) 0%, transparent 55%), radial-gradient(ellipse at 50% 100%, hsl(0 0% 0% / 0.6) 0%, transparent 60%)",
          }}
        />
        {/* Subtle film grain via repeating gradient */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, hsl(38 60% 56%) 0, hsl(38 60% 56%) 1px, transparent 1px, transparent 3px)",
          }}
        />

        <div className="container relative z-10 pt-28 pb-20">
          <div className="flex flex-col items-center text-center space-y-8">

            <div className="space-y-4">
              <p className="mono-label">{t.hero.stream}</p>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold tracking-widest uppercase text-primary" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t.hero.startDate}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] max-w-3xl text-foreground">
              {t.hero.title}<span className="neon-underline text-gradient">{t.hero.titleHighlight}</span>{t.hero.titleSub}
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* Author photo - cinema frame */}
            <div className="w-full max-w-2xl">
              <div className="relative p-3 rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-xl shadow-[0_8px_40px_hsl(0_0%_0%/0.5)]">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={authorPhoto}
                    alt="Автор курса"
                    className="w-full h-auto object-cover rounded-xl"
                    style={{ aspectRatio: "21/9", objectPosition: "top" }}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                  {/* Cinematic letterbox + warm tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/30" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 mix-blend-overlay" />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 flex-wrap justify-center">
              <button
                className="btn-primary gap-2"
                onClick={() => setIsEnrollOpen(true)}
              >
                {t.hero.enrollBtn}
                <ArrowRight size={18} />
              </button>
              <button
                className="btn-secondary gap-2"
                onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play size={18} />
                {t.hero.programBtn}
              </button>
              <button
                className="btn-secondary gap-2"
                onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <GraduationCap size={18} />
                {t.hero.studentWorksBtn}
              </button>
              <button
                className="btn-secondary gap-2"
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <HelpCircle size={18} />
                {t.hero.questionsBtn}
              </button>
            </div>
          </div>
        </div>
      </section>

      <EnrollModal open={isEnrollOpen} onOpenChange={setIsEnrollOpen} />
    </>
  );
};
