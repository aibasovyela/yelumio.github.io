import { Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const InstagramSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
          {/* Instagram Card — gold gradient */}
          <a
            href="https://www.instagram.com/yelumio/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-72 h-80 rounded-3xl overflow-hidden flex-shrink-0 shadow-[0_8px_40px_hsl(0_0%_0%/0.6)] hover:shadow-[0_12px_50px_hsl(38_60%_56%/0.35)] transition-shadow duration-300"
            style={{
              background: "linear-gradient(160deg, hsl(42 70% 62%), hsl(38 65% 54%), hsl(28 55% 38%))",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Instagram size={24} className="text-[hsl(18_30%_8%)]" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(18_30%_8%)] mb-2">Наш Instagram</h3>
                <p className="text-[hsl(18_30%_8%)]/80 text-sm leading-relaxed">
                  Новости, кейсы учеников, бэкстейджи и полезные материалы
                </p>
              </div>
              <button className="w-full py-3 rounded-xl bg-[hsl(18_30%_8%)]/20 backdrop-blur-sm text-[hsl(18_30%_8%)] font-semibold text-sm hover:bg-[hsl(18_30%_8%)]/30 transition-colors border border-[hsl(18_30%_8%)]/20">
                Подписывайтесь
              </button>
            </div>
          </a>

          {/* Text */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              <span className="font-bold">Yelumio</span>{" "}
              <span className="text-muted-foreground">— следите за нами в Instagram</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Делимся процессом создания креативов, публикуем работы учеников и полезные гайды.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">учеников</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">25+</p>
                <p className="text-sm text-muted-foreground">реальных заказов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
