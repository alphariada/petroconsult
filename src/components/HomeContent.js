"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import ScrollFeatures from "@/components/ScrollFeatures";
import { useLanguage } from "@/context/LanguageContext";

const statDefs = [
  { key: "totalArea", value: 8000, suffix: " mp" },
  { key: "corpuri", value: 3, suffix: "" },
  { key: "renovare", value: 2024, suffix: "" },
  { key: "saleEvenimente", value: 150, suffix: "" },
];

const featureDefs = [
  { key: "location", image: "/images/petroconsult-2.jpeg" },
  { key: "renovated", image: "/images/petroconsult-4.jpeg" },
  { key: "courtyard", image: "/images/petroconsult-6.jpeg" },
];

const corpThumbs = [
  { key: "corpC1A", image: "/images/petroconsult-4.jpeg" },
  { key: "corpC1B", image: "/images/petroconsult-10.jpeg" },
  { key: "corpC2", image: "/images/petroconsult-1.jpeg" },
];

const partners = [
  { name: "Shipo", logo: "/images/shipo-logo.png" },
  { name: "Site Salt", logo: "/images/site-salt-logo.png" },
];

export default function HomeContent() {
  const { t } = useLanguage();

  const features = featureDefs.map((f) => ({
    title: t(`home.features.${f.key}.title`),
    desc: t(`home.features.${f.key}.desc`),
    image: f.image,
  }));

  return (
    <>
      <section className="relative bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src="/images/petroconsult-6.jpeg"
            alt="Curtea interioară Petroconsult Business Centre"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-950/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-28 sm:pt-28 sm:pb-36">
          <Reveal>
            <p className="text-clay-400 font-semibold tracking-wide uppercase text-sm mb-4">
              {t("home.heroEyebrow")}
            </p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white max-w-2xl leading-tight">
              {t("common.tagline")}
            </h1>
            <p className="mt-6 max-w-xl text-cream-100/85 text-lg leading-relaxed">{t("home.heroSubtitle")}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/spatii-disponibile"
                className="inline-flex items-center rounded-full bg-clay-500 hover:bg-clay-600 transition-colors px-7 py-3.5 font-semibold text-white"
              >
                {t("home.spatiiDisponibileBtn")}
              </Link>
              <Link
                href="/despre-noi"
                className="inline-flex items-center rounded-full border border-white/40 hover:bg-white/10 transition-colors px-7 py-3.5 font-semibold text-white"
              >
                {t("home.despreNoiBtn")}
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="relative bg-navy-900 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {statDefs.map((s) => (
              <div key={s.key} className="text-center sm:text-left">
                <div className="font-display font-bold text-2xl sm:text-3xl text-white">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-cream-100/70 text-sm mt-1">{t(`home.stats.${s.key}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/petroconsult-7.jpeg"
            alt="Birou Petroconsult Invest cu diplomă de mulțumire"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </Reveal>
        <Reveal delay={150} className="order-1 lg:order-2">
          <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">{t("home.aboutEyebrow")}</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-6">{t("home.aboutTitle")}</h2>
          <p className="text-charcoal-600 leading-relaxed mb-4">{t("home.aboutText")}</p>
          <Link
            href="/despre-noi"
            className="inline-flex items-center gap-2 font-semibold text-navy-800 hover:text-clay-600 transition-colors"
          >
            {t("home.aboutLink")}
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>

      <section className="bg-cream-200 border-y border-cream-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 sm:py-14">
          <ScrollFeatures eyebrow={t("home.featuresEyebrow")} title={t("home.featuresTitle")} items={features} />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <Reveal className="flex flex-col items-center text-center">
          <p className="text-charcoal-400 font-medium text-sm uppercase tracking-wide mb-6">
            {t("home.partnersLabel")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {partners.map((p) => (
              <Image
                key={p.name}
                src={p.logo}
                alt={p.name}
                width={140}
                height={48}
                className="h-9 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
        <Reveal className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-navy-950 rounded-3xl overflow-hidden p-8 sm:p-12">
          <div>
            <p className="text-clay-400 font-semibold tracking-wide uppercase text-sm mb-3">
              {t("home.corpuriEyebrow")}
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-5">{t("home.corpuriTitle")}</h2>
            <p className="text-cream-100/75 leading-relaxed mb-8 max-w-md">{t("home.corpuriText")}</p>
            <Link
              href="/spatii-disponibile"
              className="inline-flex items-center rounded-full bg-clay-500 hover:bg-clay-600 transition-colors px-7 py-3.5 font-semibold text-white"
            >
              {t("home.corpuriBtn")}
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {corpThumbs.map((c) => (
              <div key={c.key} className="text-center">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-2">
                  <Image src={c.image} alt={t(`nav.${c.key}`)} fill className="object-cover" />
                </div>
                <span className="text-cream-100/80 text-xs font-medium">{t(`nav.${c.key}`)}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 sm:pb-28">
        <Reveal className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/seminar-executive-room.jpg"
              alt="Sala de Evenimente Petroconsult"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">{t("home.salaEyebrow")}</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-5">{t("home.salaTitle")}</h2>
            <p className="text-charcoal-600 leading-relaxed mb-8 max-w-md">{t("home.salaText")}</p>
            <Link
              href="/sala-de-evenimente"
              className="inline-flex items-center gap-2 font-semibold text-navy-800 hover:text-clay-600 transition-colors"
            >
              {t("home.salaLink")}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="relative bg-navy-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 sm:py-24 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-5">{t("home.ctaTitle")}</h2>
            <p className="text-cream-100/75 text-lg mb-9 max-w-xl mx-auto">{t("home.ctaText")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-clay-500 hover:bg-clay-600 transition-colors px-7 py-3.5 font-semibold text-white"
              >
                {t("common.contactCta")}
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center rounded-full border border-white/40 hover:bg-white/10 transition-colors px-7 py-3.5 font-semibold text-white"
              >
                {t("common.callPrefix")} {siteConfig.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
