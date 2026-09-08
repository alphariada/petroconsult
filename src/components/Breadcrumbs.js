"use client";

import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";

const BASE_URL = "https://petroconsult.ro";

export default function Breadcrumbs({ items }) {
  const { t } = useLanguage();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("common.home"), item: `${BASE_URL}/` },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="bg-cream-100 border-b border-cream-300">
        <ol className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex flex-wrap items-center gap-1.5 text-sm text-charcoal-400">
          <li>
            <Link href="/" className="hover:text-clay-600 transition-colors">
              {t("common.home")}
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <ChevronRightIcon className="w-3.5 h-3.5 shrink-0" />
              {item.href ? (
                <Link href={item.href} className="hover:text-clay-600 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-charcoal-600 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
