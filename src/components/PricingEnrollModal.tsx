import { useState } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";

interface PricingEnrollModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  planName: string;
  planPrice: string;
}

export const PricingEnrollModal = ({ open, onOpenChange, planName, planPrice }: PricingEnrollModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7");
  const [purpose, setPurpose] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentAccepted, setConsentAccepted] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consentAccepted) {
      toast({ title: t.pricingModal.consentRequired, variant: "destructive" });
      return;
    }

    const fieldErrors: { name?: string; phone?: string } = {};
    if (name.trim().length < 2) fieldErrors.name = t.pricingModal.nameError;
    if (phone.trim().length < 10) fieldErrors.phone = t.pricingModal.phoneError;
    
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-to-telegram", {
        body: { type: "pricing", plan: planName, name, phone, purpose },
      });

      if (error) throw error;

      trackEvent("form_submit", { form: "pricing", plan: planName });
      toast({ title: t.pricingModal.success, description: t.pricingModal.successDesc });
      onOpenChange(false);
      setName("");
      setPhone("+7");
      setPurpose("");
      setConsentAccepted(false);
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      toast({ title: t.pricingModal.error, description: t.pricingModal.errorDesc, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPlanColor = () => {
    if (planName === "ELITE / Studio") return "text-[#9ab800]";
    if (planName === "PRO / Mentor") return "text-primary";
    return "text-foreground";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-xl border-primary/20 rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{t.pricingModal.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">{t.pricingModal.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
            <div>
              <p className="text-sm text-muted-foreground">{t.pricingModal.selectedPlan}</p>
              <p className={`text-xl font-bold ${getPlanColor()}`}>{planName}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="pricing-name" className="text-sm font-medium">{t.pricingModal.nameLabel}</label>
              <input id="pricing-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={t.pricingModal.namePlaceholder} className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none transition-colors" />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="pricing-phone" className="text-sm font-medium">{t.pricingModal.phoneLabel}</label>
              <input id="pricing-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__" className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none transition-colors" />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="pricing-purpose" className="text-sm font-medium">{t.pricingModal.purposeLabel}</label>
              <Textarea id="pricing-purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)} placeholder={t.pricingModal.purposePlaceholder} className="rounded-xl bg-card border border-border focus:border-primary focus:outline-none transition-colors resize-none" rows={3} />
            </div>

            <label className="flex items-start gap-3 text-xs text-muted-foreground">
              <input type="checkbox" checked={consentAccepted} onChange={(e) => setConsentAccepted(e.target.checked)} className="mt-0.5 accent-primary" required />
              <span>{t.pricingModal.consent} <Link to="/privacy" className="text-primary hover:text-foreground">/privacy</Link></span>
            </label>

            <button type="submit" className="btn-primary w-full gap-2" disabled={isSubmitting}>
              {isSubmitting ? t.pricingModal.submitting : (<>{t.pricingModal.submitBtn}<ArrowRight size={18} /></>)}
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
