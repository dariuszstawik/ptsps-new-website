import LibraryCard from "@/components/biblioteka-page/library-card";
import PageHeader from "@/components/global-components/page-header";
import SectionTitle from "@/components/global-components/section-title";
import { client } from "@/lib/contentful/client";

async function getContentfulContent() {
  const resContent = await client.getEntries({
    content_type: "library",
  });
  return resContent.items;
}

export const metadata = {
  title: "Biblioteka | PTSPS",
  description: "Publikacje związane z superwizją pracy socjalnej",
};

export default async function BibliotekaPage() {
  const content = await getContentfulContent();

  const libraryList = (itemsAmount) => {
    return (
      content &&
      content.slice(0, itemsAmount).map((item, i) => {
        return (
          <li key={i} className="mx-auto">
            <LibraryCard
              title={item.fields.title}
              img={item.fields.image ? item.fields.image : ""}
              file={item.fields.publication.fields.file.url}
            />{" "}
          </li>
        );
      })
    );
  };

  return (
    <div>
      <PageHeader>Biblioteka</PageHeader>
      <section className="container mx-auto pb-32 pt-6">
        <div className="my-16">
          <SectionTitle>Nasze publikacje</SectionTitle>
        </div>
        <ul className="grid grid-cols-1 gap-16 xl:grid-cols-3 mx-auto px-10">
          {libraryList(9)}
        </ul>
      </section>
    </div>
  );
}
