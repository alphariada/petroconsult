import SpatiiDisponibileContent from "@/components/SpatiiDisponibileContent";

export const metadata = {
  title: "Spații Disponibile",
  description:
    "Explorează harta interactivă a ansamblului Petroconsult Business Centre — trei corpuri de clădire, peste 8.000 mp, în centrul Ploieștiului. Alege un corp pentru a vedea etajele și birourile disponibile.",
  alternates: {
    canonical: "/spatii-disponibile",
  },
};

export default function SpatiiDisponibile() {
  return <SpatiiDisponibileContent />;
}
