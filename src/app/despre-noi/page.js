import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import { AwardIcon, TrendingUpIcon, UsersIcon, QuoteIcon } from "@/components/icons";

export const metadata = {
  title: "Despre Noi",
  description:
    "SC Petroconsult Invest SRL face parte din Grupul Petroconsult, una dintre primele companii românești înființate după Revoluție. Descoperă povestea, clădirile și companiile din Petroconsult Business Centre, Ploiești.",
  alternates: {
    canonical: "/despre-noi",
  },
};

const heroFacts = [
  "8.000 mp spații administrate",
  "3 corpuri de clădire",
  "renovare completă în 2024",
  "birou de protocol pentru 20 persoane",
];

const values = [
  {
    icon: AwardIcon,
    title: "Experiență și stabilitate",
    desc: "Facem parte din Grupul Petroconsult, una dintre primele companii private înființate în România după Revoluție — o prezență constantă în afacerile din Ploiești, de peste trei decenii.",
  },
  {
    icon: TrendingUpIcon,
    title: "Investiție continuă",
    desc: "Reabilităm și modernizăm neîntrerupt clădirile din patrimoniul nostru. Cea mai recentă etapă: renovarea completă a ansamblului, finalizată în 2024.",
  },
  {
    icon: UsersIcon,
    title: "Parteneriat pe termen lung",
    desc: "De la firme locale la companii cunoscute din IT și logistică, construim relații de închiriere durabile, bazate pe încredere, flexibilitate și dialog direct.",
  },
];

const corpItems = [
  {
    title: "Corp C1A",
    desc: "Compus din Parter + 2 etaje + Mansardă, complet renovat și ocupat aproape în totalitate. Lift, finisaje moderne și un design funcțional, gândit pentru echipe care au nevoie de un sediu reprezentativ.",
    image: "/images/petroconsult-4.jpeg",
  },
  {
    title: "Corp C1B",
    desc: "Demisol + Parter + 2 etaje + Mansardă, modernizat integral în 2024. Peste 4.000 mp de spații flexibile, cu lift nou, finisaje premium și iluminare LED — potrivite pentru birouri, showroom-uri sau sedii de firmă.",
    image: "/images/petroconsult-10.jpeg",
  },
  {
    title: "Corp C2",
    desc: "Amplasat în curtea interioară a complexului, oferă un mediu de lucru privat și liniștit, cu acces controlat și securitate — ideal pentru firme de consultanță și servicii financiare.",
    image: "/images/petroconsult-1.jpeg",
  },
];

const testimonials = [
  {
    quote:
      "Spații moderne, bine amplasate în centrul orașului, ideale pentru orice tip de afacere.",
    name: "Dan G.",
  },
  {
    quote:
      "Un loc potrivit pentru cei care caută un spațiu de lucru profesionist, într-o zonă accesibilă.",
    name: "Shipo",
    logo: "/images/shipo-logo.png",
  },
  {
    quote:
      "Spațiile sunt bine organizate și ușor adaptabile nevoilor unui business.",
    name: "Site Salt",
    logo: "/images/site-salt-logo.png",
  },
];

