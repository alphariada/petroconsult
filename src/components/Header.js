"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, navLinks } from "@/config/site";
import { PhoneIcon, MailIcon } from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";

function LanguageSwitch({ className = "" }) {
  const { locale, setLocale } = useLanguage();
  const isRo = locale === "ro";

  return (
    <div className={`relative inline-flex items-center rounded-full bg-cream-200 p-1 ${className}`}>
      <span
        className="absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-white shadow-sm transition-transform duration-300 ease-out"
        style={{ transform: isRo ? "translateX(0%)" : "translateX(100%)" }}
        aria-hidden
      />
      <button
        type="button"
        onClick={() => setLocale("ro")}
        aria-pressed={isRo}
        className={`relative z-10 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
          isRo ? "text-navy-800" : "text-charcoal-400 hover:text-charcoal-600"
        }`}
      >
        <span className="text-base leading-none">🇷🇴</span> RO
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={!isRo}
        className={`relative z-10 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
          !isRo ? "text-navy-800" : "text-charcoal-400 hover:text-charcoal-600"
        }`}
      >
        <span className="text-base leading-none">🇬🇧</span> EN
      </button>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-cream-100/95 backdrop-blur supports-[backdrop-filter]:bg-cream-100/80 border-b border-cream-300">
      <div className="hidden md:flex items-center justify-end gap-6 bg-navy-900 text-cream-100 text-sm px-6 lg:px-10 py-1.5">
        <a href={siteConfig.phoneHref} className="flex items-center gap-1.5 hover:text-clay-400 transition-colors">
          <PhoneIcon className="w-3.5 h-3.5" />
          {siteConfig.phone}
        </a>
        <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-clay-400 transition-colors">
          <MailIcon className="w-3.5 h-3.5" />
          {siteConfig.email}
        </a>
      </div>

      <div className="flex items-center justify-between px-6 lg:px-10 py-3">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo-transparent.png"
            alt="Petroconsult Business Centre"
            width={44}
            height={29}
            className="h-9 w-auto"
            priority
          />
          <span className="font-display font-bold text-navy-800 leading-tight text-sm sm:text-base">
            Petroconsult
            <span className="block text-[0.7em] font-medium text-charcoal-600 tracking-wide">
              Business Centre
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal-900 hover:text-clay-600 transition-colors"
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitch />
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-clay-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-clay-600 transition-colors"
          >
            {t("common.contactCta")}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitch />
          <button
            type="button"
            aria-label={t("common.menuOpen")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1.5 p-2"
          >
            <span className={`h-0.5 w-6 bg-navy-800 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-navy-800 transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-navy-800 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-cream-300 bg-cream-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-charcoal-900 hover:text-clay-600 transition-colors"
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-clay-500 px-5 py-2.5 text-sm font-semibold text-white"
          >
            {t("common.contactCta")}
          </Link>
          <div className="pt-2 border-t border-cream-300 flex flex-col gap-2 text-sm text-charcoal-600">
            <a href={siteConfig.phoneHref} className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-clay-600" />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2">
              <MailIcon className="w-4 h-4 text-clay-600" />
              {siteConfig.email}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
