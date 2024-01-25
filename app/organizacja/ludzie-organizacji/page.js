import PageHeader from "@/components/global-components/page-header";
import SectionTitle from "@/components/global-components/section-title";
import { TeamSection } from "@/components/organizacja-page/team-section";

export default function LudzieOrganiacji() {
  return (
    <div className="mb-20">
      <PageHeader>Organizacja</PageHeader>
      <div className="mt-20">
        <SectionTitle>Ludzie organizacji</SectionTitle>
      </div>
      <TeamSection />
    </div>
  );
}