export default function DespreNoi() {
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
              Despre Petroconsult Business Centre
            </p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white max-w-3xl leading-tight">
              O clădire cu istorie, un centru de afaceri cu viitor
            </h1>
            <p className="mt-6 max-w-2xl text-cream-100/85 text-lg leading-relaxed">
              SC Petroconsult Invest SRL face parte din Grupul Petroconsult — una dintre
              primele companii românești înființate după Revoluție. De peste trei decenii,
              investim constant în reabilitarea și modernizarea patrimoniului nostru
              imobiliar din centrul Ploieștiului.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/spatii-disponibile"
                className="inline-flex items-center rounded-full bg-clay-500 hover:bg-clay-600 transition-colors px-7 py-3.5 font-semibold text-white"
              >
                Spații Disponibile
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/40 hover:bg-white/10 transition-colors px-7 py-3.5 font-semibold text-white"
              >
                Contactează-ne
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
            Cine suntem
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-6">
            Fostul sediu IPIP SA, reinventat pentru afacerile de azi
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 mt-10">
          <Reveal delay={100}>
            <p className="text-charcoal-600 leading-relaxed">
              SC Petroconsult Invest SRL face parte din grupul Petroconsult, una dintre
              primele firme înființate în România după Revoluție. De atunci, compania s-a
              dezvoltat constant, investind neîntrerupt în reabilitarea proprietăților
              deținute.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-charcoal-600 leading-relaxed">
              Clădirea de pe Str. Diligenței nr. 18 — fostul sediu al IPIP SA — a devenit,
              prin reabilitări succesive, una dintre adresele emblematice ale Ploieștiului.
              Astăzi găzduiește Petroconsult Business Centre: trei corpuri de clădire,
              peste 8.000 mp de spații moderne, chiar în centrul orașului.
            </p>
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
          <p className="text-charcoal-600 leading-relaxed">
            Recepție cu acces securizat 24/7, parcare privată cu barieră, bucătărie și
            spații comune moderne, plus un birou de protocol pentru până la 20 de
            persoane — toate gândite pentru companii care își doresc un sediu
            reprezentativ. Oferim spre închiriere birouri, spații pentru firme de
            consultanță, IT, servicii financiare și alte activități comerciale, într-un
            mediu de afaceri dinamic, în chiar centrul Ploieștiului.
          </p>
          <Link
            href="/spatii-disponibile"
            className="inline-flex items-center gap-2 font-semibold text-navy-800 hover:text-clay-600 transition-colors sm:justify-self-start sm:mt-1"
          >
            Vezi planurile disponibile
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>

      <section className="bg-cream-200 border-y border-cream-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">
              Ce ne diferențiază
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800">
              Un partener stabil pentru afacerea ta
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 120}
                className="bg-cream-100 rounded-2xl p-8 border border-cream-300"
              >
                <div className="w-12 h-12 rounded-xl bg-clay-100 text-clay-600 flex items-center justify-center mb-6">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-navy-800 mb-3">
                  {v.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Portofoliul nostru
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800">
            Trei corpuri, un singur ansamblu de business
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {corpItems.map((c, i) => (
            <Reveal key={c.title} delay={i * 130} className="group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
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
                <h3 className="absolute bottom-5 left-5 right-5 font-display font-bold text-2xl text-white">
                  {c.title}
                </h3>
              </div>
              <p className="text-charcoal-600 leading-relaxed mt-5">{c.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-wrap gap-4 mt-14">
          <Link
            href="/spatii-disponibile"
            className="inline-flex items-center rounded-full bg-clay-500 hover:bg-clay-600 transition-colors px-7 py-3.5 font-semibold text-white"
          >
            Spații Disponibile
          </Link>
        </Reveal>
      </section>

      <section className="bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-clay-400 font-semibold tracking-wide uppercase text-sm mb-3">
              Companii care ne-au ales
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Încrederea celor care lucrează aici, în fiecare zi
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 120}
                className="bg-navy-900 rounded-2xl p-8 border border-white/10 flex flex-col h-full"
              >
                <QuoteIcon className="w-7 h-7 text-clay-400 mb-5" />
                <p className="text-cream-100/85 leading-relaxed mb-6 flex-1">
                  &bdquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  {t.logo ? (
                    <Image
                      src={t.logo}
                      alt={t.name}
                      width={100}
                      height={32}
                      className="h-6 w-auto opacity-80"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-clay-500/20 text-clay-400 font-display font-bold text-sm flex items-center justify-center">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <span className="text-cream-100/70 text-sm font-medium">{t.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-cream-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 sm:py-24 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-5">
              Scrie o nouă etapă din povestea Petroconsult Business Centre
            </h2>
            <p className="text-charcoal-600 text-lg mb-9 max-w-xl mx-auto">
              Alătură-te companiilor care și-au ales sediul în centrul Ploieștiului. Hai să
              găsim împreună spațiul potrivit pentru afacerea ta.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-clay-500 hover:bg-clay-600 transition-colors px-7 py-3.5 font-semibold text-white"
              >
                Contactează-ne
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center rounded-full border border-navy-800/20 hover:bg-navy-800/5 transition-colors px-7 py-3.5 font-semibold text-navy-800"
              >
                Sună la {siteConfig.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
