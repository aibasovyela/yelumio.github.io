import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { EnrollModal } from "@/components/EnrollModal";
import { useLanguage } from "@/i18n/LanguageContext";

export const StickyCTA = () => {
  const [visible, setVisible] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const { t } = useLanguage();

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
              <p className="text-sm font-semibold text-foreground">{t.stickyCta.startDate}</p>
              <p className="text-xs text-muted-foreground">{t.stickyCta.limited}</p>
            </div>
            <button
              className="btn-primary gap-2 whitespace-nowrap ml-auto"
              onClick={() => setIsEnrollOpen(true)}
            >
              {t.stickyCta.enrollBtn}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
      <EnrollModal open={isEnrollOpen} onOpenChange={setIsEnrollOpen} />
    </>
  );
};
