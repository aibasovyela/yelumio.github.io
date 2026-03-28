import { Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const InstagramSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-[hsl(40_50%_88%)]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
          {/* Instagram Card */}
          <a
            href="https://www.instagram.com/yelumio/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-72 h-80 rounded-3xl overflow-hidden flex-shrink-0 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            style={{
              background: "linear-gradient(160deg, hsl(45 80% 50%), hsl(35 90% 45%), hsl(25 85% 40%))",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Instagram size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Наш Instagram</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Новости, кейсы учеников, бэкстейджи и полезные материалы
                </p>
              </div>
              <button className="w-full py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white font-semibold text-sm hover:bg-white/30 transition-colors border border-white/20">
                Подписывайтесь
              </button>
            </div>
          </a>

          {/* Text */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(240_6%_7%)] leading-tight">
              <span className="font-bold">Yelumio</span>{" "}
              <span className="text-[hsl(240_6%_7%/0.4)]">— следите за нами в Instagram</span>
            </h2>
            <p className="text-[hsl(240_6%_7%/0.6)] text-lg leading-relaxed max-w-md">
              Делимся процессом создания креативов, публикуем работы учеников и полезные гайды.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-[hsl(240_6%_7%)]">500+</p>
                <p className="text-sm text-[hsl(240_6%_7%/0.5)]">учеников</p>
              </div>
              <div className="w-px h-10 bg-[hsl(240_6%_7%/0.15)]" />
              <div>
                <p className="text-2xl font-bold text-[hsl(240_6%_7%)]">7</p>
                <p className="text-sm text-[hsl(240_6%_7%/0.5)]">модулей</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
