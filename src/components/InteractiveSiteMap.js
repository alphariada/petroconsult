"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const IMAGE_WIDTH = 1870;
const IMAGE_HEIGHT = 1252;

const corps = [
  {
    key: "corpC2",
    href: "/corp/corp-c2",
    points: [
      [816, 166],
      [1166, 309],
      [1094, 483],
      [744, 338],
    ],
  },
  {
    key: "corpC1B",
    href: "/corp/corp-c1b",
    points: [
      [971, 1179],
      [829, 1119],
      [495, 884],
      [86, 584],
      [234, 420],
      [628, 714],
      [867, 885],
      [1031, 954],
    ],
  },
  {
    key: "corpC1A",
    href: "/corp/corp-c1a",
    points: [
      [1203, 606],
      [1233, 538],
      [1436, 586],
      [1422, 660],
      [1520, 693],
      [1436, 1016],
      [1133, 914],
      [1036, 957],
      [959, 921],
      [893, 896],
      [976, 596],
      [1211, 669],
      [1227, 614],
    ],
  },
];

function centroid(points) {
  const [sx, sy] = points.reduce(([ax, ay], [x, y]) => [ax + x, ay + y], [0, 0]);
  return [sx / points.length, sy / points.length];
}

export default function InteractiveSiteMap() {
  const router = useRouter();
  const { t } = useLanguage();
  const [hovered, setHovered] = useState(null);

  return (
    <div>
      <div
        className="relative w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-cream-300"
        style={{ aspectRatio: `${IMAGE_WIDTH} / ${IMAGE_HEIGHT}` }}
      >
        <Image
          src="/images/map/ansamblu-satelit.webp"
          alt="Ansamblul Petroconsult Business Centre văzut din satelit"
          fill
          priority
          className="object-cover select-none"
          sizes="(min-width: 1024px) 1100px, 100vw"
        />
        <svg
          viewBox={`0 0 ${IMAGE_WIDTH} ${IMAGE_HEIGHT}`}
          className="absolute inset-0 h-full w-full"
          role="group"
          aria-label={t("spatiiDisponibile.mapAriaLabel")}
        >
          {corps.map((corp) => {
            const [cx, cy] = centroid(corp.points);
            const isHovered = hovered === corp.key;
            const pointsAttr = corp.points.map((p) => p.join(",")).join(" ");
            const label = t(`nav.${corp.key}`);

            return (
              <g
                key={corp.key}
                role="link"
                tabIndex={0}
                aria-label={label}
                onMouseEnter={() => setHovered(corp.key)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(corp.key)}
                onBlur={() => setHovered(null)}
                onClick={() => router.push(corp.href)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    router.push(corp.href);
                  }
                }}
                className="cursor-pointer outline-none"
                style={{
                  transform: isHovered ? "translateY(-14px)" : "translateY(0px)",
                  transition: "transform 380ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <polygon
                  points={pointsAttr}
                  fill={isHovered ? "rgba(169,117,76,0.4)" : "rgba(32,29,87,0.1)"}
                  stroke={isHovered ? "#C08F63" : "rgba(255,255,255,0.8)"}
                  strokeWidth={isHovered ? 6 : 3}
                  strokeLinejoin="round"
                  style={{
                    filter: isHovered
                      ? "drop-shadow(0 24px 32px rgba(10,8,30,0.55))"
                      : "drop-shadow(0 2px 5px rgba(10,8,30,0.25))",
                    transition: "fill 380ms ease, stroke 380ms ease, filter 380ms ease, stroke-width 380ms ease",
                  }}
                />
                <foreignObject
                  x={cx - 120}
                  y={cy - 24}
                  width={240}
                  height={48}
                  style={{ overflow: "visible", pointerEvents: "none" }}
                >
                  <div className="flex items-center justify-center">
                    <span
                      className={`rounded-full border px-4 py-2 text-center font-display text-sm font-bold whitespace-nowrap shadow-lg transition-all duration-300 sm:text-base ${
                        isHovered
                          ? "-translate-y-1 scale-105 border-clay-400 bg-clay-500 text-white"
                          : "border-cream-300 bg-white/95 text-navy-800"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>
      <p className="mt-4 text-center text-sm text-charcoal-400">{t("spatiiDisponibile.mapHint")}</p>
    </div>
  );
}
