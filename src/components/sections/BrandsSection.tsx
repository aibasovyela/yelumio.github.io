import { ScrollReveal } from "@/hooks/useScrollAnimation";

interface Brand {
  name: string;
  logoSrc: string;
}

export const brands: Brand[] = [
  { name: "Sontery (Askona)", logoSrc: "/brands/sontery.svg" },
  { name: "Kaspi", logoSrc: "/brands/kaspi.svg" },
  { name: "RUMI", logoSrc: "/brands/rumi.svg" },
  { name: "Bairam Üly", logoSrc: "/brands/bairam.svg" },
  { name: "DALA", logoSrc: "/brands/dala.svg" },
  { name: "Shoqan", logoSrc: "/brands/shoqan.svg" },
  { name: "QazaqAir", logoSrc: "/brands/qazaqair.svg" },
];

export const BrandsSection = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest">
              Нам доверяют бренды Казахстана
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 max-w-6xl mx-auto">
            {brands.map((brand) => (
              <img
                key={brand.name}
                src={brand.logoSrc}
                alt={brand.name}
                className="h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
