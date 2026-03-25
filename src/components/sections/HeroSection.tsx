import { ArrowRight, Play, Lightbulb, Camera, Video, Music, Mic } from "lucide-react";
import { useState } from "react";
import { EnrollModal } from "@/components/EnrollModal";
import { useLanguage } from "@/i18n/LanguageContext";

import authorPhoto from "@/assets/author-photo.png";
import yelumioLogo from "@/assets/yelumio-logo.png";

export const HeroSection = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(48_80%_35%)] text-[hsl(240_6%_7%)]">
        <div className="container relative z-10 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <img 
                  src={yelumioLogo} 
                  alt="Yelumio" 
                  className="h-20 md:h-28 w-auto object-contain"
                  loading="eager"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-[hsl(240_6%_7%)]">{t.hero.stream}</h2>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[hsl(240_6%_7%/0.1)] border border-[hsl(240_6%_7%/0.2)]">
                  <span className="w-2 h-2 rounded-full bg-[hsl(240_6%_7%)]" />
                  <span className="text-sm font-semibold tracking-widest uppercase text-[hsl(240_6%_7%)]">{t.hero.startDate}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15]">
                {t.hero.title}<span className="neon-underline">{t.hero.titleHighlight}</span>{t.hero.titleSub}
                <br />
                <span className="text-[hsl(240_6%_7%/0.6)]">От идеи до первой продажи.</span>
              </h1>

              <p className="text-lg text-[hsl(240_6%_7%/0.8)] max-w-xl leading-relaxed">
                {t.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[hsl(240_6%_7%)] text-[hsl(48_100%_50%)] font-semibold text-base hover:bg-[hsl(240_6%_7%/0.85)] transition-colors" onClick={() => setIsEnrollOpen(true)}>
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
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-[hsl(240_6%_7%/0.05)] rounded-full blur-[100px]" />
              </div>
              
              <div className="relative">
                <div className="cursor-pointer">
                  <div className="relative p-3 rounded-2xl border border-[hsl(240_6%_7%/0.1)] bg-[hsl(240_6%_7%/0.08)] backdrop-blur-xl">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={authorPhoto} 
                        alt="Автор курса" 
                        className="w-full max-w-[280px] md:max-w-xs h-auto object-cover rounded-xl"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(48_100%_50%/0.3)] via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 p-3 rounded-xl bg-[hsl(0_0%_100%/0.7)] backdrop-blur-xl border border-[hsl(240_6%_7%/0.08)] shadow-lg">
                  <div className="flex items-center gap-2">
                    <Lightbulb size={18} className="text-[hsl(240_6%_7%)]" strokeWidth={1.5} />
                    <span className="text-xs font-semibold tracking-wide text-[hsl(240_6%_7%)]">{t.hero.idea}</span>
                  </div>
                </div>

                <div className="absolute top-1/4 -right-6 p-3 rounded-xl bg-[hsl(0_0%_100%/0.7)] backdrop-blur-xl border border-[hsl(240_6%_7%/0.08)] shadow-lg">
                  <div className="flex items-center gap-2">
                    <Camera size={18} className="text-[hsl(240_6%_7%)]" strokeWidth={1.5} />
                    <span className="text-xs font-semibold tracking-wide text-[hsl(240_6%_7%)]">{t.hero.photo}</span>
                  </div>
                </div>

                <div className="absolute bottom-1/3 -left-8 p-3 rounded-xl bg-[hsl(0_0%_100%/0.7)] backdrop-blur-xl border border-[hsl(240_6%_7%/0.08)] shadow-lg">
                  <div className="flex items-center gap-2">
                    <Video size={18} className="text-[hsl(240_6%_7%)]" strokeWidth={1.5} />
                    <span className="text-xs font-semibold tracking-wide text-[hsl(240_6%_7%)]">{t.hero.video}</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 right-1/4 p-3 rounded-xl bg-[hsl(0_0%_100%/0.7)] backdrop-blur-xl border border-[hsl(240_6%_7%/0.08)] shadow-lg">
                  <div className="flex items-center gap-2">
                    <Music size={18} className="text-[hsl(240_6%_7%)]" strokeWidth={1.5} />
                    <span className="text-xs font-semibold tracking-wide text-[hsl(240_6%_7%)]">{t.hero.sound}</span>
                  </div>
                </div>

                <div className="absolute bottom-1/4 -right-4 p-3 rounded-xl bg-[hsl(0_0%_100%/0.7)] backdrop-blur-xl border border-[hsl(240_6%_7%/0.08)] shadow-lg">
                  <div className="flex items-center gap-2">
                    <Mic size={18} className="text-[hsl(240_6%_7%)]" strokeWidth={1.5} />
                    <span className="text-xs font-semibold tracking-wide text-[hsl(240_6%_7%)]">{t.hero.speech}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnrollModal open={isEnrollOpen} onOpenChange={setIsEnrollOpen} />
    </>
  );
};
