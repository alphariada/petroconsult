"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import ScrollCardSwap from "@/components/ScrollCardSwap";
import { AwardIcon, TrendingUpIcon, UsersIcon, QuoteIcon } from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";

const valueDefs = [
  { key: "experienta", icon: AwardIcon },
  { key: "investitie", icon: TrendingUpIcon },
  { key: "parteneriat", icon: UsersIcon },
];

const corpDefs = [
  { key: "c1a", image: "/images/petroconsult-4.jpeg" },
  { key: "c1b", image: "/images/petroconsult-10.jpeg" },
  { key: "c2", image: "/images/petroconsult-1.jpeg" },
];

const testimonialDefs = [
  { key: "danG" },
  { key: "shipo", logo: "/images/shipo-logo.png" },
  { key: "siteSalt", logo: "/images/site-salt-logo.png" },
];

function ValueCard({ v }) {
  return (
    <div className="bg-cream-100 rounded-2xl p-8 border border-cream-300 h-full">
      <div className="w-12 h-12 rounded-xl bg-clay-100 text-clay-600 flex items-center justify-center mb-6">
        <v.icon className="w-6 h-6" />
      </div>
      <h3 className="font-display font-bold text-xl text-navy-800 mb-3">{v.title}</h3>
      <p className="text-charcoal-600 leading-relaxed">{v.desc}</p>
    </div>
  );
}

