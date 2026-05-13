"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "nf-reveal transition-all duration-700 ease-out will-change-transform",
        visible ? "nf-reveal-visible opacity-100 translate-y-0" : "translate-y-7 opacity-0",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
