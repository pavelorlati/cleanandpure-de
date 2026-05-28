interface PageHeroProps {
  kicker: string;
  title: React.ReactNode;
  image: string;
}

const PageHero = ({ kicker, title, image }: PageHeroProps) => (
  <section className="relative min-h-[70vh] flex items-end overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover animate-hero-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
    </div>
    <div className="relative container-x pt-32 pb-20">
      <p className="kicker mb-6 animate-hero-in" style={{ animationDelay: "120ms" }}>{kicker}</p>
      <h1
        className="text-[1.9rem] xs:text-[2.25rem] sm:text-5xl md:text-7xl font-bold leading-[1.15] sm:leading-[1.08] tracking-tight max-w-4xl animate-hero-in [text-wrap:balance] break-words"
        style={{ animationDelay: "240ms" }}
      >
        {title}
      </h1>
    </div>
  </section>
);

export default PageHero;