function CorpCard({ c, i }) {
  return (
    <div className="group h-full flex flex-col">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shrink-0">
        <Image
          src={c.image}
          alt={c.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
        <span className="absolute top-5 left-5 font-display font-extrabold text-4xl text-white/25">
          0{i + 1}
        </span>
        <h3 className="absolute bottom-5 left-5 right-5 font-display font-bold text-2xl text-white">{c.title}</h3>
      </div>
      <p className="text-charcoal-600 leading-relaxed mt-5">{c.desc}</p>
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="bg-navy-900 rounded-2xl p-8 border border-white/10 flex flex-col h-full">
      <QuoteIcon className="w-7 h-7 text-clay-400 mb-5" />
      <p className="text-cream-100/85 leading-relaxed mb-6 flex-1">&bdquo;{t.quote}&rdquo;</p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        {t.logo ? (
          <Image src={t.logo} alt={t.name} width={100} height={32} className="h-6 w-auto opacity-80" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-clay-500/20 text-clay-400 font-display font-bold text-sm flex items-center justify-center">
            {t.name.charAt(0)}
          </div>
        )}
        <span className="text-cream-100/70 text-sm font-medium">{t.name}</span>
      </div>
    </div>
  );
}

export default function DespreNoiContent() {
  const { t, locale } = useLanguage();

  const values = useMemo(
    () =>
      valueDefs.map((v) => ({
        icon: v.icon,
        title: t(`despreNoi.values.${v.key}.title`),
        desc: t(`despreNoi.values.${v.key}.desc`),
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale]
  );

  const corpItems = useMemo(
    () =>
      corpDefs.map((c) => ({
        title: t(`despreNoi.corpItems.${c.key}.title`),
        desc: t(`despreNoi.corpItems.${c.key}.desc`),
        image: c.image,
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale]
  );

  const testimonials = useMemo(
    () =>
      testimonialDefs.map((item) => ({
        quote: t(`despreNoi.testimonials.${item.key}.quote`),
        name: t(`despreNoi.testimonials.${item.key}.name`),
        logo: item.logo,
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale]
  );

  const heroFacts = t("despreNoi.heroFacts");

  return (
    <>
      <section className="relative bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src="/images/petroconsult-2.jpeg"
            alt="Intrarea principală în Petroconsult Business Centre"
            fill
            priority
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-navy-950/95 via-navy-950/80 to-navy-950/55" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16 sm:pt-28 sm:pb-20">
          <Reveal className="ml-auto max-w-3xl">
            <p className="text-clay-400 font-semibold tracking-wide uppercase text-sm mb-4">
              {t("despreNoi.heroEyebrow")}
            </p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white max-w-3xl leading-tight">
              {t("despreNoi.heroTitle")}
            </h1>
            <p className="mt-6 max-w-2xl text-cream-100/85 text-lg leading-relaxed">{t("despreNoi.heroText")}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/spatii-disponibile"
                className="inline-flex items-center rounded-full bg-clay-500 hover:bg-clay-600 transition-colors px-7 py-3.5 font-semibold text-white"
              >
                {t("nav.spatiiDisponibile")}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/40 hover:bg-white/10 transition-colors px-7 py-3.5 font-semibold text-white"
              >
                {t("common.contactCta")}
              </Link>
            </div>
            <p className="mt-10 max-w-2xl text-sm text-cream-100/60 leading-relaxed">
              {heroFacts.map((f, i) => (
                <span key={f}>
                  {f}
                  {i < heroFacts.length - 1 && (
                    <span className="mx-3 text-clay-400/50" aria-hidden>
                      ·
                    </span>
                  )}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">
            {t("despreNoi.cineSuntemEyebrow")}
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-6">
            {t("despreNoi.cineSuntemTitle")}
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 mt-10">
          <Reveal delay={100}>
            <p className="text-charcoal-600 leading-relaxed">{t("despreNoi.p1")}</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-charcoal-600 leading-relaxed">{t("despreNoi.p2")}</p>
          </Reveal>
        </div>

        <Reveal delay={250} className="relative aspect-[21/9] rounded-2xl overflow-hidden mt-12">
          <Image
            src="/images/petroconsult-7.jpeg"
            alt="Birou Petroconsult Invest cu diplomă de mulțumire"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 1024px, 100vw"
          />
        </Reveal>

        <Reveal delay={300} className="grid sm:grid-cols-2 gap-x-10 gap-y-6 mt-12 items-start">
          <p className="text-charcoal-600 leading-relaxed">{t("despreNoi.p3")}</p>
          <Link
            href="/spatii-disponibile"
            className="inline-flex items-center gap-2 font-semibold text-navy-800 hover:text-clay-600 transition-colors sm:justify-self-start sm:mt-1"
          >
            {t("despreNoi.planuriLink")}
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>

      <section className="bg-cream-200 border-y border-cream-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <Reveal className="hidden lg:block text-center max-w-2xl mx-auto mb-14">
            <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">
              {t("despreNoi.diferentiazaEyebrow")}
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800">
              {t("despreNoi.diferentiazaTitle")}
            </h2>
          </Reveal>
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 120}>
                <ValueCard v={v} />
              </Reveal>
            ))}
          </div>
          <ScrollCardSwap
            eyebrow={t("despreNoi.diferentiazaEyebrow")}
            title={t("despreNoi.diferentiazaTitle")}
            items={values.map((v, i) => (
              <ValueCard key={i} v={v} />
            ))}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
        <Reveal className="hidden lg:block max-w-2xl mb-14">
          <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">
            {t("despreNoi.portofoliuEyebrow")}
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800">
            {t("despreNoi.portofoliuTitle")}
          </h2>
        </Reveal>

        <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {corpItems.map((c, i) => (
            <Reveal key={i} delay={i * 130}>
              <CorpCard c={c} i={i} />
            </Reveal>
          ))}
        </div>
        <ScrollCardSwap
          eyebrow={t("despreNoi.portofoliuEyebrow")}
          title={t("despreNoi.portofoliuTitle")}
          items={corpItems.map((c, i) => (
            <CorpCard key={i} c={c} i={i} />
          ))}
        />

        <Reveal className="flex flex-wrap gap-4 mt-14">
          <Link
            href="/spatii-disponibile"
            className="inline-flex items-center rounded-full bg-clay-500 hover:bg-clay-600 transition-colors px-7 py-3.5 font-semibold text-white"
          >
            {t("nav.spatiiDisponibile")}
          </Link>
        </Reveal>
      </section>

      <section className="bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <Reveal className="hidden lg:block text-center max-w-2xl mx-auto mb-14">
            <p className="text-clay-400 font-semibold tracking-wide uppercase text-sm mb-3">
              {t("despreNoi.companiiEyebrow")}
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              {t("despreNoi.companiiTitle")}
            </h2>
          </Reveal>

          <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((item, i) => (
              <Reveal key={i} delay={i * 120}>
                <TestimonialCard t={item} />
              </Reveal>
            ))}
          </div>
          <ScrollCardSwap
            eyebrow={t("despreNoi.companiiEyebrow")}
            title={t("despreNoi.companiiTitle")}
            dark
            items={testimonials.map((item, i) => (
              <TestimonialCard key={i} t={item} />
            ))}
          />
        </div>
      </section>

      <section className="relative bg-cream-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 sm:py-24 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-5">
              {t("despreNoi.finalCtaTitle")}
            </h2>
            <p className="text-charcoal-600 text-lg mb-9 max-w-xl mx-auto">{t("despreNoi.finalCtaText")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-clay-500 hover:bg-clay-600 transition-colors px-7 py-3.5 font-semibold text-white"
              >
                {t("common.contactCta")}
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center rounded-full border border-navy-800/20 hover:bg-navy-800/5 transition-colors px-7 py-3.5 font-semibold text-navy-800"
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
