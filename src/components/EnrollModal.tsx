import { useState } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";

interface EnrollModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EnrollModal = ({ open, onOpenChange }: EnrollModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7");
  const [purpose, setPurpose] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentAccepted, setConsentAccepted] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consentAccepted) {
      toast({ title: t.enrollModal.consentRequired, variant: "destructive" });
      return;
    }

    if (!name.trim() || !phone.trim() || phone.trim() === "+7") {
      toast({
        title: t.enrollModal.fillAll,
        description: t.enrollModal.fillAllDesc,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-to-telegram", {
        body: { type: "enroll", name, contact: phone, purpose },
      });

      if (error) throw error;

      trackEvent("form_submit", { form: "enroll" });
      toast({ title: t.enrollModal.success, description: t.enrollModal.successDesc });
      setName("");
      setPhone("+7");
      setPurpose("");
      setConsentAccepted(false);
      onOpenChange(false);
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      toast({ title: t.enrollModal.error, description: t.enrollModal.errorDesc, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-xl border-primary/20 rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{t.enrollModal.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">{t.enrollModal.description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 py-4">
          <div className="space-y-2">
            <Label htmlFor="enroll-name">{t.enrollModal.nameLabel}</Label>
            <Input id="enroll-name" type="text" placeholder={t.enrollModal.namePlaceholder} value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="enroll-phone">{t.enrollModal.phoneLabel}</Label>
            <Input id="enroll-phone" type="tel" placeholder={t.enrollModal.phonePlaceholder} value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="enroll-purpose">{t.pricingModal.purposeLabel}</Label>
            <Textarea id="enroll-purpose" placeholder={t.pricingModal.purposePlaceholder} value={purpose} onChange={(e) => setPurpose(e.target.value)} className="resize-none" rows={3} />
          </div>

          <label className="flex items-start gap-3 text-xs text-muted-foreground">
            <input type="checkbox" checked={consentAccepted} onChange={(e) => setConsentAccepted(e.target.checked)} className="mt-0.5 accent-primary" required />
            <span>{t.enrollModal.consent} <Link to="/privacy" className="text-primary hover:text-foreground">/privacy</Link></span>
          </label>

          <button type="submit" className="btn-primary w-full gap-2" disabled={isSubmitting}>
            {isSubmitting ? t.enrollModal.submitting : t.enrollModal.submitBtn}
            {!isSubmitting && <ArrowRight size={18} />}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
