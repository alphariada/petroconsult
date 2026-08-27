import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import ScrollFeatures from "@/components/ScrollFeatures";

const stats = [
  { value: 8000, suffix: " mp", label: "suprafață totală" },
  { value: 3, suffix: "", label: "corpuri de clădire" },
  { value: 2024, suffix: "", label: "renovare completă" },
  { value: 150, suffix: "", label: "persoane, sală evenimente" },
];

const features = [
  {
    title: "Locație în inima Ploieștiului",
    desc: "Str. Diligenței nr. 18, în centrul orașului — acces facil la transport public, bănci, restaurante și instituții publice, la câțiva pași de tot ce ai nevoie.",
    image: "/images/petroconsult-2.jpeg",
  },
  {
    title: "Spații complet renovate",
    desc: "Corpuri modernizate în 2024, cu finisaje premium, aer condiționat, încălzire centralizată, internet de mare viteză și lift — pregătite să găzduiască orice tip de activitate.",
    image: "/images/petroconsult-4.jpeg",
  },
  {
    title: "Curte interioară & parcare privată",
    desc: "Un spațiu verde amenajat cu iazuri și zone de relaxare, plus locuri de parcare private pentru angajați și vizitatori — o gură de aer în mijlocul orașului.",
    image: "/images/petroconsult-6.jpeg",
  },
];

const corpThumbs = [
  { name: "Corp C1A", image: "/images/petroconsult-4.jpeg" },
  { name: "Corp C1B", image: "/images/petroconsult-10.jpeg" },
  { name: "Corp C2", image: "/images/petroconsult-1.jpeg" },
];

const partners = [
  { name: "Shipo", logo: "/images/shipo-logo.png" },
  { name: "Site Salt", logo: "/images/site-salt-logo.png" },
];

export default function Home() {
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
              Petroconsult Business Centre &middot; Ploiești
            </p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white max-w-2xl leading-tight">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-cream-100/85 text-lg leading-relaxed">
              Spații de birouri moderne, renovate în 2024, în centrul Ploieștiului.
              Trei corpuri de clădire, peste 8.000 mp, pregătite pentru afacerea ta.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/spatii-disponibile"
                className="inline-flex items-center rounded-full bg-clay-500 hover:bg-clay-600 transition-colors px-7 py-3.5 font-semibold text-white"
              >
                Spații Disponibile
              </Link>
              <Link
                href="/planuri"
                className="inline-flex items-center rounded-full border border-white/40 hover:bg-white/10 transition-colors px-7 py-3.5 font-semibold text-white"
              >
                Vezi Planurile
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="relative bg-navy-900 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="font-display font-bold text-2xl sm:text-3xl text-white">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-cream-100/70 text-sm mt-1">{s.label}</div>
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
          />
        </Reveal>
        <Reveal delay={150} className="order-1 lg:order-2">
          <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">Despre noi</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-6">
            O clădire cu istorie, reinventată pentru afacerile de azi
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-4">
            SC Petroconsult Invest SRL face parte din grupul Petroconsult, una dintre
            primele firme înființate după Revoluție. Clădirea de pe Str. Diligenței
            nr. 18, fostul sediu IPIP SA, a fost reabilitată constant și oferă astăzi
            spații moderne de închiriat pentru birouri, firme de consultanță, IT și
            servicii financiare, în centrul Ploieștiului.
          </p>
          <Link
            href="/despre-noi"
            className="inline-flex items-center gap-2 font-semibold text-navy-800 hover:text-clay-600 transition-colors"
          >
            Află mai multe despre noi
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>

      <section className="bg-cream-200 border-y border-cream-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 sm:py-14">
          <ScrollFeatures
            eyebrow="De ce Petroconsult"
            title="Tot ce are nevoie afacerea ta, într-un singur loc"
            items={features}
          />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <Reveal className="flex flex-col items-center text-center">
          <p className="text-charcoal-400 font-medium text-sm uppercase tracking-wide mb-6">
            Companii care activează în Petroconsult Business Centre
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
            <p className="text-clay-400 font-semibold tracking-wide uppercase text-sm mb-3">Corpurile clădirii</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-5">
              Trei corpuri, o singură adresă
            </h2>
            <p className="text-cream-100/75 leading-relaxed mb-8 max-w-md">
              Complexul Petroconsult Business Centre este format din trei corpuri —
              C1A, C1B și C2 — fiecare cu planuri, suprafețe și etaje disponibile
              pentru închiriere.
            </p>
            <Link
              href="/planuri"
              className="inline-flex items-center rounded-full bg-clay-500 hover:bg-clay-600 transition-colors px-7 py-3.5 font-semibold text-white"
            >
              Vezi Corpurile și Planurile
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {corpThumbs.map((c) => (
              <div key={c.name} className="text-center">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-2">
                  <Image src={c.image} alt={c.name} fill className="object-cover" />
                </div>
                <span className="text-cream-100/80 text-xs font-medium">{c.name}</span>
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
            <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">Sala de evenimente</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-5">
              Un spațiu pentru până la 150 de persoane
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-8 max-w-md">
              Organizează conferințe, training-uri sau evenimente corporate în sala
              noastră din Corp C1B, la parter — un spațiu flexibil, ușor accesibil,
              potrivit pentru evenimente de anvergură.
            </p>
            <Link
              href="/sala-de-evenimente"
              className="inline-flex items-center gap-2 font-semibold text-navy-800 hover:text-clay-600 transition-colors"
            >
              Detalii despre sala de evenimente
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="relative bg-navy-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 sm:py-24 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-5">
              Hai să găsim spațiul potrivit afacerii tale
            </h2>
            <p className="text-cream-100/75 text-lg mb-9 max-w-xl mx-auto">
              Scrie-ne sau sună-ne — îți răspundem rapid cu disponibilitatea actuală
              și te ajutăm să alegi spațiul potrivit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-clay-500 hover:bg-clay-600 transition-colors px-7 py-3.5 font-semibold text-white"
              >
                Contactează-ne
              </Link>
              <a
                href={siteConfig.phone1Href}
                className="inline-flex items-center rounded-full border border-white/40 hover:bg-white/10 transition-colors px-7 py-3.5 font-semibold text-white"
              >
                Sună la {siteConfig.phone1}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
