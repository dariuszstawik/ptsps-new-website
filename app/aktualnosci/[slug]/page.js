import PageHeader from "@/components/global-components/page-header";
import SingleArticle from "@/components/global-components/single-article";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "news" });

  return res.items.map((post) => ({
    slug: post.fields.slug,
  }));
}

// Dynamiczne generowanie metadanych
export async function generateMetadata({ params }) {
  const { slug } = params;
  const newsPost = await getContentfulNewsPosts(slug);

  return {
    title: `${newsPost.fields.title || "Aktualności"} | PTSPS`,
    description: newsPost.fields.lead,
  };
}

async function getContentfulNewsPosts(slug) {
  const resNewsPosts = await client.getEntries({
    content_type: "news",
    "fields.slug": slug,
  });

  return resNewsPosts.items[0];
}

export default async function NewsPost({ params }) {
  const { slug } = params;

  const newsPost = await getContentfulNewsPosts(slug);

  return (
    <>
      <div className="pb-10">
        <PageHeader isH2>Aktualności</PageHeader>

        <SingleArticle
          title={newsPost.fields.title}
          lead={newsPost.fields.lead}
          contentfulImg={newsPost.fields.image ? newsPost.fields.image : ""}
        >
          {documentToReactComponents(newsPost.fields.body)}
        </SingleArticle>
      </div>
    </>
  );
}

// import PageHeader from "@/components/global-components/page-header";
// import SingleArticle from "@/components/global-components/single-article";
// import { client } from "@/lib/contentful/client";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// export async function generateStaticParams() {
//   const res = await client.getEntries({ content_type: "news" });

//   return res.items.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export const metadata = {
//   title: {newsPost.fields.title},
//   description:
//     "Aktualności związane z działalnością Polskiego Towarzystwa SUperwizji Pracy Socjalnej",
// };

// async function getContentfulNewsPosts(slug) {
//   const resNewsPosts = await client.getEntries({
//     content_type: "news",
//     "fields.slug": slug,
//   });

//   return resNewsPosts.items[0];
// }

// export default async function NewsPost({ params }) {
//   const { slug } = params;

//   const newsPost = await getContentfulNewsPosts(slug);

//   return (
//     <>
//       <div className="pb-10">
//         <PageHeader>Aktualności</PageHeader>

//         <SingleArticle
//           title={newsPost.fields.title}
//           lead={newsPost.fields.lead}
//           contentfulImg={newsPost.fields.image ? newsPost.fields.image : ""}
//         >
//           {documentToReactComponents(newsPost.fields.body)}
//         </SingleArticle>
//       </div>
//     </>
//   );
// }
