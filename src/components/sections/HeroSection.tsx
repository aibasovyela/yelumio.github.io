import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { COURSE_CONFIG } from "@/config/courseConfig";
import { trackEvent } from "@/lib/analytics";

import authorPhoto from "@/assets/author-photo.png";
import authorPhotoWebp from "@/assets/author-photo.webp";

const trustedBrands = ["Sontery", "Kaspi", "RUMI", "DALA", "Shoqan"];

export const HeroSection = () => {
  const { t, language } = useLanguage();
  const nextStreamDate = new Intl.DateTimeFormat(language === "kz" ? "kk-KZ" : language === "en" ? "en-US" : "ru-RU", {
    day: "numeric",
    month: "long",
  }).format(new Date(COURSE_CONFIG.nextStreamDate));

  const scrollToPricing = () => {
    trackEvent("enroll_click", { location: "hero" });
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background text-foreground">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, hsl(38 60% 40% / 0.18) 0%, transparent 55%), radial-gradient(ellipse at 50% 100%, hsl(0 0% 0% / 0.6) 0%, transparent 60%)",
        }}
      />
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
            <p className="mono-label">{t.hero.stream} {COURSE_CONFIG.streamNumber}</p>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-semibold tracking-widest uppercase text-primary" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {t.hero.startDate} {nextStreamDate}
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] max-w-3xl text-foreground">
            {t.hero.title}<span className="neon-underline text-gradient">{t.hero.titleHighlight}</span>{t.hero.titleSub}
          </h1>

          <div className="space-y-3 max-w-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">{t.hero.description}</p>
            <p className="text-sm text-muted-foreground/80">{t.hero.audience}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 w-full max-w-4xl text-left">
            {t.hero.valueBullets.map((bullet) => (
              <div key={bullet} className="rounded-xl border border-primary/20 bg-card/50 px-4 py-3 text-sm text-foreground/90 backdrop-blur-md">
                {bullet}
              </div>
            ))}
          </div>

          <div className="w-full max-w-2xl">
            <div className="relative p-3 rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-xl shadow-[0_8px_40px_hsl(0_0%_0%/0.5)]">
              <div className="relative overflow-hidden rounded-xl">
                <picture>
                  <source srcSet={authorPhotoWebp} type="image/webp" />
                  <img
                    src={authorPhoto}
                    alt="Автор курса"
                    className="w-full h-auto object-cover rounded-xl"
                    style={{ aspectRatio: "21/9", objectPosition: "top" }}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 mix-blend-overlay" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-primary/60">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">{t.hero.trustedBy}</span>
            {trustedBrands.map((brand) => (
              <span key={brand} className="mono-label text-primary/70">{brand}</span>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 pt-2">
            <button className="btn-primary gap-2 px-8 py-4 text-base" onClick={scrollToPricing}>
              {t.hero.enrollBtn}
              <ArrowRight size={18} />
            </button>
            <button
              className="text-sm text-primary hover:text-foreground transition-colors"
              onClick={() => document.getElementById("program")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.hero.programBtn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
