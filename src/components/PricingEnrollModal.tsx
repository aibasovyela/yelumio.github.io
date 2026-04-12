import { useState } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

interface PricingEnrollModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  planName: string;
  planPrice: string;
}

export const PricingEnrollModal = ({ open, onOpenChange, planName, planPrice }: PricingEnrollModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const formSchema = z.object({
    name: z.string().min(2, t.pricingModal.nameError),
    phone: z.string().min(10, t.pricingModal.phoneError),
    email: z.string().email(t.pricingModal.emailError),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = formSchema.safeParse({ name, phone, email });
    
    if (!result.success) {
      const fieldErrors: { name?: string; phone?: string; email?: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === "name") fieldErrors.name = err.message;
        if (err.path[0] === "phone") fieldErrors.phone = err.message;
        if (err.path[0] === "email") fieldErrors.email = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-to-telegram", {
        body: { type: "pricing", plan: planName, name, email, phone },
      });

      if (error) throw error;

      toast({ title: t.pricingModal.success, description: t.pricingModal.successDesc });
      onOpenChange(false);
      setName("");
      setPhone("+7");
      setEmail("");
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
              <label htmlFor="pricing-email" className="text-sm font-medium">{t.pricingModal.emailLabel}</label>
              <input id="pricing-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.pricingModal.emailPlaceholder} className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none transition-colors" />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>

            <button type="submit" className="btn-primary w-full gap-2" disabled={isSubmitting}>
              {isSubmitting ? t.pricingModal.submitting : (<>{t.pricingModal.submitBtn}<ArrowRight size={18} /></>)}
            </button>
          </form>

          <p className="text-xs text-muted-foreground text-center">{t.pricingModal.consent}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
