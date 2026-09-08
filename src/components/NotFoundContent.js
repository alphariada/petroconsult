"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFoundContent() {
  const { t } = useLanguage();

  return (
    <section className="max-w-2xl mx-auto px-6 lg:px-10 py-24 sm:py-32 text-center">
      <p className="font-display font-extrabold text-7xl sm:text-8xl text-clay-400/60 mb-6">404</p>
      <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">{t("notFound.eyebrow")}</p>
      <h1 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-5">{t("notFound.title")}</h1>
      <p className="text-charcoal-600 leading-relaxed mb-10">{t("notFound.text")}</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-clay-500 hover:bg-clay-600 transition-colors px-7 py-3.5 font-semibold text-white"
        >
          {t("notFound.homeBtn")}
        </Link>
        <Link
          href="/spatii-disponibile"
          className="inline-flex items-center rounded-full border border-navy-800/20 hover:bg-navy-800/5 transition-colors px-7 py-3.5 font-semibold text-navy-800"
        >
          {t("notFound.spatiiBtn")}
        </Link>
      </div>
    </section>
  );
}
