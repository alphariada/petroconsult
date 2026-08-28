import Image from "next/image";
import Link from "next/link";
import { siteConfig, navLinks, corpLinks } from "@/config/site";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo-white.png"
            alt="Petroconsult Business Centre"
            width={140}
            height={92}
            className="h-14 w-auto mb-4"
          />
          <p className="text-sm text-cream-100/70 leading-relaxed">
            {siteConfig.tagline}
          </p>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-clay-400 mb-4">
            Meniu
          </h3>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream-100/80 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-clay-400 mb-4">
            Corpurile Clădirii
          </h3>
          <ul className="space-y-2.5">
            {corpLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream-100/80 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-clay-400 mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-cream-100/80">
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="w-4 h-4 mt-0.5 shrink-0 text-clay-400" />
              {siteConfig.address}
            </li>
            <li>
              <a href={siteConfig.phoneHref} className="flex items-center gap-2.5 hover:text-white transition-colors">
                <PhoneIcon className="w-4 h-4 shrink-0 text-clay-400" />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                <MailIcon className="w-4 h-4 shrink-0 text-clay-400" />
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream-100/60">
          <p>© {new Date().getFullYear()} Petroconsult Business Centre. Toate drepturile rezervate.</p>
          <Link href="/politica-de-confidentialitate" className="hover:text-white transition-colors">
            Politica de Confidențialitate
          </Link>
        </div>
      </div>
    </footer>
  );
}
