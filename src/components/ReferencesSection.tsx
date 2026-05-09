import refPolster from "@/assets/ref-polster.jpg";
import refBoden from "@/assets/ref-boden.jpg";
import refFassade from "@/assets/ref-fassade.jpg";
import refGlas from "@/assets/ref-glas.jpg";
import refBuero from "@/assets/ref-buero.jpg";
import refTreppen from "@/assets/ref-treppen.jpg";

const references = [
  { title: "Polsterreinigung", desc: "Tiefenreinigung von Polstermöbeln", img: refPolster },
  { title: "Bodengrundreinigung", desc: "Professionelle Bodenaufbereitung", img: refBoden },
  { title: "Fassadenreinigung", desc: "Außenflächen wie neu", img: refFassade },
  { title: "Glasreinigung", desc: "Streifenfreie Sauberkeit", img: refGlas },
  { title: "Büroreinigung", desc: "Saubere Arbeitsumgebung", img: refBuero },
  { title: "Treppenhausreinigung", desc: "Gepflegte Gemeinschaftsflächen", img: refTreppen },
];

const ReferencesSection = () => (
  <section id="references" className="py-20 bg-background">
    <div className="mx-auto max-w-[1400px] px-6">
      <p className="text-sm font-medium text-primary tracking-[0.2em] uppercase text-center mb-4">
        Referenzen
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-center tracking-wide mb-14">
        Einblicke in unsere Arbeit
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {references.map((ref) => (
          <div key={ref.title} className="group relative rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src={ref.img}
              alt={ref.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full p-6">
              <h3 className="text-lg font-semibold text-white tracking-wide">{ref.title}</h3>
              <p className="text-sm text-white/80">{ref.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReferencesSection;
