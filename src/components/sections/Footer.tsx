import logo from "@/assets/logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { Instagram, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";

const contacts = [
  { icon: Mail, label: "Email", href: "mailto:hello@yelumio.kz", value: "hello@yelumio.kz" },
  { icon: Send, label: "Telegram", href: "https://t.me/yelumio", value: "Telegram" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/77026853038", value: "WhatsApp" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/yelumio", value: "@yelumio" },
];

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-14 border-t border-border bg-card-alt">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Yelumio" className="w-10 h-10 rounded-full object-cover" loading="lazy" />
              <span className="font-bold text-lg text-foreground">{t.footer.brand}</span>
            </div>
            <p className="text-sm text-muted-foreground">{t.footer.copyright}</p>
            <p className="text-sm text-muted-foreground">{t.footer.bin}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">{t.footer.contacts}</h3>
            <div className="space-y-3">
              {contacts.map(({ icon: Icon, href, label, value }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Icon size={16} className="text-primary" />
                  {value}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">{t.footer.addressLabel}</h3>
            <p className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
              {t.footer.address}
            </p>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-foreground transition-colors">{t.footer.privacy}</Link>
              <Link to="/offer" className="hover:text-foreground transition-colors">{t.footer.offer}</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
