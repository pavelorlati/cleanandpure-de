const HomeQuote = () => (
  <section className="py-24 border-t border-border bg-background">
    <div className="mx-auto max-w-3xl px-6 text-center">
      <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-8">
        Philosophie
      </p>
      <blockquote className="text-2xl md:text-3xl font-light leading-snug text-foreground">
        „Service heißt, das ganze Geschäft mit den{" "}
        <span className="text-primary">Augen des Kunden</span> zu sehen."
      </blockquote>
      <p className="text-muted-foreground text-sm mt-8 tracking-wide">
        — Geschäftsführung Clean &amp; Pure GmbH
      </p>
    </div>
  </section>
);

export default HomeQuote;
