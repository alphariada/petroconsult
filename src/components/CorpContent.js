"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig, corpLinks } from "@/config/site";
import { corpsConfig } from "@/config/corps";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckIcon, ChevronRightIcon } from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";

function FloorCard({ floor, image, availableLabel, delay }) {
  return (
    <Reveal delay={delay} className="grid sm:grid-cols-[220px_1fr] gap-6 items-center bg-white rounded-2xl border border-cream-300 p-5 sm:p-6">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-cream-200">
        <Image src={image} alt={floor.title} fill className="object-cover" sizes="220px" />
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h3 className="font-display font-bold text-lg text-navy-800">{floor.title}</h3>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
            {availableLabel}
          </span>
        </div>
        <p className="text-charcoal-600 leading-relaxed text-sm">{floor.desc}</p>
      </div>
    </Reveal>
  );
}

export default function CorpContent({ slug }) {
  const { t } = useLanguage();
  const config = corpsConfig[slug];
  const data = t(`corp.${config.dataKey}`);
  const availableLabel = t("corp.availableBadge");

  const otherCorps = corpLinks.filter((link) => link.href !== `/corp/${slug}`);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: t("nav.spatiiDisponibile"), href: "/spatii-disponibile" },
          { label: t(`nav.${config.navKey}`) },
        ]}
      />

      <section className="relative bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src={config.heroImage}
            alt={t(`nav.${config.navKey}`)}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/80 to-navy-950/55" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 pt-20 pb-16 sm:pt-28 sm:pb-24 text-center">
          <Reveal>
            <p className="text-clay-400 font-semibold tracking-wide uppercase text-sm mb-4">{data.heroEyebrow}</p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mx-auto">
              {data.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl mx-auto text-cream-100/85 text-lg leading-relaxed">{data.heroText}</p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {data.heroFacts.map((f, i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/25 bg-white/10 backdrop-blur px-4 py-2 text-sm text-cream-100/90"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
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

      <section className="bg-cream-200 border-y border-cream-300">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16 sm:py-20">
          <Reveal className="text-center mb-12">
            <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">{t("corp.floorsEyebrow")}</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800">{t("corp.floorsTitle")}</h2>
          </Reveal>

          <div className="space-y-5">
            {data.floors.map((floor, i) => (
              <FloorCard
                key={i}
                floor={floor}
                image={config.floors[i].image}
                availableLabel={availableLabel}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 sm:py-24">
        <Reveal>
          <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">{data.introEyebrow}</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-6">{data.introTitle}</h2>
          <p className="text-charcoal-600 leading-relaxed">{data.introText}</p>

          {data.features && (
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {data.features.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-clay-100 text-clay-600 flex items-center justify-center mt-0.5">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-charcoal-600 leading-relaxed text-sm">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16 sm:py-20 text-center">
        <Reveal>
          <p className="text-charcoal-400 font-medium text-sm uppercase tracking-wide mb-5">
            {t("corp.otherCorpuriLabel")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCorps.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-white hover:border-clay-400 hover:text-clay-600 transition-colors px-5 py-2.5 font-semibold text-sm text-navy-800"
              >
                {t(`nav.${link.key}`)}
                <ChevronRightIcon className="w-3.5 h-3.5" />
              </Link>
            ))}
            <Link
              href="/spatii-disponibile"
              className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-white hover:border-clay-400 hover:text-clay-600 transition-colors px-5 py-2.5 font-semibold text-sm text-navy-800"
            >
              {t("corp.viewMapBtn")}
              <ChevronRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="relative bg-navy-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 sm:py-24 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-5">
              {t("spatiiDisponibile.ctaTitle")}
            </h2>
            <p className="text-cream-100/75 text-lg mb-9 max-w-xl mx-auto">{t("spatiiDisponibile.ctaText")}</p>
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
