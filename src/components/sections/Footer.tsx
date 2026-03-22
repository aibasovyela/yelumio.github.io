import logo from "@/assets/logo.png";
import { useLanguage } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 border-t border-[hsl(0_0%_100%/0.08)]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Логотип" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-bold text-lg">{t.footer.brand}</span>
          </div>
          
          <nav className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#program" className="hover:text-primary transition-colors">{t.header.program}</a>
            <a href="#pricing" className="hover:text-primary transition-colors">{t.header.pricing}</a>
            <a href="#faq" className="hover:text-primary transition-colors">{t.header.faq}</a>
          </nav>

          <p className="text-sm text-muted-foreground">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
