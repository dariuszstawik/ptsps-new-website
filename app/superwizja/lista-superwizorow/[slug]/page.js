import PageHeader from "@/components/global-components/page-header";
import SupervisorProfile from "@/components/superwizja-page/supervisor-profile";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "supervisor" });

  return res.items.map((post) => ({
    slug: post.fields.slug,
  }));
}

async function getContentfulSupervisor(slug) {
  const resSupervisors = await client.getEntries({
    content_type: "supervisor",
    "fields.slug": slug,
  });

  return resSupervisors.items[0];
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const supervisor = await getContentfulSupervisor(slug);

  const fullName = supervisor.fields.name || "Superwizor";
  const region = supervisor.fields.region
    ? `| ${supervisor.fields.region}`
    : "";
  // const shortDescription = supervisor.fields.shortDescription || "";

  return {
    title: `${fullName}: superwizor pracy socjalnej ${region}`,
    description: `${fullName} - certyfikowany superwizor pracy socjalnej | Polskie Towarzystwo Superwizji Pracy Socjalnej`,
    keywords: [
      "superwizor",
      "praca socjalna",
      "superwizja",
      fullName,
      supervisor.fields.region || "",
    ],
    openGraph: {
      title: `${fullName} | Superwizor pracy socjalnej`,
      description: `Poznaj profil i doświadczenie superwizora pracy socjalnej: ${fullName}`,
      type: "profile",
    },
  };
}

export default async function Supervisor({ params }) {
  const { slug } = params;

  const supervisor = await getContentfulSupervisor(slug);

  return (
    <div>
      <PageHeader isH2>Lista superwizorów</PageHeader>
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

// import PageHeader from "@/components/global-components/page-header";
// import SupervisorProfile from "@/components/superwizja-page/supervisor-profile";
// import { client } from "@/lib/contentful/client";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// export async function generateStaticParams() {
//   const res = await client.getEntries({ content_type: "supervisor" });

//   return res.items.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export async function generateMetadata({ params }) {
//   const { slug } = params;
//   const supervisor = await getContentfulSupervisor(slug);

//   return {
//     title: `${
//       supervisor.fields.name || "Superwizor"
//     }: superwizor pracy socjalnej`,
//     description: "Baza superwizorów pracy socjalnej | PTSPS",
//   };
// }

// async function getContentfulSupervisor(slug) {
//   const resSupervisors = await client.getEntries({
//     content_type: "supervisor",
//     "fields.slug": slug,
//   });

//   return resSupervisors.items[0];
// }

// export default async function Supervisior({ params }) {
//   const { slug } = params;

//   const supervisor = await getContentfulSupervisor(slug);

//   return (
//     <div>
//       <PageHeader isH2>Lista superwizorów</PageHeader>
//       <section className="mb-10">
//         <div className="">
//           <SupervisorProfile
//             supervisor={supervisor}
//             className="py-0"
//           ></SupervisorProfile>
//         </div>
//       </section>
//     </div>
//   );
// }
