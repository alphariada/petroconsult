"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function FeatureText({ item, index, active }) {
  return (
    <>
      <span
        className={`font-display font-bold text-sm tracking-wide uppercase transition-colors ${
          index === active ? "text-clay-600" : "text-charcoal-400"
        }`}
      >
        0{index + 1}
      </span>
      <h3
        className={`font-display font-bold text-2xl sm:text-3xl mt-3 mb-4 transition-colors ${
          index === active ? "text-navy-800" : "text-charcoal-400"
        }`}
      >
        {item.title}
      </h3>
      <p
        className={`text-base sm:text-lg leading-relaxed transition-colors max-w-md ${
          index === active ? "text-charcoal-600" : "text-charcoal-400/70"
        }`}
      >
        {item.desc}
      </p>
    </>
  );
}

function ImageStack({ items, active, sizes }) {
  return (
    <>
      {items.map((item, i) => (
        <div
          key={item.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={item.image} alt={item.title} fill className="object-cover" sizes={sizes} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="font-display font-extrabold text-5xl sm:text-6xl text-white/25">
              0{i + 1}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default function ScrollFeatures({ eyebrow, title, items }) {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    const nodes = containerRef.current.querySelectorAll("[data-index]");
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="lg:hidden">
        <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">{eyebrow}</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-6 max-w-md">
          {title}
        </h2>

        <div className="sticky top-20 z-10 mb-2">
          <div className="relative h-[38vh] rounded-2xl overflow-hidden shadow-xl bg-navy-950">
            <ImageStack items={items} active={active} sizes="100vw" />
          </div>
          <div className="h-20 bg-gradient-to-b from-cream-200 to-transparent" />
        </div>

        <div className="flex flex-col">
          {items.map((item, i) => (
            <div
              key={item.title}
              data-index={i}
              className={`flex flex-col py-6 ${
                i === 0
                  ? "min-h-[28vh] justify-start pt-2"
                  : i === items.length - 1
                    ? "min-h-[48vh] justify-end -mb-10"
                    : "min-h-[48vh] justify-center"
              }`}
            >
              <FeatureText item={item} index={i} active={active} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:grid lg:grid-cols-2 gap-16">
        <div className="relative">
          <div className="sticky top-0 h-screen flex flex-col justify-center">
            <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">{eyebrow}</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-8 max-w-md">
              {title}
            </h2>
            <div className="relative h-[45vh] rounded-3xl overflow-hidden shadow-2xl">
              <ImageStack items={items} active={active} sizes="50vw" />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {items.map((item, i) => (
            <div
              key={item.title}
              data-index={i}
              className={`flex flex-col justify-center py-8 ${
                i === 0 ? "min-h-screen" : "min-h-[65vh]"
              }`}
            >
              <FeatureText item={item} index={i} active={active} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
