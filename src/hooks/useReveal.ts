import { useEffect } from "react";

/**
 * Globally observes elements with [data-reveal] and adds .is-visible
 * when they enter the viewport (one-shot). Pair with CSS in index.css.
 *
 * Additionally, automatically tags <img> elements inside <main> that
 * do not yet have data-reveal (or an ancestor with one) so every image
 * gracefully slides in alternately from left/right while scrolling.
 */
export function useReveal() {
  useEffect(() => {
    // Auto-tag images inside main with alternating left/right reveals
    let autoIndex = 0;
    const imgs = Array.from(document.querySelectorAll<HTMLImageElement>("main img"));
    imgs.forEach((img) => {
      if (img.closest("[data-reveal]") || img.closest("[data-no-reveal]")) return;
      // Skip hero images (they animate via animate-hero-zoom / kenburns)
      if (img.classList.contains("animate-hero-zoom") || img.classList.contains("animate-hero-kenburns")) return;
      const target: HTMLElement = (img.parentElement as HTMLElement) ?? img;
      if (target.hasAttribute("data-reveal")) return;
      target.setAttribute("data-reveal", autoIndex % 2 === 0 ? "left" : "right");
      target.style.transitionDelay = `${(autoIndex % 4) * 80}ms`;
      autoIndex++;
    });

    // Auto-tag heading blocks (h2 wrappers) without reveal so text slides too
    const headings = Array.from(document.querySelectorAll<HTMLElement>("main h2"));
    headings.forEach((h) => {
      if (h.closest("[data-reveal]") || h.closest("[data-no-reveal]")) return;
      const wrap = (h.parentElement as HTMLElement) ?? h;
      if (wrap.hasAttribute("data-reveal")) return;
      wrap.setAttribute("data-reveal", autoIndex % 2 === 0 ? "left" : "right");
      autoIndex++;
    });

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
