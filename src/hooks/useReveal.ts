import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Global reveal controller.
 *
 * Auto-tags images, headings, paragraphs, list items and blockquotes in
 * the whole document with [data-reveal="left|right"] so they alternately
 * slide in when entering the viewport. Works outside <main> too.
 * Excluded: header, footer, [data-no-reveal], hero animated images.
 *
 * Picks up dynamic nodes via MutationObserver and re-tags on route change.
 *
 * Mount <RevealController /> once inside <BrowserRouter>.
 */

const TAG_SELECTOR =
  "img, h1, h2, h3, p, li, blockquote, [data-reveal-target]";

let io: IntersectionObserver | null = null;
let rowCounter = 0;
let rafScheduled = false;

function getObserver() {
  if (io) return io;
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io?.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
  );
  return io;
}

function shouldSkip(el: HTMLElement) {
  if (el.closest("header, footer, [data-no-reveal]")) return true;
  if (el.closest("[data-reveal]")) return true;
  if (
    el.classList.contains("animate-hero-zoom") ||
    el.classList.contains("animate-hero-kenburns")
  )
    return true;
  return false;
}

function tagElement(el: HTMLElement) {
  if (el.hasAttribute("data-reveal")) return;
  if (shouldSkip(el)) return;

  const direction = rowCounter % 2 === 0 ? "left" : "right";
  const stagger = (rowCounter % 3) * 90;
  el.setAttribute("data-reveal", direction);
  el.dataset.revealAuto = "1";
  el.style.transitionDelay = `${stagger}ms`;
  rowCounter++;

  getObserver().observe(el);
}

function scan() {
  const nodes = Array.from(
    document.body.querySelectorAll<HTMLElement>(TAG_SELECTOR)
  );
  nodes.forEach(tagElement);
}

function scheduleScan() {
  if (rafScheduled) return;
  rafScheduled = true;
  requestAnimationFrame(() => {
    rafScheduled = false;
    scan();
  });
}

function clearAuto() {
  rowCounter = 0;
  document
    .querySelectorAll<HTMLElement>('[data-reveal-auto="1"]')
    .forEach((el) => {
      el.removeAttribute("data-reveal");
      el.classList.remove("is-visible");
      el.style.transitionDelay = "";
      delete el.dataset.revealAuto;
    });
}

export function RevealController() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.addedNodes.length) {
          scheduleScan();
          return;
        }
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io?.disconnect();
      io = null;
    };
  }, []);

  useEffect(() => {
    clearAuto();
    // Wait two frames so the new route has painted before tagging.
    requestAnimationFrame(() => requestAnimationFrame(scheduleScan));
  }, [pathname]);

  return null;
}

/** Legacy no-op kept for backward compatibility with existing pages. */
export function useReveal() {
  // Handled globally by <RevealController />.
}
