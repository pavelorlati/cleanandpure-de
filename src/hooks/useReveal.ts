import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Global reveal controller.
 *
 * - Auto-tags images, headings, paragraphs, list items and blockquotes
 *   throughout the document body with [data-reveal="left|right"], so they
 *   slide in alternately as they enter the viewport.
 * - Works outside <main> too (excluded: header, footer, floating button,
 *   hero animated images and anything marked [data-no-reveal]).
 * - Picks up dynamically added nodes via MutationObserver, so tabs,
 *   sliders, accordions or async sections animate as well.
 * - Re-tags on route changes so per-page alternation stays clean.
 *
 * Mount <RevealController /> once inside <BrowserRouter>. The legacy
 * useReveal() hook is kept as a no-op so existing page calls keep working.
 */

const TAG_SELECTOR =
  "img, h1, h2, h3, p, li, blockquote, [data-reveal-target]";

const SKIP_SELECTOR =
  "header, header *, footer, footer *, " +
  "[data-no-reveal], [data-no-reveal] *, " +
  ".animate-hero-zoom, .animate-hero-kenburns, " +
  "[data-reveal], [data-reveal] *";

let io: IntersectionObserver | null = null;
let rowCounter = 0;
let scanScheduled = false;

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

function shouldSkip(el: Element) {
  if (!(el instanceof HTMLElement)) return true;
  if (el.matches(SKIP_SELECTOR)) return true;
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

  // Anchor reveal on the most useful wrapper: lift to parent for inline
  // text nodes (li, p) only when parent isn't already tagged.
  const target: HTMLElement = el;

  const direction = rowCounter % 2 === 0 ? "left" : "right";
  const stagger = (rowCounter % 3) * 90;
  target.setAttribute("data-reveal", direction);
  target.style.transitionDelay = `${stagger}ms`;
  rowCounter++;

  getObserver().observe(target);
}

function scan(root: ParentNode = document.body) {
  const nodes = Array.from(
    root.querySelectorAll<HTMLElement>(TAG_SELECTOR)
  );
  // Stable order = DOM order ≈ visual order, which keeps alternation predictable.
  nodes.forEach((n) => tagElement(n));
}

function scheduleScan(root?: ParentNode) {
  if (scanScheduled) return;
  scanScheduled = true;
  requestAnimationFrame(() => {
    scanScheduled = false;
    scan(root ?? document.body);
  });
}

function resetAndRescan() {
  rowCounter = 0;
  // Strip prior auto reveals so route-level alternation restarts clean,
  // but keep elements that were authored with data-reveal in source.
  document
    .querySelectorAll<HTMLElement>("[data-reveal]")
    .forEach((el) => {
      if (el.dataset.revealAuto === "1") {
        el.removeAttribute("data-reveal");
        el.classList.remove("is-visible");
        el.style.transitionDelay = "";
        delete el.dataset.revealAuto;
      }
    });
  scheduleScan();
}

// Mark auto-tagged elements so resetAndRescan can distinguish them.
const _origTag = tagElement;
function tagElementMarked(el: HTMLElement) {
  if (el.hasAttribute("data-reveal")) return;
  if (shouldSkip(el)) return;
  const before = el.hasAttribute("data-reveal");
  _origTag(el);
  if (!before && el.hasAttribute("data-reveal")) {
    el.dataset.revealAuto = "1";
  }
}

// Override scan to use marked tagger
function scanMarked(root: ParentNode = document.body) {
  const nodes = Array.from(
    root.querySelectorAll<HTMLElement>(TAG_SELECTOR)
  );
  nodes.forEach((n) => tagElementMarked(n));
}

export function RevealController() {
  const { pathname } = useLocation();

  // Init once: MutationObserver + reduced-motion guard
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const mo = new MutationObserver((mutations) => {
      let needsScan = false;
      for (const m of mutations) {
        if (m.addedNodes.length) {
          needsScan = true;
          break;
        }
      }
      if (needsScan) {
        requestAnimationFrame(() => scanMarked(document.body));
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io?.disconnect();
      io = null;
    };
  }, []);

  // Re-scan on route change
  useEffect(() => {
    rowCounter = 0;
    document
      .querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach((el) => {
        if (el.dataset.revealAuto === "1") {
          el.removeAttribute("data-reveal");
          el.classList.remove("is-visible");
          el.style.transitionDelay = "";
          delete el.dataset.revealAuto;
        }
      });
    // Two RAFs: first lets React paint the new route, second tags it.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => scanMarked(document.body))
    );
  }, [pathname]);

  return null;
}

/** Legacy no-op kept for backward compatibility with existing pages. */
export function useReveal() {
  // Intentionally empty — handled globally by <RevealController />.
}
