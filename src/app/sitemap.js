const BASE_URL = "https://petroconsult.ro";

const routes = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/despre-noi", priority: 0.8, changeFrequency: "monthly" },
  { path: "/spatii-disponibile", priority: 0.9, changeFrequency: "weekly" },
  { path: "/sala-de-evenimente", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
