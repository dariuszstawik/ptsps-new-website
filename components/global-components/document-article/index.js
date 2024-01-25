import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PageHeader from "../page-header";

export default async function DocumentArticle({ article }) {
  return (
    <>
      <PageHeader>Dokumenty</PageHeader>
      <section className="max-w-4xl mx-auto px-8 mb-16">
        <h2>{article.fields.title}</h2>
        <div className="text-base leading-relaxed my-4">
          {documentToReactComponents(article.fields.content)}
        </div>
      </section>
    </>
  );
}
