const HomeQuote = () => (
  <section className="py-24 bg-secondary/30 border-y border-border">
    <div className="mx-auto max-w-3xl px-6 text-center space-y-8">
      <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase">Philosophie</p>
      <blockquote className="text-2xl md:text-4xl font-light leading-tight tracking-tight text-foreground">
        „Service heißt, das ganze Geschäft<br />
        mit den <span className="text-primary font-normal">Augen des Kunden</span> zu sehen."
      </blockquote>
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
        — Geschäftsführung Clean &amp; Pure GmbH
      </p>
    </div>
  </section>
);

export default HomeQuote;
