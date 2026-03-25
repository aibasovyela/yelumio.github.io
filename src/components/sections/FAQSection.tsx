import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { EnrollModal } from "@/components/EnrollModal";
import { QuestionModal } from "@/components/QuestionModal";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export const FAQSection = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <section id="faq" className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div className="space-y-8 lg:sticky lg:top-24">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  {t.faq.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t.faq.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary gap-2" onClick={() => setIsEnrollOpen(true)}>
                    {t.faq.enrollBtn}
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn-secondary gap-2" onClick={() => setIsQuestionOpen(true)}>
                    <MessageCircle size={18} />
                    {t.faq.questionBtn}
                  </button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <Accordion type="single" collapsible className="space-y-3">
                {t.faq.items.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="rounded-2xl px-6 border bg-[hsl(240_6%_10%)] border-[hsl(0_0%_100%/0.08)] shadow-[0_4px_24px_hsl(0_0%_0%/0.15)] text-white data-[state=open]:border-primary/25 data-[state=open]:shadow-[0_8px_40px_hsl(48_100%_50%/0.1)] transition-all duration-300"
                  >
                    <AccordionTrigger className="hover:no-underline py-5 text-left">
                      <span className="font-semibold pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <EnrollModal open={isEnrollOpen} onOpenChange={setIsEnrollOpen} />
      <QuestionModal open={isQuestionOpen} onOpenChange={setIsQuestionOpen} />
    </>
  );
};
