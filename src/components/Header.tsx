import { Menu, X } from "lucide-react";
import { useState } from "react";
import { EnrollModal } from "@/components/EnrollModal";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-background/75 backdrop-blur-2xl border-b border-border" />
        
        <div className="container relative">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-4">
              <a href="/" className="flex items-center gap-3 group">
                <img 
                  src={logo} 
                  alt="Логотип" 
                  className="w-9 h-9 rounded-full object-cover"
                />
                <span className="font-semibold text-sm tracking-wide hidden sm:block text-foreground">{t.header.courseName}</span>
              </a>
              <LanguageSwitcher />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#program" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.header.program}</a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.header.pricing}</a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.header.faq}</a>
            </nav>

            <div className="hidden md:block">
              <button 
                className="btn-primary py-2.5 px-6 text-sm"
                onClick={() => setIsEnrollOpen(true)}
              >
                {t.header.enroll}
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-border p-6 space-y-4">
              <a href="#program" className="block text-sm py-2 text-muted-foreground" onClick={() => setIsMenuOpen(false)}>{t.header.program}</a>
              <a href="#pricing" className="block text-sm py-2 text-muted-foreground" onClick={() => setIsMenuOpen(false)}>{t.header.pricing}</a>
              <a href="#faq" className="block text-sm py-2 text-muted-foreground" onClick={() => setIsMenuOpen(false)}>{t.header.faq}</a>
              <button 
                className="btn-primary w-full py-3 text-sm mt-4"
                onClick={() => { setIsMenuOpen(false); setIsEnrollOpen(true); }}
              >
                {t.header.enroll}
              </button>
            </div>
          )}
        </div>
      </header>

      <EnrollModal open={isEnrollOpen} onOpenChange={setIsEnrollOpen} />
    </>
  );
};
