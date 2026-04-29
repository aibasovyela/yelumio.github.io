import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { COURSE_CONFIG } from "@/config/courseConfig";
import { trackEvent } from "@/lib/analytics";

export const StickyCTA = () => {
  const [visible, setVisible] = useState(false);
  const { t, language } = useLanguage();
  const nextStreamDate = new Intl.DateTimeFormat(language === "kz" ? "kk-KZ" : language === "en" ? "en-US" : "ru-RU", { day: "numeric", month: "long" }).format(new Date(COURSE_CONFIG.nextStreamDate));

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-background/90 backdrop-blur-2xl border-t border-border py-3 px-4">
          <div className="container flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-foreground">{t.stickyCta.startDate} {nextStreamDate}</p>
              <p className="text-xs text-muted-foreground">{t.stickyCta.limited}</p>
            </div>
            <button
              className="btn-primary gap-2 whitespace-nowrap ml-auto"
              onClick={() => { trackEvent('enroll_click', { location: 'sticky_cta' }); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              {t.stickyCta.enrollBtn}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
