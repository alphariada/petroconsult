"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const IMAGE_WIDTH = 1649;
const IMAGE_HEIGHT = 1156;

// Label positions are calibrated separately for phone vs. laptop — the pill's
// own size doesn't scale with the map's width, so one shared position doesn't
// sit right on both. See the .map-label-pos rule in globals.css.
const corps = [
  {
    key: "corpC2",
    href: "/corp/corp-c2",
    labelPos: { mobile: [1047, 259], desktop: [1016, 242] },
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
    labelPos: { mobile: [618, 720], desktop: [597, 688] },
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
    labelPos: { mobile: [1214, 714], desktop: [1195, 702] },
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
    labelPos: { mobile: [840, 467], desktop: [744, 423] },
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
    labelPos: { mobile: [1305, 1006], desktop: [1283, 996] },
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

function buildInitialPos() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const pos = {};
  [...corps, ...areas].forEach((item) => {
    pos[item.key] = isMobile ? item.labelPos.mobile : item.labelPos.desktop;
  });
  return pos;
}

export default function InteractiveSiteMap() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useLanguage();
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState(buildInitialPos);
  const [draggingKey, setDraggingKey] = useState(null);
  const stageRef = useRef(null);
  const dragRef = useRef(null);

  const calibrating = searchParams.get("calibrate") === "1";

  useEffect(() => {
    if (!calibrating) return;

    function onPointerMove(e) {
      const drag = dragRef.current;
      const stage = stageRef.current;
      if (!drag || !stage) return;
      const rect = stage.getBoundingClientRect();
      let px = (e.clientX - drag.offsetX - rect.left) / rect.width;
      let py = (e.clientY - drag.offsetY - rect.top) / rect.height;
      px = Math.min(1, Math.max(0, px));
      py = Math.min(1, Math.max(0, py));
      setPos((prev) => ({
        ...prev,
        [drag.key]: [Math.round(px * IMAGE_WIDTH), Math.round(py * IMAGE_HEIGHT)],
      }));
    }

    function onPointerUp() {
      dragRef.current = null;
      setDraggingKey(null);
    }

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [calibrating]);

  function startDrag(e, key) {
    if (!calibrating) return;
    e.preventDefault();
    e.stopPropagation();
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const [curX, curY] = pos[key];
    const centerScreenX = rect.left + (curX / IMAGE_WIDTH) * rect.width;
    const centerScreenY = rect.top + (curY / IMAGE_HEIGHT) * rect.height;
    dragRef.current = {
      key,
      offsetX: e.clientX - centerScreenX,
      offsetY: e.clientY - centerScreenY,
    };
    setDraggingKey(key);
  }

  // While calibrating, both breakpoints show the same live-dragged spot (whatever
  // width you're currently testing at); otherwise each breakpoint uses its own
  // calibrated position via the CSS custom properties below.
  function labelPosVars(item) {
    if (calibrating) {
      const [x, y] = pos[item.key];
      return {
        "--label-x-mobile": pct(x, IMAGE_WIDTH),
        "--label-y-mobile": pct(y, IMAGE_HEIGHT),
        "--label-x-desktop": pct(x, IMAGE_WIDTH),
        "--label-y-desktop": pct(y, IMAGE_HEIGHT),
      };
    }
    return {
      "--label-x-mobile": pct(item.labelPos.mobile[0], IMAGE_WIDTH),
      "--label-y-mobile": pct(item.labelPos.mobile[1], IMAGE_HEIGHT),
      "--label-x-desktop": pct(item.labelPos.desktop[0], IMAGE_WIDTH),
      "--label-y-desktop": pct(item.labelPos.desktop[1], IMAGE_HEIGHT),
    };
  }

  const outputText = [...corps, ...areas]
    .map((item) => `${item.key}: [${pos[item.key][0]}, ${pos[item.key][1]}],`)
    .join("\n");

  return (
    <div>
      {calibrating && (
        <div className="mb-4 rounded-2xl border-2 border-clay-500 bg-navy-950 p-4 text-sm text-white">
          <p className="mb-2 font-bold text-clay-400">
            Mod calibrare activ — trage etichetele direct pe poza de mai jos, apoi copiază coordonatele.
          </p>
          <pre className="whitespace-pre-wrap rounded-lg bg-navy-900 p-3 font-mono text-xs">{outputText}</pre>
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(outputText)}
            className="mt-2 rounded-full bg-clay-500 px-4 py-2 text-xs font-bold hover:bg-clay-600"
          >
            Copiază coordonatele
          </button>
        </div>
      )}

      <div
        ref={stageRef}
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
                onClick={() => !calibrating && router.push(corp.href)}
                onKeyDown={(e) => {
                  if (!calibrating && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    router.push(corp.href);
                  }
                }}
                className="cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-clay-500 focus-visible:outline-offset-4"
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
          const isDragging = draggingKey === area.key;
          return (
            <div
              key={area.key}
              onPointerDown={(e) => startDrag(e, area.key)}
              className={`map-label-pos absolute -translate-x-1/2 -translate-y-1/2 ${
                calibrating ? "cursor-grab" : "pointer-events-none"
              }`}
              style={{
                ...labelPosVars(area),
                transform: `translate(-50%, -50%) translateY(${isHovered && !calibrating ? "-6px" : "0px"})`,
                transition: isDragging ? "none" : "transform 380ms cubic-bezier(0.22, 1, 0.36, 1)",
                zIndex: isDragging ? 50 : "auto",
              }}
            >
              <span
                className={`rounded-full border px-[9px] py-[5px] text-center font-display text-[8px] font-bold whitespace-nowrap shadow-lg transition-all duration-300 sm:px-[18px] sm:py-[9px] sm:text-[14px] ${
                  calibrating
                    ? "border-clay-400 bg-clay-500 text-white"
                    : isHovered
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
          const isDragging = draggingKey === corp.key;
          return (
            <div
              key={corp.key}
              onPointerDown={(e) => startDrag(e, corp.key)}
              className={`map-label-pos absolute -translate-x-1/2 -translate-y-1/2 ${
                calibrating ? "cursor-grab" : "pointer-events-none"
              }`}
              style={{
                ...labelPosVars(corp),
                transform: `translate(-50%, -50%) translateY(${isHovered && !calibrating ? "-14px" : "0px"})`,
                transition: isDragging ? "none" : "transform 380ms cubic-bezier(0.22, 1, 0.36, 1)",
                zIndex: isDragging ? 50 : "auto",
              }}
            >
              <span
                className={`rounded-full border px-[10px] py-[5px] text-center font-display text-[8px] font-bold whitespace-nowrap shadow-lg transition-all duration-300 sm:px-[22px] sm:py-[11px] sm:text-[16px] ${
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
