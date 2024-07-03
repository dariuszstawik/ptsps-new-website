import PageHeader from "@/components/global-components/page-header";
import SupervisorProfile from "@/components/superwizja-page/supervisor-profile";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "supervisor" });

  return res.items.map((post) => ({
    slug: post.slug,
  }));
}

async function getContentfulSupervisor(slug) {
  const resSupervisors = await client.getEntries({
    content_type: "supervisor",
    "fields.slug": slug,
  });

  return resSupervisors.items[0];
}

// async function getContentfulArticles() {
//   const resSupervisors = await client.getEntries({
//     content_type: "supervisor",
//   });

//   return resArticles.items;
// }

export default async function Supervisior({ params }) {
  const { slug } = params;

  const supervisor = await getContentfulSupervisor(slug);
  //   const supervisionArticles = await getContentfulArticles();

  return (
    <div>
      <PageHeader>Lista superwizorów</PageHeader>
      <section className="mb-10">
        <div className="">
          <SupervisorProfile
            supervisor={supervisor}
            className="py-0"
          ></SupervisorProfile>
        </div>
      </section>
    </div>
  );
}
