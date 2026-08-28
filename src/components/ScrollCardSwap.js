"use client";

import { useEffect, useRef, useState } from "react";

const AUTO_ADVANCE_MS = 5000;

export default function ScrollCardSwap({ eyebrow, title, items, dark = false }) {
  const [active, setActive] = useState(0);
  const scrollerRef = useRef(null);
  const timerRef = useRef(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const resetTimer = () => {
      clearTimeout(timerRef.current);
      if (!isVisibleRef.current) return;
      timerRef.current = setTimeout(() => {
        if (!isVisibleRef.current) return;
        const current = Math.round(el.scrollLeft / el.clientWidth);
        const next = (current + 1) % items.length;
        el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
      }, AUTO_ADVANCE_MS);
    };

    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActive(Math.min(items.length - 1, Math.max(0, idx)));
      // Any scroll — user swipe or our own auto-advance — restarts the wait.
      resetTimer();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) resetTimer();
        else clearTimeout(timerRef.current);
      },
      { threshold: 0.5 }
    );

    el.addEventListener("scroll", onScroll, { passive: true });
    io.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      io.disconnect();
      clearTimeout(timerRef.current);
    };
  }, [items.length]);

  return (
    <div className="lg:hidden">
      <p
        className={`font-semibold tracking-wide uppercase text-sm mb-3 ${
          dark ? "text-clay-400" : "text-clay-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className={`font-display font-bold text-3xl mb-6 ${dark ? "text-white" : "text-navy-800"}`}>
        {title}
      </h2>

      <div
        ref={scrollerRef}
        className="flex items-stretch overflow-x-auto overscroll-x-contain rounded-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="w-full shrink-0"
            style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2.5 mt-6">
        {items.map((_, i) => (
          <span
            key={i}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === active
                ? "w-8 bg-clay-500"
                : dark
                  ? "w-2.5 bg-white/30"
                  : "w-2.5 bg-navy-800/25"
            }`}
          />
        ))}
        <span
          className={`ml-2 text-xs font-bold tracking-wide tabular-nums ${
            dark ? "text-white/60" : "text-charcoal-500"
          }`}
        >
          {active + 1}/{items.length}
        </span>
      </div>
    </div>
  );
}
