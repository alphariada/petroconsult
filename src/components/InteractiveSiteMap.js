"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const IMAGE_WIDTH = 1649;
const IMAGE_HEIGHT = 1156;

const corps = [
  {
    key: "corpC2",
    href: "/corp/corp-c2",
    labelPos: [992, 236],
    points: [
      [815, 73],
      [1166, 213],
      [1094, 387],
      [742, 238],
    ],
  },
  {
    key: "corpC1B",
    href: "/corp/corp-c1b",
    labelPos: [552, 694],
    points: [
      [912, 813],
      [827, 1033],
      [495, 788],
      [86, 488],
      [234, 324],
      [627, 623],
    ],
  },
  {
    key: "corpC1A",
    href: "/corp/corp-c1a",
    labelPos: [1245, 695],
    points: [
      [1203, 510],
      [1235, 430],
      [1436, 490],
      [1420, 562],
      [1524, 591],
      [1437, 922],
      [1133, 818],
      [1033, 864],
      [968, 1081],
      [828, 1033],
      [913, 813],
      [883, 794],
      [976, 500],
      [1212, 572],
      [1232, 524],
    ],
  },
];

const areas = [
  {
    key: "curteInterioara",
    labelPos: [769, 467],
    points: [
      [233, 323],
      [628, 624],
      [884, 793],
      [975, 500],
      [1212, 572],
      [1232, 523],
      [1203, 510],
      [1235, 430],
      [1094, 388],
      [742, 238],
      [709, 278],
      [615, 226],
      [626, 208],
      [457, 132],
      [397, 106],
    ],
  },
  {
    key: "parcareFata",
    labelPos: [1254, 986],
    points: [
      [968, 1081],
      [1033, 864],
      [1133, 818],
      [1453, 928],
      [1433, 1042],
      [1423, 1089],
      [1227, 1109],
    ],
  },
];

function pointsAttr(points) {
  return points.map((p) => p.join(",")).join(" ");
}

function pct(value, total) {
  return `${(value / total) * 100}%`;
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
          {areas.map((area) => {
            const isHovered = hovered === area.key;
            return (
              <polygon
                key={area.key}
                aria-hidden="true"
                onMouseEnter={() => setHovered(area.key)}
                onMouseLeave={() => setHovered(null)}
                points={pointsAttr(area.points)}
                fill={isHovered ? "rgba(199,146,234,0.35)" : "rgba(255,255,255,0.06)"}
                stroke={isHovered ? "#c792ea" : "rgba(255,255,255,0.55)"}
                strokeWidth={isHovered ? 4 : 2}
                strokeDasharray="10,7"
                strokeLinejoin="round"
                style={{ transition: "fill 380ms ease, stroke 380ms ease, stroke-width 380ms ease" }}
              />
            );
          })}

          {corps.map((corp) => {
            const isHovered = hovered === corp.key;
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
                  points={pointsAttr(corp.points)}
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
              </g>
            );
          })}
        </svg>

        {/* Labels live outside the SVG on purpose: text inside an SVG viewBox scales down
            with the image (often to a fraction of its CSS size on phones/laptops), so pills
            are plain HTML positioned by percentage instead. */}
        {areas.map((area) => {
          const isHovered = hovered === area.key;
          const label = t(`spatiiDisponibile.areas.${area.key}`);
          return (
            <div
              key={area.key}
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: pct(area.labelPos[0], IMAGE_WIDTH),
                top: pct(area.labelPos[1], IMAGE_HEIGHT),
                transform: `translate(-50%, -50%) translateY(${isHovered ? "-6px" : "0px"})`,
                transition: "transform 380ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <span
                className={`rounded-full border px-4 py-2 text-center font-display text-sm font-bold whitespace-nowrap shadow-lg transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-base ${
                  isHovered
                    ? "scale-105 border-[#c792ea] bg-[#c792ea] text-white"
                    : "border-white/50 bg-navy-950/55 text-white backdrop-blur-sm"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}

        {corps.map((corp) => {
          const isHovered = hovered === corp.key;
          const label = t(`nav.${corp.key}`);
          return (
            <div
              key={corp.key}
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: pct(corp.labelPos[0], IMAGE_WIDTH),
                top: pct(corp.labelPos[1], IMAGE_HEIGHT),
                transform: `translate(-50%, -50%) translateY(${isHovered ? "-14px" : "0px"})`,
                transition: "transform 380ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <span
                className={`rounded-full border px-5 py-2.5 text-center font-display text-base font-bold whitespace-nowrap shadow-lg transition-all duration-300 sm:px-6 sm:py-3 sm:text-lg ${
                  isHovered
                    ? "scale-105 border-clay-400 bg-clay-500 text-white"
                    : "border-cream-300 bg-white/95 text-navy-800"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-center text-sm text-charcoal-400">{t("spatiiDisponibile.mapHint")}</p>
    </div>
  );
}
