import { Link } from "react-router-dom";

const SeoLongCopy = ({
  kicker,
  heading,
  paragraphs,
  faq,
  bg = "default",
}: {
  kicker: string;
  heading: string;
  paragraphs: string[];
  faq?: { q: string; a: string }[];
  bg?: "default" | "muted";
}) => (
  <section
    className={`border-t border-border ${bg === "muted" ? "bg-secondary/30" : "bg-background"}`}
  >
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase mb-5">
        {kicker}
      </p>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 text-foreground">
        {heading}
      </h2>
      <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {faq && (
        <>
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight mt-14 mb-8 text-foreground">
            Häufige Fragen
          </h3>
          <div className="space-y-8">
            {faq.map((f) => (
              <div key={f.q} className="border-t border-border pt-5">
                <h4 className="text-base font-semibold tracking-tight mb-2 text-foreground">
                  {f.q}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="mt-14 border-t border-border pt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        <Link to="/kontakt" className="text-primary font-medium hover:underline">
          Jetzt unverbindlich anfragen →
        </Link>
        <a href="tel:+494035966171" className="text-muted-foreground hover:text-foreground">
          040 35 96 61 71
        </a>
      </div>
    </div>
  </section>
);

export default SeoLongCopy;
