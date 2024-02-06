import PageHeader from "@/components/global-components/page-header";
import SectionSubtitle from "@/components/global-components/section-subtitle";
import SectionTitle from "@/components/global-components/section-title";
import SideMenu from "@/components/global-components/side-menu";
import SingleArticle from "@/components/global-components/single-article";
import Timeline from "@/components/historia-page/timeline";
import { TeamSection } from "@/components/organizacja-page/team-section";

export default function RealizacjaProgramy() {
  return (
    <div>
      <PageHeader>Projekty</PageHeader>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2">
          <SingleArticle
            title="Unicef 2022-2024: programy"
            img="/szkolenie.jpg"
            className="py-0"
            // hasSlider
          >
            {/* <TeamSection /> */}
            {/* <Timeline /> */}
            <p className="">
              <b>
                Opracowaliśmy 20 programów szkoleniowych na wybrane tematy,
                odpowiadające potrzebom pracowników pomocy społecznej i
                jednocześnie potrzebom uchodźców z Ukrainy. Stworzenie listy
                tematów poprzedziliśmy starannymi badaniami potrzeb pracowników
                oraz analizą wiedzy o specyficznych trudnościach doświadczanych
                przez uchodźców wojennych. Szczególny nacisk położyliśmy na
                kwestie pomocy dzieciom - dlatego opracowaliśmy 6 szkoleń
                poświęconych sprawom młodych ludzi.
              </b>
            </p>{" "}
            <p>
              Wszystkie programy mają elastyczną strukturę - domyślnie
              zaplanowane są jako szkolenie dwudniowe (16h), jednak do każdego
              przewidziany jest program dodatkowego dnia (8h) - tzw. follow-up,
              realizowanego zwykle po kilku tygodniach od szkolenia głównego.
              Takie rozwiązanie (jeżeli jest możliwe dla ośrodka/grupy) pozwala
              pogłębić tematykę poruszoną na szkoleniu, wyjaśnić wątpliwości,
              sprawdzić efektywność szkolenia w praktyce. Program szkolenia jest
              skonstruowany tak, że jest możliwe zrealizowanie go w formacie
              jednodniowym (8h).
            </p>
            <div className="-ml-2 mb-6">
              <SectionSubtitle isAlignedLeft>Tematy szkoleń</SectionSubtitle>
            </div>
            <p>
              <h4 className="mt-4 mb-2">1. Normy i zaburzenia rozwojowe</h4>
              Podstawowa wiedza o rozwoju psychicznym dziecka, etapach rozwoju,
              osiągnięciach rozwojowych. Szkolenie dostarcza praktycznej wiedzy
              i wskazówek pozwalających dokładnie obserwować zachowanie dziecka
              w zależności od jego wieku oraz zauważać nieprawidłowości lub
              niepokojące objawy. Druga część szkolenia poświęcona jest
              umiejętnościom oceny – pozwala uczestnikom dostrzec wczesne
              sygnały wskazujące na zaburzenia w procesie rozwoju dziecka lub
              dysfunkcję funkcji psychicznych. Pracownicy socjalni powinni być w
              stanie dostrzec oznaki mogące wskazywać na nieprawidłowości, co
              pozwoli im skierować dziecko do specjalisty dysponującego
              profesjonalnymi narzędziami diagnostycznymi.
            </p>
            <p>
              <h4 className="mt-6 mb-2">2. Zadania rozwojowe</h4>
              Jest to rozszerzenie szkolenia z norm rozwojowych. Uczy
              rozpoznawania momentów krytycznych w rozwoju dziecka, w których ma
              ono do wykonania specjalne zadania. Pracownik socjalny/asystent
              rodziny, rozumiejąc etap, na którym znajduje się dziecko, może
              wspierać dziecko w osiągnięciu sukcesu lub stymulować otoczenie
              (opiekunów) do wspierania dziecka na tym etapie.
            </p>
            <p>
              <h4 className="mt-6 mb-2">3. Jak być dobrym dorosłym?</h4>
              Pracownicy socjalni i asystenci rodzinni, będąc w stałym kontakcie
              z rodziną, mogą być ważnym czynnikiem sprzyjającym prawidłowemu
              rozwojowi dzieci i w pewnym stopniu ograniczać straty wynikające z
              dysfunkcji rodziny. Świadome budowanie kontaktu z dzieckiem przez
              pracownika socjalnego, odpowiednia reakcja na jego potrzeby
              psychologiczne może znacząco wpłynąć na zdrowie psychiczne
              dziecka. Szkolenie służy poszerzeniu wiedzy o kluczowych momentach
              w rozwoju dziecka, jego potrzebach, rozwijaniu umiejętności
              rozpoznawania deficytów psychicznych oraz edukacji w zakresie
              budowania bezpiecznego kontaktu z dzieckiem i adekwatnego
              reagowania na jego potrzeby.
            </p>
            <p>
              <h4 className="mt-6 mb-2">4. Zachowania samobójcze</h4>
              Szkolenie dotyczy umiejętności wczesnego rozpoznawania sygnałów
              samobójczych u dzieci, zrozumienia dynamiki procesów psychicznych
              prowadzących do zachowań samobójczych, umiejętności posługiwania
              się Skalą Oceny Zachowań Samobójczych, przeprowadzania wywiadów z
              osobami zgłaszającymi myśli samobójcze oraz wdrażania odpowiednich
              strategii i procedur w celu zapobiegania takim zachowaniom.
            </p>
            <p>
              <h4 className="mt-6 mb-2">
                5. System wsparcia i ochrony dzieci w Polsce
              </h4>
              Szkolenie jest przeznaczone przede wszystkim dla odbiorców
              ukraińskich (wolontariusze, tłumacze). Opieka nad nieletnimi w
              Polsce opiera się na innych zasadach (regułach prawnych) niż na
              Ukrainie. Szkolenie przedstawia ramy prawne dotyczące dzieci oraz
              typowe problemy wynikające z tych ram, które rozwiązuje pomoc
              społeczna. Szkolenie to można wdrożyć, jeśli w placówce jest grupa
              pracowników, która potrzebuje tej wiedzy – zakładamy, że większość
              pracowników socjalnych jest wystarczająco zaznajomiona z systemem.
            </p>
            <p>
              <h4 className="mt-6 mb-2">
                6. Dzieci bez opieki i przebywające w pieczy zastępczej
              </h4>
              Szczególnym problemem jest kwestia dzieci ukraińskich, które
              straciły rodziców, zostały porzucone, są odseparowane od rodziców
              lub znajdują się w tymczasowej opiece obcych i dzieci z
              ewakuowanych ukraińskich domów dziecka. Status prawny tych dzieci
              stwarza różne problemy i wymaga rozwiązań, na które nie mamy jasno
              określonych procedur. Ponadto poszukiwanie rodzin/rodziców dzieci
              jest nowym zjawiskiem, a pracownicy socjalni nie mają dużego
              doświadczenia w tej kwestii. Szkolenie stanowi kompendium wiedzy o
              aktach prawnych, procedurach, metodykach, które można zastosować w
              takich przypadkach. Szkolenie opiera się głównie na analizie
              rzeczywistych przypadków i doświadczeń ośrodków pomocy społecznej
              zebranych przez naszą organizację. W ten sposób przekazujemy
              uczestnikom szereg dobrych praktyk w zakresie rozwiązywania
              problemów porzuconych dzieci. Ważnym elementem szkolenia jest
              także rozwijanie umiejętności wsparcia emocjonalnego dziecka w
              sytuacji porzucenia/utraty rodziców oraz radzenia sobie ze
              skutkami długotrwałej instytucjonalizacji.
            </p>
            <p>
              Część szkolenia jest poświęcona przedstawieniu aktualnej wiedzy na
              temat negatywnych skutków instytucjonalizacji dzieci oraz
              metod/strategii zapobiegania tym skutkom lub minimalizowania owych
              skutków w sytuacjach, gdy niemożliwe jest uniknięcie umieszczenia
              dziecka w placówce/instytucji opiekuńczej lub w rodzinie
              zastępczej. format: DD
            </p>
            <p>
              <h4 className="mt-6 mb-2">7. Strata i żałoba</h4>
              Wiedza w zakresie doświadczenia straty, psychologicznych
              konsekwencji i schematów procesu żałoby (i zakłóceń tego procesu).
              Szkolenie skupia się na konkretnych umiejętnościach wspierania
              osoby doświadczającej żałoby i straty.{" "}
            </p>
            <p>
              <h4 className="mt-6 mb-2">8. Trauma zastępcza</h4>
              Szkolenie przedstawia zjawisko Wtórnego Stresu Pourazowego –
              wiedza o przyczynach i objawach STS pozwoli uczestnikom wcześnie
              zauważyć niepokojące objawy (u siebie lub u innych osób) i
              skutecznie przeciwdziałać rozwojowi tego zjawiska.
            </p>
            <p>
              <h4 className="mt-6 mb-2">9. Wypalenie zawodowe</h4>
              Szkolenie ma na celu wyposażenie uczestników w pełną wiedzę na
              temat zjawiska wypalenia zawodowego, tak aby mogli samodzielnie
              zdiagnozować swoje osobiste ryzyko doświadczania tego zjawiska i
              stosować skuteczne metody jego zapobiegania. Ważnym elementem
              szkolenia jest wyposażenie uczestników w skuteczne sposoby
              radzenia sobie z nadmiernym stresem oraz zaplanowanie własnej
              strategii dążenia do równowagi.
            </p>
            <p>
              <h4 className="mt-6 mb-2">10. Interwencja kryzysowa</h4>
              Szkolenie dotyczy doraźnej pomocy dzieciom i dorosłym w sytuacji
              kryzysu psychicznego. Celem jest rozwijanie umiejętności
              rozpoznawania i oceny stanu kryzysowego, stosowania odpowiednich
              strategii wsparcia osoby w kryzysie, właściwej oceny możliwości i
              ograniczeń pracy interwencyjnej.
            </p>
            <p>
              <h4 className="mt-6 mb-2">
                11. Praca z dziećmi doświadczającymi przemocy
              </h4>
              Celem szkolenia jest przedstawienie sytuacji dziecka krzywdzonego.
              Dziecko bywa krzywdzone przez bliskie osoby - członków rodziny,
              przez osoby obce dorosłe oraz doświadcza przemocy rówieśniczej.
              Ujęcie tematu w szerszej perspektywie, uświadomi uczestnikom
              szkolenia kwestie związane z rozumieniem mechanizmów
              psychologicznych, które występują kiedy dziecko jest krzywdzone w
              wymienionych sytuacjach. Pomoże to beneficjentom szkolenia,
              zrozumieć w jakiej sytuacji takie dziecko może się znajdować.
              Zrozumienie tych mechanizmów, będzie pracownikom pomocy społecznej
              pomagać zaplanować skuteczne działania zmierzające do poprawy jego
              sytuacji i zatrzymania przemocy. Ważne jest też wzmocnienie
              członków rodziny, którzy mogą działać na rzecz poprawy jego
              sytuacji. Pracownicy pomocy społecznej nauczą się jak
              przeprowadzać takie wsparcie.
            </p>
            <p>
              <h4 className="mt-6 mb-2">12. Cudzoziemcy w prawie polskim</h4>
              Celem szkolenia jest uzyskanie przez pracowników socjalnych,
              asystentów rodziny i koordynatorów pieczy zastępczej wiedzy i
              narzędzi pozwalających im na efektywną współpracę z cudzoziemcami
              przebywającymi w Polsce, między innymi poprzez zrozumienie wyzwań
              i trudności, z jakimi mierzą się cudzoziemcy oraz sposobów ich
              przezwyciężania, a także poprzez uzyskanie wiedzy na temat
              odnoszących się do nich regulacji prawnych.
            </p>
            <p>
              <h4 className="mt-6 mb-2">13. Pomoc społeczna – kompendium</h4>
              Szkolenie przeznaczone jest dla pracowników/wolontariuszy pomocy
              społecznej, którzy nie mają doświadczenia z polskim systemem
              pomocy społecznej. Jest to kompendium na temat zasad rządzących
              pomocą społeczną w Polsce, struktury systemu, zadań i form
              wsparcia dla różnych grup interesariuszy.
            </p>
            <p>
              <h4 className="mt-6 mb-2">
                14. Narzędzia używane w pracy socjalnej
              </h4>
              Szkolenie to jest przeznaczone dla pracowników
              socjalnych/wolontariuszy, którzy nie mają doświadczenia z polskim
              systemem opieki społecznej. Teoria i praktyczne zastosowanie
              podstawowych narzędzi pracy socjalnej – wywiad środowiskowy i
              kontrakt socjalny.
            </p>
            <p>
              <h4 className="mt-6 mb-2">15. Różnice kulturowe</h4>
              Głównym celem szkolenia będzie wsparcie uczestników w zrozumieniu
              i komunikacji z uchodźcami z Ukrainy. Zrozumienie różnic i
              posiadanie kompetencji kulturowych – umiejętność dostosowania
              wzorców komunikacji, współpracy i działania do odmiennych wzorców
              jest ważnym elementem zwiększania efektywności pracy osób
              zaangażowanych w pomoc uchodźcom.
            </p>
            <p>
              <h4 className="mt-6 mb-2">
                16. Praca z osobami doświadczającymi objawów
                psychopatologicznych
              </h4>
              Wielu klientów opieki społecznej doświadcza problemów lub zaburzeń
              zdrowia psychicznego, problemy ze zdrowiem psychicznym zwiększają
              podatność na dysfunkcje społeczne. Uchodźcy są dodatkowo silnie
              zestresowani, co u niektórych z nich doprowadzi do rozwoju
              poważnych objawów. Podstawowa wiedza z zakresu psychopatologii
              pozwala nam (1) dostosować komunikację, metody pracy i oczekiwania
              do specyficznych dla danego zaburzenia trudności, (2) lepiej
              przewidywać zachowania i reakcje klienta oraz (3) ocenić stan
              klienta i ewentualnie interweniować (np. w kierunku leczenia).
            </p>
            <p>
              Szkolenie dostarcza wiedzy na temat najczęstszych zaburzeń
              psychicznych i objawów psychopatologicznych spotykanych u klientów
              pomocy społecznej. Umiejętność rozpoznawania objawów
              psychopatologicznych w połączeniu z podstawową wiedzą o
              klasyfikacji zaburzeń pozwala osobom pracującym z klientami pomocy
              społecznej lepiej przewidywać reakcje i dostosowywać metody pracy,
              sposoby komunikacji do stanu i możliwości klienta. To ostatecznie
              wpływa na efektywność pracy.
            </p>
            <p>
              <h4 className="mt-6 mb-2">
                17. Skuteczna komunikacja i wywieranie wpływu
              </h4>
              Szkolenie ma na celu podniesienie umiejętności komunikacyjnych
              pracowników socjalnych – jest to intensywne szkolenie praktycznego
              stosowania wzorców skutecznej komunikacji, dialogu motywacyjnego,
              sposobów wywierania wpływu, prowadzenia dialogu i wykorzystywania
              asertywnych komunikatów w kontekście pracy/relacji z klientem
              pomocy społecznej.
            </p>
            <p>
              <h4 className="mt-6 mb-2">
                18. Organizowanie społeczności lokalnej jako metoda pracy z
                mniejszościami narodowymi
              </h4>
              Szkolenie w całości oparte jest o wypracowany i obowiązujący model
              środowiskowej pracy socjalnej/organizowania społeczności lokalnej,
              który stanowi podstawę pracy m.in. w Centrach Usług Społecznych.
            </p>
            <p>
              <h4 className="mt-6 mb-2">19. Gender Based Violence</h4>
              Celem szkolenia jest przygotowanie uczestników do pracy w obszarze
              przeciwdziałania przemocy domowej i przemocy ze względu na płeć w
              zakresie pracy z osobami doznającymi przemocy. Uczestnicy zyskają
              wiedzę o mechanizmach przemocy domowej, z uwzględnieniem aspektu
              psychologicznego, społecznego i prawnego, zgodnie z aktualnym
              stanem wiedzy i obowiązującym porządkiem prawnym. Nabędą
              umiejętność identyfikowania przemocy, kontaktu i pracy z osobami
              doznającymi przemocy, formułowania planu pomocy, budowania planu
              bezpieczeństwa i strategii interwencyjnych.
            </p>
            <p>
              <h4 className="mt-6 mb-2">20. Case Management</h4>
              (w trakcie realizacji)
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
