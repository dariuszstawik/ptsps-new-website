import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PageHeader from "../page-header";
import SectionTitle from "../section-title";

export default async function DocumentArticle({ article }) {
  return (
    <>
      <PageHeader>Dokumenty</PageHeader>
      <section className="max-w-4xl mx-auto px-8 mb-20">
        <SectionTitle>{article.fields.title}</SectionTitle>
        {/* <h2>{article.fields.title}</h2> */}
        <div className="text-base leading-relaxed my-12">
          {documentToReactComponents(article.fields.content)}
        </div>
      </section>
    </>
  );
}
