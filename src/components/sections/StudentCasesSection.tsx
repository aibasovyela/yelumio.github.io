import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { ExternalLink } from "lucide-react";

interface CaseItem {
  brand: string;
  category: string;
  description: string;
  result: string;
  mediaSrc: string;
}

const cases: CaseItem[] = [
  {
    brand: "Sontery",
    category: "AI-визуалы для продукта",
    description: "Сцены для матрасов и товаров сна: чистый свет, премиальная подача, быстрые варианты под рекламные форматы.",
    result: "Продуктовые кадры без аренды студии и сложного продакшна.",
    mediaSrc: "/brands/sontery.svg",
  },
  {
    brand: "RUMI Catering",
    category: "Food & event creatives",
    description: "Визуальная упаковка кейтеринга: аппетитные сцены, настроение события и рекламные материалы для соцсетей.",
    result: "Быстрая генерация концептов для разных поводов и аудиторий.",
    mediaSrc: "/brands/rumi.svg",
  },
  {
    brand: "Shoqan",
    category: "Fashion visuals",
    description: "Креативы для fashion-подачи: кадры с атмосферой бренда, фокусом на форме, материале и визуальном сторителлинге.",
    result: "Контент, который выглядит как съёмка, но собирается быстрее.",
    mediaSrc: "/brands/shoqan.svg",
  },
  {
    brand: "DALA",
    category: "Brand storytelling",
    description: "Сценарии и визуальные направления для бренда: от идеи до кадров, которые можно адаптировать под рекламу.",
    result: "Единая эстетика для серии креативов и презентаций.",
    mediaSrc: "/brands/dala.svg",
  },
];

export const StudentCasesSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              То, чему мы учим — мы делаем сами
            </h2>
            <p className="text-lg text-muted-foreground">
              Наши работы
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {cases.map((item, idx) => (
            <ScrollReveal key={item.brand} delay={idx * 100}>
              <article className="rounded-2xl border border-border bg-card overflow-hidden h-full">
                <div className="min-h-[180px] bg-primary/5 border-b border-border flex items-center justify-center p-8">
                  <img src={item.mediaSrc} alt={`${item.brand} logo`} className="h-12 w-auto opacity-80" loading="lazy" />
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{item.brand}</h3>
                    <p className="text-sm text-primary font-medium mt-1">{item.category}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  <div className="flex items-start gap-2 text-sm text-foreground">
                    <ExternalLink size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{item.result}</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={250}>
          <p className="text-center text-muted-foreground mt-10 max-w-3xl mx-auto">
            На курсе ты учишься у людей, которые делают это для брендов прямо сейчас.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
