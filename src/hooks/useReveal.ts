import { useEffect } from "react";

/**
 * Globally observes elements with [data-reveal] and adds .is-visible
 * when they enter the viewport (one-shot). Pair with CSS in index.css.
 */
export function useReveal() {
  useEffect(() => {
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
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }

    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
