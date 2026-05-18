interface PageHeroProps {
  kicker: string;
  title: React.ReactNode;
  image: string;
}

const PageHero = ({ kicker, title, image }: PageHeroProps) => (
  <section className="relative min-h-[70vh] flex items-end overflow-hidden">
    <div className="absolute inset-0">
      <img src={image} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
    </div>
    <div className="relative container-x pt-32 pb-20">
      <p className="kicker mb-6">{kicker}</p>
      <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl">
        {title}
      </h1>
    </div>
  </section>
);

export default PageHero;
