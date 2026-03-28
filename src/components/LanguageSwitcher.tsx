import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

const languages: { code: Language; label: string }[] = [
  { code: "kz", label: "ҚАЗ" },
  { code: "ru", label: "РУС" },
  { code: "en", label: "ENG" },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full bg-[hsl(240_6%_7%)] border border-[hsl(240_6%_7%)] p-0.5">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
            language === lang.code
              ? "bg-[hsl(48_100%_50%)] text-[hsl(240_6%_7%)]"
              : "text-white/70 hover:text-white"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};
