import PageHeader from "@/components/global-components/page-header";
import SideMenu from "@/components/global-components/side-menu";
import SingleArticle from "@/components/global-components/single-article";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "supervisionArticle" });

  return res.items.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const supervisionArticle = await getContentfulArticle(slug);

  return {
    title: `${supervisionArticle.fields.title || "Superwizja"} | PTSPS`,
    description: supervisionArticle.fields.lead || "",
  };
}

async function getContentfulArticle(slug) {
  const resArticles = await client.getEntries({
    content_type: "supervisionArticle",
    "fields.slug": slug,
  });

  return resArticles.items[0];
}

async function getContentfulArticles() {
  const resArticles = await client.getEntries({
    content_type: "supervisionArticle",
  });

  return resArticles.items;
}

export default async function SupervisionArticle({ params }) {
  const { slug } = params;

  const supervisionArticle = await getContentfulArticle(slug);
  const supervisionArticles = await getContentfulArticles();

  return (
    <div>
      <PageHeader isH2>Superwizja</PageHeader>
      <section className="grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-8 mb-10">
        <div className="col-span-2">
          <SingleArticle
            title={
              supervisionArticle.fields.title
                ? supervisionArticle.fields.title
                : ""
            }
            lead={
              supervisionArticle.fields.lead
                ? supervisionArticle.fields.lead
                : ""
            }
            img={
              supervisionArticle.fields.image
                ? supervisionArticle.fields.image.fields.file.url
                : ""
            }
            // isTitleAlignedLeft
            // img="/unicef-logo.png"
            className="py-0"
          >
            {documentToReactComponents(supervisionArticle.fields.body)}{" "}
          </SingleArticle>
        </div>
        <SideMenu
          //   isBlue
          title="Więcej o superwizji"
          className="lg:mt-32"
          itemsList={supervisionArticles.map((article) => ({
            title: article.fields.title,
            path: `/superwizja/${article.fields.slug}`,
            order: article.fields.order,
          }))}
          // itemsList={[
          //   {
          //     title: "Czym jest superwizja pracy socjalnej?",
          //     path: "",
          //   },
          //   {
          //     title: "Jak wprowadzić superwizję do organizacji?",
          //     path: "/superwizja/jak-wprowadzac-superwizje-do-organizacji",
          //   },
          //   {
          //     title: "Jak finansować superwizję?",
          //     path: "/superwizja/jak-finansowac-superwizje?",
          //   },
          //   {
          //     title: "Standardy superwizji",
          //     path: "/superwizja/standardy-superwizji",
          //   },
          // ]}
        />
      </section>
    </div>
  );
}
