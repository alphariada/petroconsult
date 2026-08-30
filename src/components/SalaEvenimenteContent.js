"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import { CheckIcon } from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";

export default function SalaEvenimenteContent() {
  const { t } = useLanguage();

  const heroFacts = t("salaEvenimente.heroFacts");
  const checklist = t("salaEvenimente.checklist");
  const tipuri = t("salaEvenimente.tipuri");

  return (
    <>
      <section className="relative bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src="/images/event-decoration.jpg"
            alt="Decor eveniment în Sala Petroconsult Business Centre"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/80 to-navy-950/50" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 pt-20 pb-16 sm:pt-28 sm:pb-24 text-center">
          <Reveal>
            <p className="text-clay-400 font-semibold tracking-wide uppercase text-sm mb-4">
              {t("salaEvenimente.heroEyebrow")}
            </p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mx-auto">
              {t("salaEvenimente.heroTitle")}
            </h1>
            <p className="mt-6 max-w-xl mx-auto text-cream-100/85 text-lg leading-relaxed">
              {t("salaEvenimente.heroText")}
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {heroFacts.map((f, i) => (
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

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/seminar-executive-room.jpg"
              alt="Sala de Evenimente Petroconsult"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>

          <Reveal delay={150}>
            <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">
              {t("salaEvenimente.introEyebrow")}
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-6">
              {t("salaEvenimente.introTitle")}
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-8">{t("salaEvenimente.introText")}</p>

            <ul className="space-y-4">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-clay-100 text-clay-600 flex items-center justify-center mt-0.5">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-charcoal-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-200 border-y border-cream-300">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 sm:py-24 text-center">
          <Reveal>
            <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">
              {t("salaEvenimente.tipuriEyebrow")}
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-10">
              {t("salaEvenimente.tipuriTitle")}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {tipuri.map((item, i) => (
                <span
                  key={i}
                  className="rounded-full border border-cream-300 bg-white text-navy-800 px-5 py-2.5 font-medium text-sm shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-navy-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 sm:py-24 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-5">
              {t("salaEvenimente.finalCtaTitle")}
            </h2>
            <p className="text-cream-100/75 text-lg mb-9 max-w-xl mx-auto">{t("salaEvenimente.finalCtaText")}</p>
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
