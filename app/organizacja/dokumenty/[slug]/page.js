import DocumentArticle from "@/components/global-components/document-article";
import { client } from "@/lib/contentful/client";

async function getContntfulContent(slug) {
  const res = await client.getEntries({
    content_type: "documents",
    "fields.slug": slug,
  });
  return res.items[0];
}

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "documents" });

  return res.items.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const document = await getContntfulContent(slug);

  return {
    title: `${document.fields.SeoTitle || document.fields.title} | PTSPS`,
    description: "Dokumenty Polskiego Towarzystwa Superwizji Pracy Socjalnej",
  };
}

export default async function Document({ params }) {
  const { slug } = params;
  const document = await getContntfulContent(slug);

  return <DocumentArticle article={document} />;
}
