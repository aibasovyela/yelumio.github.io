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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(40_50%_88%)] text-[hsl(240_6%_7%)]">
        <div className="container relative z-10 pt-28 pb-20">
          <div className="flex flex-col items-center text-center space-y-8">
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(240_6%_7%)]">{t.hero.stream}</h2>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[hsl(48_100%_50%)] border border-[hsl(48_100%_40%)]">
                <span className="w-2 h-2 rounded-full bg-[hsl(240_6%_7%)]" />
                <span className="text-sm font-semibold tracking-widest uppercase text-[hsl(240_6%_7%)]">{t.hero.startDate}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] max-w-3xl">
              {t.hero.title}<span className="neon-underline">{t.hero.titleHighlight}</span>{t.hero.titleSub}
              <br />
              <span className="text-[hsl(240_6%_7%/0.6)]">От идеи до первой продажи.</span>
            </h1>

            <p className="text-lg text-white max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* Author photo - horizontal */}
            <div className="w-full max-w-2xl">
              <div className="relative p-3 rounded-2xl border border-[hsl(240_6%_7%/0.1)] bg-[hsl(240_6%_7%/0.08)] backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={authorPhoto}
                    alt="Автор курса"
                    className="w-full h-auto object-cover rounded-xl"
                    style={{ aspectRatio: "16/9", objectPosition: "top" }}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(48_100%_50%/0.2)] via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[hsl(240_6%_7%)] text-[hsl(48_100%_50%)] font-semibold text-base hover:bg-[hsl(240_6%_7%/0.85)] transition-colors"
                onClick={() => setIsEnrollOpen(true)}
              >
                {t.hero.enrollBtn}
                <ArrowRight size={18} />
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-[hsl(240_6%_7%/0.3)] text-[hsl(240_6%_7%)] font-semibold text-base hover:bg-[hsl(240_6%_7%/0.08)] transition-colors"
                onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play size={18} />
                {t.hero.programBtn}
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-[hsl(240_6%_7%/0.3)] text-[hsl(240_6%_7%)] font-semibold text-base hover:bg-[hsl(240_6%_7%/0.08)] transition-colors"
                onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <GraduationCap size={18} />
                {t.hero.studentWorksBtn}
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-[hsl(240_6%_7%/0.3)] text-[hsl(240_6%_7%)] font-semibold text-base hover:bg-[hsl(240_6%_7%/0.08)] transition-colors"
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
