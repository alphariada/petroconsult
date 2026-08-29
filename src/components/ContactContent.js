"use client";

import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactContent() {
  const { t } = useLanguage();

  const infoItems = [
    { icon: MapPinIcon, label: t("contact.infoAdresa"), value: siteConfig.address },
    { icon: PhoneIcon, label: t("contact.infoTelefon"), value: siteConfig.phone, href: siteConfig.phoneHref },
    { icon: MailIcon, label: t("contact.infoEmail"), value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-10 py-16 sm:py-20">
      <Reveal className="max-w-2xl mb-12">
        <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">{t("contact.eyebrow")}</p>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-4">{t("contact.title")}</h1>
        <p className="text-charcoal-600 leading-relaxed">{t("contact.subtitle")}</p>
      </Reveal>

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
        <Reveal delay={100} className="lg:col-span-2 space-y-6">
          {infoItems.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-clay-100 text-clay-600 flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-charcoal-400 mb-0.5">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-navy-800 font-semibold hover:text-clay-600 transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-navy-800 font-semibold">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={200} className="lg:col-span-3">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
