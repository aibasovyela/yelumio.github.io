import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { ImageIcon } from "lucide-react";

interface CaseItem {
  name: string;
  role: string;
  description: string;
  mediaSrc?: string;
  mediaType?: "image" | "video";
}

const cases: CaseItem[] = [
  {
    name: "Айгерим",
    role: "Маркетолог",
    description:
      "Внедрила ИИ в работу с клиентами: создаёт креативы и видео для рекламных кампаний за 1-2 часа вместо нескольких дней. Закрывает больше проектов и зарабатывает в 2 раза больше.",
  },
  {
    name: "Камила",
    role: "Мама в декрете",
    description:
      "Начала с нуля без опыта в дизайне. Сейчас делает рилсы для локальных брендов прямо из дома, пока ребёнок спит. Первые заказы окупили курс за 2 недели.",
  },
  {
    name: "Дамир",
    role: "Мобилограф / SMM-специалист",
    description:
      "Добавил ИИ-инструменты к своим услугам: видеогенерация, обработка, цифровые аватары. Поднял средний чек в 3 раза и теперь работает с премиум-клиентами.",
  },
];

export const StudentCasesSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Наши ученики
            </h2>
            <p className="text-lg text-muted-foreground">
              Это обучение для вас, если вы не знаете с чего начать
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6 max-w-5xl mx-auto">
          {cases.map((item, idx) => (
            <ScrollReveal key={idx}>
              <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  {/* Text content */}
                  <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center space-y-3">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {item.name}
                      </h3>
                      <p className="text-sm text-primary font-medium mt-1">
                        {item.role}
                      </p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Media placeholder */}
                  <div className="md:col-span-2 bg-secondary/40 min-h-[220px] md:min-h-[260px] flex items-center justify-center border-t md:border-t-0 md:border-l border-border">
                    {item.mediaSrc ? (
                      item.mediaType === "video" ? (
                        <video
                          src={item.mediaSrc}
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <img
                          src={item.mediaSrc}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      )
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
                        <ImageIcon size={36} strokeWidth={1.5} />
                        <span className="text-xs">Фото / видео</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
