import { notFound } from "next/navigation";
import CorpContent from "@/components/CorpContent";
import { corpsConfig, corpSlugs } from "@/config/corps";
import ro from "@/locales/ro";

export function generateStaticParams() {
  return corpSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const config = corpsConfig[slug];
  if (!config) return {};

  return {
    title: ro.nav[config.navKey],
    description: ro.corp[config.dataKey].metaDescription,
    alternates: {
      canonical: `/corp/${slug}`,
    },
  };
}

export default async function CorpPage({ params }) {
  const { slug } = await params;
  if (!corpsConfig[slug]) notFound();

  return <CorpContent slug={slug} />;
}
