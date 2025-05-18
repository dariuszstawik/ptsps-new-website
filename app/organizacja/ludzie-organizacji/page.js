import PageHeader from "@/components/global-components/page-header";
import SectionTitle from "@/components/global-components/section-title";
import TeamSection from "@/components/organizacja-page/team-section";

import { client } from "@/lib/contentful/client";

async function getContentfulContent() {
  const resBoardMember = await client.getEntries({
    content_type: "boardMember",
  });

  const reskomisjaRewizyjna = await client.getEntries({
    content_type: "komisjaRewizyjna",
  });

  const reskomisjaEtyczna = await client.getEntries({
    content_type: "komisjaEtyczna",
  });

  return {
    boardMember: resBoardMember.items,
    komisjaRewizyjna: reskomisjaRewizyjna.items,
    komisjaEtyczna: reskomisjaEtyczna.items,
  };
}

export const metadata = {
  title: "Ludzie organizacji | PTSPS",
  description: "Poznaj zespół Polskiego Towarzystwa Superwizji Pracy Socjalnej",
};

export default async function LudzieOrganiacji() {
  const content = await getContentfulContent();

  const boardMember = content.boardMember;
  const komisjaRewizyjna = content.komisjaRewizyjna;
  const komisjaEtyczna = content.komisjaEtyczna;

  return (
    <div className="mb-20">
      <PageHeader>Organizacja</PageHeader>
      <div className="mt-20">
        <SectionTitle>Ludzie organizacji</SectionTitle>
      </div>
      <TeamSection
        boardMember={boardMember}
        komisjaRewizyjna={komisjaRewizyjna}
        komisjaEtyczna={komisjaEtyczna}
      />
    </div>
  );
}
