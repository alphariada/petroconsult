import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact",
  description:
    "Contactează Petroconsult Business Centre pentru închirieri de spații de birouri în Ploiești. Str. Diligenței, nr. 18.",
  alternates: {
    canonical: "/contact",
  },
};

const infoItems = [
  { icon: MapPinIcon, label: "Adresă", value: siteConfig.address },
  { icon: PhoneIcon, label: "Telefon", value: siteConfig.phone, href: siteConfig.phoneHref },
  { icon: MailIcon, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
];

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-10 py-16 sm:py-20">
      <Reveal className="max-w-2xl mb-12">
        <p className="text-clay-600 font-semibold tracking-wide uppercase text-sm mb-3">Contact</p>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-navy-800 mb-4">
          Hai să discutăm despre spațiul tău
        </h1>
        <p className="text-charcoal-600 leading-relaxed">
          Scrie-ne câteva cuvinte despre ce cauți — îți răspundem cât mai curând cu
          disponibilitatea actuală.
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
        <Reveal delay={100} className="lg:col-span-2 space-y-6">
          {infoItems.map((item) => (
            <div key={item.label} className="flex items-start gap-4">
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
