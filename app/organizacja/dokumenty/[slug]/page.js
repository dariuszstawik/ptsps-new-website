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

export default async function Document({ params }) {
  const { slug } = params;
  const document = await getContntfulContent(slug);

  return <DocumentArticle article={document} />;
}
