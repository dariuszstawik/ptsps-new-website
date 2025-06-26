import PageHeader from "@/components/global-components/page-header";
import SectionTitle from "@/components/global-components/section-title";
import SupervisorsMap from "@/components/superwizja-page/supervisors-map";
import { client } from "@/lib/contentful/client";

async function getContentfulContent() {
  const resContent = await client.getEntries({
    content_type: "supervisor",
  });
  return resContent.items;
}

export const metadata = {
  title: "Baza certyfikowanych superwizorów pracy socjalnej | PTSPS",
  description:
    "Certyfikowani superwizorzy pracy socjalnej. Znajdź superwizora w swojej okolicy!",
};

export default async function ListaSuperwizorow() {
  const supervisors = await getContentfulContent();

  return (
    <div>
      <PageHeader>Baza superwizorów pracy socjalnej</PageHeader>
      <section className="container mx-auto pb-32 pt-6">
        <div className="my-16">
          <SectionTitle>Certyfikowani superwizorzy</SectionTitle>
        </div>
        <SupervisorsMap content={supervisors} />
      </section>
    </div>
  );
}
