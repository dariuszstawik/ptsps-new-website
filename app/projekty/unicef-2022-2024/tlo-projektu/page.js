import PageHeader from "@/components/global-components/page-header";
import SectionTitle from "@/components/global-components/section-title";
import SideMenu from "@/components/global-components/side-menu";
import SingleArticle from "@/components/global-components/single-article";
import Timeline from "@/components/historia-page/timeline";
import { TeamSection } from "@/components/organizacja-page/team-section";

export default function TloProjektu() {
  return (
    <div>
      <PageHeader>Projekty</PageHeader>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2">
          <SingleArticle
            title="Unicef 2022-2024: tło projektu"
            img="/unicef3.jpg"
            className="py-0"
            // hasSlider
          >
            {/* <TeamSection /> */}
            {/* <Timeline /> */}
            <p className="">
              <b>
                24 lutego 2022 roku Rosja rozpoczęła pełnowymiarową inwazję na
                Ukrainę. Cztery miesiące później według danych ONZ liczba
                ukraińskich uchodźców przekroczyła 7,7 mln osób. Największa
                liczba, 4,190 mln uchodźców, wkroczyła do Polski (informacja
                polskiej Straży Granicznej z 20 czerwca 2022 r.).
              </b>
            </p>{" "}
            <p>
              Ponad 1,2 mln uchodźców zarejestrowało się do ochrony czasowej w
              Polsce i uzyskało numer PESEL. Uchodźcy – głównie kobiety, w tym
              matki z dziećmi, na podstawie przepisów ustawy z dnia 12 marca
              2022 r. o pomocy obywatelom Ukrainy w związku z konfliktem
              zbrojnym na terytorium Ukrainy oraz po otrzymaniu numeru PESEL
              uzyskały pełne prawo do świadczeń oraz usług systemu pomocy
              społecznej.{" "}
            </p>
            <p>
              Polski system pomocy społecznej – a przede wszystkim ośrodki
              pomocy społecznej, na których spoczywa odpowiedzialność za
              bezpośrednie wsparcie obywateli Ukrainy – nie był przygotowany
              zarówno organizacyjnie, jak i merytorycznie, na zapewnienie tego
              wsparcia.
            </p>
            <p>
              Ustawa z dnia 12.03.2022 r. o pomocy obywatelom Ukrainy w związku
              z konfliktem zbrojnym na terytorium Ukrainy (Dz. U. 2022, poz.
              583) nałożyła szereg obowiązków na ośrodki pomocy społecznej wobec
              uchodźców. Uchodźcy z Ukrainy mają takie same prawa jak obywatele
              polscy. Oznacza to, że ośrodki pomocy społecznej powinny udzielać
              pomocy materialnej (świadczenia pieniężne – stałe, okresowe i na
              określony cel), zasiłków i pożyczek na samodzielność ekonomiczną,
              zasiłków na kontynuowanie nauki oraz pomocy materialnej na naukę
              języka polskiego. Uchodźcom przysługuje również szereg form
              wsparcia w postaci pomocy niepieniężnej – wsparcia materialnego
              (takiego jak bilety, odzież czy żywność), a także szeroko
              rozumianej pracy socjalnej, poradnictwa specjalistycznego i
              interwencji kryzysowej - jeśli zajdzie taka potrzeba. Dodatkowo
              uchodźcy z Ukrainy mają prawo do bezpłatnej opieki
              psychologicznej.{" "}
            </p>
            <p>
              Ustawa nie tworzy więc (w opisanym wyżej zakresie) nowych form
              wsparcia, ale udostępnia funkcjonujący już system pomocy
              społecznej kilku milionom nowych klientów. Stworzyło to szereg
              problemów. System nie był przygotowany na tak duże obciążenie.
              Drugą trudnością stała się bariera językowa i kulturowa –
              pracownicy pomocy społecznej doświadczali znacznych trudności w
              komunikacji z uchodźcami (zwłaszcza w bardziej skomplikowanych
              przypadkach) oraz w zrozumieniu motywów ich działania, jeśli
              wynikały one z przynależności do innych kręgów kulturowych.
              Trzecim problemem było nasilenie trudności
              emocjonalno-psychologicznych u uchodźców wynikających z
              dramatycznych doświadczeń wynikających z konfliktu zbrojnego.
            </p>
            <p>
              Najważniejszym problemem okazały się jednak luki w kompetencjach
              pracowników socjalnych – zwłaszcza w zakresie wiedzy i
              umiejętności psychologicznych niezbędnych do pogłębionej pracy
              socjalnej. Podczas gdy pracownicy socjalni są bardzo kompetentni w
              obszarze administracyjnym i w stosowaniu procedur, to brakuje im
              umiejętności w bezpośredniej pracy z klientami. Pojawienie się w
              systemie dużej liczby nowych klientów (uchodźców), który są
              szczególnie wymagający (ze względu na wysoki poziom stresu,
              trudności oraz dramatyczną sytuację życiową) uwydatniło ten
              problem.
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
