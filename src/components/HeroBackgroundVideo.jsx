"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle abstract motion behind the hero gradient. Paused when reduced motion is preferred.
 * Source: Mixkit — abstract digital / data-style loop (atmospheric, not a product demo).
 */
export default function HeroBackgroundVideo() {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (mq.matches) {
        v.pause();
        return;
      }
      void v.play().catch(() => {});
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <video
      ref={ref}
      className="nf-hero-video"
      muted
      playsInline
      loop
      autoPlay
      preload="metadata"
      aria-hidden="true"
    >
      <source
        src="https://assets.mixkit.co/videos/preview/mixkit-moving-through-a-digital-tunnel-with-data-4026-large.mp4"
        type="video/mp4"
      />
    </video>
  );
}
