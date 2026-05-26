import img1 from "@/assets/work-glasdach.jpg";
import img2 from "@/assets/work-kueche.jpg";
import img3 from "@/assets/work-fenster-van.jpg";
import img4 from "@/assets/work-hochhaus.jpg";

const items = [
  { img: img1, alt: "Glasdachreinigung mit Teleskopbürste" },
  { img: img2, alt: "Clean & Pure Mitarbeiter bei der Küchenreinigung" },
  { img: img3, alt: "Fensterreinigung mit Blick auf Firmenwagen" },
  { img: img4, alt: "Glasreinigung mit Blick über Hamburg" },
];

const HomeWorkGallery = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-2xl mb-12">
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4 font-medium">
          Unser Team im Einsatz
        </p>
        <h2 className="text-3xl md:text-4xl font-light leading-tight">
          Hamburg, jeden Tag <span className="text-primary font-normal">aufs Neue</span>.
        </h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map((it, i) => (
          <div
            key={it.alt}
            data-reveal={i % 2 === 0 ? "left" : "right"}
            style={{ transitionDelay: `${i * 120}ms` }}
            className="overflow-hidden aspect-[3/4]"
          >
            <img
              src={it.img}
              alt={it.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default HomeWorkGallery;
