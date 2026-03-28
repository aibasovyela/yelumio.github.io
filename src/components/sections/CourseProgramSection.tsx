import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Pencil, CheckCircle, Lightbulb, MessageSquareText, Camera, Video, Music, Package, Briefcase } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

const moduleIcons = [Lightbulb, MessageSquareText, Camera, Video, Music, Package, Briefcase];
const moduleNumbers = ["01", "02", "03", "04", "05", "06", "07"];

export const CourseProgramSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-[hsl(45_80%_55%)]">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(240_6%_7%)]">
              {t.courseProgram.title}
            </h2>
            <p className="text-lg text-[hsl(240_6%_7%/0.7)] max-w-2xl mx-auto">
              {t.courseProgram.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {t.courseProgram.modules.map((module, index) => {
                const IconComponent = moduleIcons[index];
                return (
                  <AccordionItem key={index} value={`module-${index}`} className="rounded-2xl px-6 border bg-white border-[hsl(240_6%_7%/0.08)] shadow-[0_4px_24px_hsl(0_0%_0%/0.08)] text-[hsl(240_6%_7%)] data-[state=open]:border-[hsl(45_80%_40%)/0.4] data-[state=open]:shadow-[0_8px_40px_hsl(45_80%_55%/0.3)] transition-all duration-300">
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 rounded-xl bg-[hsl(45_80%_55%/0.15)] flex items-center justify-center flex-shrink-0">
                          <IconComponent size={22} className="text-[hsl(45_80%_40%)]" strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-[hsl(45_80%_40%)] uppercase tracking-wider">{t.courseProgram.moduleLabel} {moduleNumbers[index]}</span>
                          <p className="text-lg font-semibold text-[hsl(240_6%_7%)]">{module.title}</p>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="pb-6">
                      <div className="space-y-6 pt-2">
                        <p className="text-sm text-[hsl(240_6%_7%/0.6)] italic">{module.description}</p>

                        <div className="flex items-start gap-3">
                          <BookOpen size={18} className="text-[hsl(45_80%_40%)] mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-semibold uppercase text-[hsl(240_6%_7%/0.5)] mb-2 tracking-wide">{t.courseProgram.whatYouLearn}</p>
                            <ul className="space-y-1.5">
                              {module.learn.map((item, i) => (
                                <li key={i} className="text-sm flex items-start gap-2 text-[hsl(240_6%_7%)]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(45_80%_40%)] mt-2 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle size={18} className="text-[hsl(45_80%_40%)] mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-xs font-semibold uppercase text-[hsl(240_6%_7%/0.5)] mb-1 tracking-wide">{t.courseProgram.result}</p>
                              <p className="text-sm text-[hsl(240_6%_7%)]">{module.result}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Pencil size={18} className="text-[hsl(45_80%_40%)] mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-xs font-semibold uppercase text-[hsl(240_6%_7%/0.5)] mb-1 tracking-wide">{t.courseProgram.homework}</p>
                              <ul className="space-y-1">
                                {module.homework.map((item, i) => (
                                  <li key={i} className="text-sm flex items-start gap-2 text-[hsl(240_6%_7%)]">
                                    <span className="text-[hsl(45_80%_40%)]">–</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
