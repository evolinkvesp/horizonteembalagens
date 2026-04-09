import { useEffect, useMemo, useState } from "react";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(!!mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

export function useRevealOnScroll() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!nodes.length) return;

    if (reducedMotion) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [reducedMotion]);

  return useMemo(() => ({ reducedMotion }), [reducedMotion]);
}
