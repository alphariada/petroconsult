"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import InteractiveSiteMap from "@/components/InteractiveSiteMap";
import { useLanguage } from "@/context/LanguageContext";

export default function SpatiiDisponibileContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="max-w-3xl mx-auto px-6 lg:px-10 pt-16 pb-10 sm:pt-20 sm:pb-12 text-center">
        <Reveal>
          <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">
            {t("spatiiDisponibile.heroEyebrow")}
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-navy-800 leading-tight">
            {t("spatiiDisponibile.heroTitle")}
          </h1>
          <p className="mt-6 text-charcoal-600 text-lg leading-relaxed">
            {t("spatiiDisponibile.heroText")}
          </p>
        </Reveal>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-20 sm:pb-28">
        <Reveal delay={100}>
          <InteractiveSiteMap />
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
