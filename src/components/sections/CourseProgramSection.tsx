import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Pencil, CheckCircle, Lightbulb, MessageSquareText, Camera, Video, Music, Package, Briefcase } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

const moduleIcons = [Lightbulb, MessageSquareText, Camera, Video, Music, Package, Briefcase];
const moduleNumbers = ["01", "02", "03", "04", "05", "06", "07"];

export const CourseProgramSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {t.courseProgram.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  <AccordionItem key={index} value={`module-${index}`} className="rounded-2xl px-6 border bg-[hsl(240_6%_10%)] border-[hsl(0_0%_100%/0.08)] shadow-[0_4px_24px_hsl(0_0%_0%/0.15)] text-white data-[state=open]:border-primary/25 data-[state=open]:shadow-[0_8px_40px_hsl(48_100%_50%/0.1)] transition-all duration-300">
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent size={22} className="text-primary" strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">{t.courseProgram.moduleLabel} {moduleNumbers[index]}</span>
                          <p className="text-lg font-semibold">{module.title}</p>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="pb-6">
                      <div className="space-y-6 pt-2">
                        <p className="text-sm text-muted-foreground italic">{module.description}</p>

                        <div className="flex items-start gap-3">
                          <BookOpen size={18} className="text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-semibold uppercase text-muted-foreground mb-2 tracking-wide">{t.courseProgram.whatYouLearn}</p>
                            <ul className="space-y-1.5">
                              {module.learn.map((item, i) => (
                                <li key={i} className="text-sm flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle size={18} className="text-primary mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-xs font-semibold uppercase text-muted-foreground mb-1 tracking-wide">{t.courseProgram.result}</p>
                              <p className="text-sm">{module.result}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Pencil size={18} className="text-primary mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-xs font-semibold uppercase text-muted-foreground mb-1 tracking-wide">{t.courseProgram.homework}</p>
                              <ul className="space-y-1">
                                {module.homework.map((item, i) => (
                                  <li key={i} className="text-sm flex items-start gap-2">
                                    <span className="text-primary">–</span>
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
