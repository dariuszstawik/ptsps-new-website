import PageHeader from "@/components/global-components/page-header";
import SectionTitle from "@/components/global-components/section-title";
import SideMenu from "@/components/global-components/side-menu";
import SingleArticle from "@/components/global-components/single-article";
import Timeline from "@/components/historia-page/timeline";
import { TeamSection } from "@/components/organizacja-page/team-section";

export default function RealizacjaSuperwizje() {
  return (
    <div>
      <PageHeader>Projekty</PageHeader>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-28">
        <div className="col-span-2">
          <SingleArticle
            title="Unicef 2022-2024: superwizje"
            img="/szkolenie.jpg"
            className="py-0"
            // hasSlider
          >
            {/* <TeamSection /> */}
            {/* <Timeline /> */}
            <p className="">
              <b>
                Uruchomiliśmy 180 grup superwizyjnych, które spotykały się przez
                10 miesięcy (raz w miesiącu po 5 godzin).
              </b>
            </p>{" "}
            <p>
              Superwizją objęliśmy 166 JOPS (Jednostek Organizacyjnych Pomocy
              Społecznej – czyli najczęściej Miejskie i Gminne Ośrodki Pomocy
              Społecznej). W superwizjach prowadzonych w ramach projektu
              uczestniczyło 1915 osób - pracowników pomocy społecznej. Do
              realizacji tego przedsięwzięcia zatrudniliśmy niemal wszystkich
              certyfikowanych superwizorów pracy socjalnej (55 osób)*.
              Superwizje zakończyliśmy zgodnie z założeniami projektowymi we
              wrześniu 2023.
            </p>
            <p>
              * stan na październik 2022 – aktualnie liczba certyfikowanych
              superwizorów i superwizorek zwiększyła się.
            </p>
          </SingleArticle>
        </div>
        <SideMenu
          // isBlue
          className="lg:mt-28"
          title="Więcej o projekcie"
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
