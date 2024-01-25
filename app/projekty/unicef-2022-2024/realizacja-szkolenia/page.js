import PageHeader from "@/components/global-components/page-header";
import SectionSubtitle from "@/components/global-components/section-subtitle";
import SectionTitle from "@/components/global-components/section-title";
import SideMenu from "@/components/global-components/side-menu";
import SingleArticle from "@/components/global-components/single-article";
import Timeline from "@/components/historia-page/timeline";
import { TeamSection } from "@/components/organizacja-page/team-section";

export default function RealizacjaSzkolenia() {
  return (
    <div>
      <PageHeader>Projekty</PageHeader>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-28">
        <div className="col-span-2">
          <SingleArticle
            title="Unicef 2022-2024: szkolenia"
            img="/szkolenie.jpg"
            className="py-0"
            // hasSlider
          >
            {/* <TeamSection /> */}
            {/* <Timeline /> */}
            <p className="">
              <b>
                Jesteśmy w trakcie realizacji tego komponentu – podsumowanie
                przedstawimy w kwietniu 2024.
              </b>
            </p>{" "}
          </SingleArticle>
        </div>
        <SideMenu
          // isBlue
          className="lg:mt-28"
          itemsList={[
            {
              title: "Unicef 2022-2024 - wstęp",
              path: "/projekty/unicef-2022-2024",
            },
            {
              title: "Tło projektu",
              path: "/projekty/unicef-2022-2024/tlo-projektu",
            },
            {
              title: "Założenia projektu",
              path: "/projekty/unicef-2022-2024/zalozenia-projektu",
            },
            {
              title: "Realizacja: superwizje",
              path: "/projekty/unicef-2022-2024/realizacja-superwizje",
            },
            {
              title: "Realizacja: programy",
              path: "/projekty/unicef-2022-2024/realizacja-programy",
            },
            {
              title: "Realizacja: szkolenia",
              path: "/projekty/unicef-2022-2024/realizacja-szkolenia",
            },
          ]}
        />
      </section>
    </div>
  );
}
