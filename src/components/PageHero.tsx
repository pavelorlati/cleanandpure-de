interface PageHeroProps {
  image: string;
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
}

const PageHero = ({ image, kicker, title, subtitle }: PageHeroProps) => (
  <section className="relative overflow-hidden">
    <img
      src={image}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={900}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
    <div className="relative mx-auto max-w-[1400px] px-6 py-28 md:py-40 lg:py-48">
      <div className="max-w-2xl space-y-8">
        <p className="text-primary text-xs md:text-sm font-medium tracking-[0.3em] uppercase">
          {kicker}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground leading-[1.05] tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl leading-relaxed font-light">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;
