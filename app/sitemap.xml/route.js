import { client } from "@/lib/contentful/client";

const BASE_URL = "https://ptsps.pl/"; // Podmień na swoją domenę

export async function GET() {
  // Pobierz wszystkie typy z Contentful
  const supervisorEntries = await client.getEntries({
    content_type: "supervisor",
  });
  const newsEntries = await client.getEntries({ content_type: "news" });
  const supervisionArticles = await client.getEntries({
    content_type: "supervisionArticle",
  });

  // Statyczne ścieżki
  const staticPages = [
    "", // homepage
    "/o-nas",
    "/aktualnosci",
    "/organizacja/o-nas",
    "/organizacja/historia",
    "/organizacja/dokumenty",
    "organizacja/ludzie-organizacji",
    "/kontakt",
    "/biblioteka",
    "/projekty",
    "/projekty/study-circle",
    "/projekty/unicef-2022-2024",
    "/projekty/",
    "/superwizja",
    "/superwizja/jak-sfinansowac-superwizje",
    "/superwizja/jak-wprowadzac-superwizje-do-organizacji",
    "/superwizja/standardy-superwizji-pracy-socjalnej",
    "/superwizja/lista-superwizorow",
  ];

  // Dynamiczne ścieżki
  const supervisorPaths = supervisorEntries.items.map(
    (item) => `/superwizja/lista-superwizorow/${item.fields.slug}`
  );
  const newsPaths = newsEntries.items.map(
    (item) => `/aktualnosci/${item.fields.slug}`
  );
  const supervisionArticlePaths = supervisionArticles.items.map(
    (item) => `/superwizja/${item.fields.slug}`
  );

  // Złącz wszystko
  const allPaths = [
    ...staticPages,
    ...supervisorPaths,
    ...newsPaths,
    ...supervisionArticlePaths,
  ];

  // Wygeneruj XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPaths
      .map((path) => {
        return `
      <url>
        <loc>${BASE_URL}${path}</loc>
      </url>`;
      })
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
