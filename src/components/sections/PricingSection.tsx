import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Check, Star, Users, Video, FileText, MessageCircle, Zap, Briefcase, Sparkles, Crown } from "lucide-react";
import { useState } from "react";
import { PricingEnrollModal } from "@/components/PricingEnrollModal";
import { useLanguage } from "@/i18n/LanguageContext";
import kaspiBadge from "@/assets/kaspi_badge.png";

const lightIcons = [Video, Zap, FileText];
const basicIcons = [Video, Zap, FileText, Check, Check, MessageCircle];
const proIcons = [Check, Star, Users, Zap, Check, MessageCircle, Star];
const eliteIcons = [Check, Briefcase, Sparkles, Zap, Star, Crown];

export const PricingSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: "" });
  const { t } = useLanguage();

  const openModal = (name: string, price: string) => {
    setSelectedPlan({ name, price });
    setModalOpen(true);
  };

  return (
    <>
      <section className="section-padding">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {t.pricing.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.pricing.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-start pt-6">
            {/* Light */}
            <ScrollReveal delay={100}>
              <GlassCard className="p-6 md:p-8 space-y-6" hover={false}>
                <div>
                  <h3 className="text-2xl font-bold">Light</h3>
                </div>
                <ul className="space-y-3">
                  {t.pricing.light.features.map((text, i) => {
                    const Icon = lightIcons[i];
                    return (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                          <Icon size={12} className="text-primary" />
                        </div>
                        <span className="text-sm">{text}</span>
                      </li>
                    );
                  })}
                </ul>
                <button className="btn-secondary w-full" onClick={() => openModal("Light", "50 000")}>
                  {t.pricing.choosePlan} Light
                </button>
              </GlassCard>
            </ScrollReveal>

            {/* Basic */}
            <ScrollReveal delay={150}>
              <GlassCard className="p-6 md:p-8 space-y-6" hover={false}>
                <div>
                  <h3 className="text-2xl font-bold">Basic</h3>
                </div>
                <ul className="space-y-3">
                  {t.pricing.basic.features.map((text, i) => {
                    const Icon = basicIcons[i];
                    return (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                          <Icon size={12} className="text-primary" />
                        </div>
                        <span className="text-sm">{text}</span>
                      </li>
                    );
                  })}
                </ul>
                <button className="btn-secondary w-full" onClick={() => openModal("Basic", "70 000")}>
                  {t.pricing.choosePlan} Basic
                </button>
              </GlassCard>
            </ScrollReveal>

            {/* Pro */}
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl blur-lg opacity-50" style={{ background: "linear-gradient(160deg, hsl(45 80% 50% / 0.3), hsl(35 90% 45% / 0.2), hsl(25 85% 40% / 0.1))" }} />
                <div className="absolute -top-4 right-6 z-10">
                  <span className="rounded-full bg-primary text-primary-foreground font-semibold text-sm px-3 py-1">
                    {t.pricing.recommend}
                  </span>
                </div>
                <GlassCard className="relative p-6 md:p-8 space-y-6 border-primary/30">
                  <div>
                    <h3 className="text-2xl font-bold">PRO / Mentor</h3>
                    <p className="text-sm text-primary font-medium mt-1">{t.pricing.maxResult}</p>
                  </div>
                  <ul className="space-y-3">
                    {t.pricing.pro.features.map((text, i) => {
                      const Icon = proIcons[i];
                      const boldPro = [3, 5]; // "Разбор каждого креатива", "Ответы на вопросы вживую"
                      return (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Icon size={12} className="text-primary" />
                          </div>
                          <span className={`text-sm ${boldPro.includes(i) ? 'font-bold' : ''}`}>{text}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <button className="btn-primary w-full" onClick={() => openModal("PRO / Mentor", "120 000")}>
                    {t.pricing.choosePlan} PRO
                  </button>
                  <p className="text-xs text-center text-muted-foreground">
                    {t.pricing.proFooter}
                  </p>
                </GlassCard>
              </div>
            </ScrollReveal>

            {/* Elite */}
            <ScrollReveal delay={300}>
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl blur-lg opacity-40 transition-opacity duration-300 group-hover:opacity-70" style={{ background: "linear-gradient(160deg, hsl(45 80% 50% / 0.2), hsl(35 90% 45% / 0.15), hsl(25 85% 40% / 0.05))" }} />
                <div className="absolute -top-4 right-6 z-10">
                  <span className="rounded-full bg-primary text-primary-foreground font-semibold text-sm px-3 py-1">
                    {t.pricing.premium}
                  </span>
                </div>
                <GlassCard className="relative p-6 md:p-8 space-y-6 border-primary/20" hover={false}>
                  <div>
                    <h3 className="text-2xl font-bold">ELITE / Studio</h3>
                    <p className="text-sm text-primary font-medium mt-1">{t.pricing.studioWork}</p>
                  </div>

                  <div className="text-sm text-muted-foreground italic border-l-2 border-primary/40 pl-3">
                    {t.pricing.studioDesc}
                  </div>

                  <ul className="space-y-3">
                    {t.pricing.elite.features.map((text, i) => {
                      const Icon = eliteIcons[i];
                      const sub = t.pricing.elite.subs[i];
                      const boldElite = [1, 4]; // "1 реальный платный заказ...", "Приоритетная обратная связь"
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon size={12} className="text-primary" />
                          </div>
                          <div>
                            <span className={`text-sm ${boldElite.includes(i) ? 'font-bold' : ''}`}>{text}</span>
                            {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <button 
                    className="btn-primary w-full"
                    onClick={() => openModal("ELITE / Studio", "200 000")}
                  >
                    {t.pricing.choosePlan} ELITE
                  </button>

                  <p className="text-xs text-center text-muted-foreground">{t.pricing.studioFooter}</p>
                </GlassCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <PricingEnrollModal open={modalOpen} onOpenChange={setModalOpen} planName={selectedPlan.name} planPrice={selectedPlan.price} />
    </>
  );
};
