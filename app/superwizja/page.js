import ArticleSubtitle from "@/components/global-components/article-subtitle";
import ArticleSubtitle2 from "@/components/global-components/article-subtitle2";
import PageHeader from "@/components/global-components/page-header";
import SideMenu from "@/components/global-components/side-menu";
import SingleArticle from "@/components/global-components/single-article";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getContentfulArticles() {
  const resArticles = await client.getEntries({
    content_type: "supervisionArticle",
  });

  return resArticles.items;
}

export default async function Superwizja() {
  const supervisionArticles = await getContentfulArticles();

  const mainArticle = supervisionArticles.find(
    (article) => article.fields.isMain
  );

  return (
    <div>
      <PageHeader>Superwizja</PageHeader>
      <section className="grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-8 mb-10">
        <div className="col-span-2">
          <SingleArticle
            // title="Czym jest superwizja pracy socjalnej?"
            title={mainArticle.fields.title}
            // isTitleAlignedLeft
            // img="/unicef-logo.png"
            className="py-0"
          >
            {/* <p>
              Superwizja pracy socjalnej to szczególny, wieloaspektowy ogląd
              pracy służący rozwiązaniu trudności merytorycznych i emocjonalnych
              związanych z wykonywaniem pracy. To dwustronny proces pomagający
              poszerzać świadomość, rozwijać umiejętności, osiągać lepsze
              wyniki, działać poprzez rzetelną ocenę, omówienie problemów,
              ukierunkowaną praktykę i sprzężenie zwrotne (feedback). Warunkiem
              powodzenia tak zaplanowanego przedsięwzięcia jest zgoda
              uczestników superwizji na ujawnienie swoich doświadczeń w pracy z
              ludźmi i na ich analizę (Wódz, Leśniak-Berek, 2007)
            </p>
            <ArticleSubtitle>
              Istnieje wiele definicji superwizji pracy socjalnej
            </ArticleSubtitle>
            <p>
              W rodzimej literaturze można znaleźć kilka zbieżnych ze sobą
              pojęć:
            </p>
            <div as p className="my-3">
              <blockquote>
                „Superwizja to proces uczenia się i ciągłego rozwoju zawodowego
                służący wzmacnianiu profesjonalnych kompetencji poprzez
                poszukiwanie źródeł trudności w pracy i możliwości ich pokonania
                . Jest to profesjonalny dialog, w którym omawiane są kwestie
                poznawcze, emocjonalne i etyczne wynikające z trójstronnej
                relacji pomiędzy klientem, pracownikiem i placówką,
                umożliwiający praktykom refleksję nad jakością swej pracy”
              </blockquote>
              (Łuczyńska, Olech 2013)
            </div>
            <div as p className="my-3">
              <blockquote>
                „Superwizja pracy socjalnej to specyficzny proces uczenia się, w
                którym pracownik socjalny lub inna osoba realizująca pracę
                socjalną, współpracując z superwizorem rozwija swoje
                umiejętności interpersonalne i uczy się postępowania
                metodycznego w pracy z klientem pomocy społecznej lub
                rozwiązywania kwestii społecznej. Proces superwizji opiera się
                na współpracy z superwizorem lub współpracy z superwizorem i
                grupą superwizyjną”
              </blockquote>
              (Domaradzki, Krzyszkowski, Sosnowski, Włoch, 2017)
            </div>
            <p>
              Superwizja pracy socjalnej w Polsce czerpie z doświadczeń
              superwizji w psychoterapii. Definicje zagraniczne z obszaru
              psychoterapii wskazują na istotę superwizji:
            </p>
            <div as p className="my-3">
              <blockquote>
                „Superwizja jest to szczególny rodzaj interakcji pomiędzy
                specjalistami w danej dziedzinie pomagania, której partnerzy
                posiadają zbliżony poziom kompetencji, wiedzy i doświadczenia
                lub pozostają w relacji „nauczyciel – uczeń”. Jej istotą jest
                wymiana informacji dotyczących pracy superwizowanego z jego
                klientami”
              </blockquote>
              (Worthington)
            </div>
            <div as p className="my-3">
              <blockquote>
                „Superwizja jest procesem uczenia się, w którym psychoterapeuta
                współpracuje z bardziej doświadczonym kolegą po fachu, by w
                procesie ciągłego rozwoju zawodowego wzbogacić własne
                umiejętności. To z kolei sprzyja dobrostanowi jego klienta i
                zapewnia mu bezpieczeństwo”
              </blockquote>
              (Gilbert, Evans, 2004)
            </div>
            <ArticleSubtitle>
              Superwizja w pracy socjalnej to rodzaj systemowego wspierania
            </ArticleSubtitle>
            <ArticleSubtitle2>
              1. Procesów interpersonalnych w zespole pracowniczym
            </ArticleSubtitle2>
            <p>
              W trakcie wykonywania pracy zawsze powstają interakcje emocjonalne
              pomiędzy współpracującymi pracownikami, czasem mają one charakter
              wspierający a czasem obciążający pracownika. Jeśli pracownik
              socjalny w swoim zespole współpracowników doświadcza trudnych
              emocjonalnie dla niego sytuacji powinien taką sytuację poddać
              superwizji. Superwizor zauważający skrywany konflikt, lub napięcie
              emocjonalne pomiędzy pracownikami nie powinien pracować pomimo
              tego napięcia, lecz powinien ujawnić, co widzi i ujawnioną kwestię
              uczynić przedmiotem superwizji.
            </p>

            <ArticleSubtitle2>
              2. Procesów interpersonalnych pomiędzy pracownikami a klientami
            </ArticleSubtitle2>
            <p>
              Superwizor zakłada, że nośnikiem zmian w sytuacji osoby/rodziny,
              której udzielana jest pomoc, jest relacja pomiędzy pracownikiem a
              jego klientem. Dlatego ważnym przedmiotem superwizji są relacje
              interpersonalne pomiędzy pracownikiem a klientem.
            </p>

            <ArticleSubtitle2>
              3. Procesów intrapsychicznych pracowników
            </ArticleSubtitle2>
            <p>
              Na jakość i efektywność pracy niewątpliwie wpływa kondycja
              psychofizyczna pracownika. Superwizor nie może pominąć kwestii
              silnych emocji czy przekonań pracownika, które rzutują na
              planowanie lub realizowanie pracy. Do tego obszaru zaburzeń możemy
              zaliczyć konflikt etyczny, oraz pojawiające się silne emocje
              pracownika w odpowiedzi na zachowania klienta lub ujawniony przez
              niego problem.
            </p>

            <ArticleSubtitle2>
              4. Wdrażania i realizowania ustalonych standardów pracy socjalnej
            </ArticleSubtitle2>
            <p>
              Znaczącą kwestią dla jakości pracy jest realizacja standardów
              pracy socjalnej przyjętych w danym ośrodku. Superwizja przyczynia
              się do upowszechnienia standardu oraz jego jednolitego rozumienia
              i realizowania przez wszystkich pracowników.
            </p> */}
            {documentToReactComponents(mainArticle.fields.body)}
          </SingleArticle>
        </div>
        <SideMenu
          //   isBlue
          title="Więcej o superwizji"
          className="lg:mt-28"
          itemsList={supervisionArticles.map((article) => ({
            title: article.fields.title,
            path: `/superwizja/${article.fields.slug}`,
            order: article.fields.order,
          }))}
          // itemsList={[
          //   {
          //     title: "Czym jest superwizja pracy socjalnej?",
          //     path: "",
          //   },
          //   {
          //     title: "Jak wprowadzić superwizję do organizacji?",
          //     path: "/superwizja/jak-wprowadzac-superwizje-do-organizacji",
          //   },
          //   {
          //     title: "Jak finansować superwizję?",
          //     path: "/superwizja/jak-finansowac-superwizje?",
          //   },
          //   {
          //     title: "Standardy superwizji",
          //     path: "/superwizja/standardy-superwizji",
          //   },
          // ]}
        />
      </section>
    </div>
  );
}
