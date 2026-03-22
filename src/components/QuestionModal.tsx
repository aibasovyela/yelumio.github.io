import { useState } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/i18n/LanguageContext";

interface QuestionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const QuestionModal = ({ open, onOpenChange }: QuestionModalProps) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !phone.trim() || !question.trim()) {
      toast({ title: t.questionModal.fillAll, description: t.questionModal.fillAllDesc, variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-to-telegram", {
        body: { type: "question", email, phone, question },
      });

      if (error) throw error;

      toast({ title: t.questionModal.success, description: t.questionModal.successDesc });
      setEmail("");
      setPhone("");
      setQuestion("");
      onOpenChange(false);
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      toast({ title: t.questionModal.error, description: t.questionModal.errorDesc, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t.questionModal.title}</DialogTitle>
          <DialogDescription>{t.questionModal.description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email">{t.questionModal.emailLabel}</Label>
            <Input id="email" type="email" placeholder={t.questionModal.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{t.questionModal.phoneLabel}</Label>
            <Input id="phone" type="tel" placeholder={t.questionModal.phonePlaceholder} value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="question">{t.questionModal.questionLabel}</Label>
            <Textarea id="question" placeholder={t.questionModal.questionPlaceholder} value={question} onChange={(e) => setQuestion(e.target.value)} rows={4} required />
          </div>

          <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
            {isSubmitting ? t.questionModal.submitting : t.questionModal.submitBtn}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
