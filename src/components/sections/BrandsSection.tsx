import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { ImageIcon } from "lucide-react";

interface Brand {
  name: string;
  logoSrc?: string;
}

// Заполни logoSrc когда будут готовы файлы логотипов
const brands: Brand[] = [
  { name: "Brand 1" },
  { name: "Brand 2" },
  { name: "Brand 3" },
  { name: "Brand 4" },
  { name: "Brand 5" },
  { name: "Brand 6" },
  { name: "Brand 7" },
  { name: "Brand 8" },
];

export const BrandsSection = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-6">
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest">
              Бренды, для которых мы делали креативы
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/50 border border-border flex items-center justify-center overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                title={brand.name}
              >
                {brand.logoSrc ? (
                  <img
                    src={brand.logoSrc}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <ImageIcon
                    size={22}
                    strokeWidth={1.5}
                    className="text-muted-foreground/50"
                  />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
