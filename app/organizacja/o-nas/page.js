import PageHeader from "@/components/global-components/page-header";
import ParagraphWithImageOnTheLeft from "@/components/global-components/paragraph-with-image-on-the-left";
import SingleArticle from "@/components/global-components/single-article";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getContentfulContent() {
  const resAbout = await client.getEntries({
    content_type: "about",
  });

  return resAbout.items[0];
}

export const metadata = {
  title: "O nas | PTSPS",
  description:
    "Polskie Towarzystwo Superwizji Pracy Socjalnej organizacją pozarządową działającą od 2015 roku na rzecz profesjonalizacji pomocy społecznej.",
};

export default async function oNas() {
  const about = await getContentfulContent();

  return (
    <div>
      <PageHeader>Organizacja</PageHeader>
      {/* <SingleArticle title="O nas" img="/wspolne.jpg">
        Jesteśmy organizacją pozarządową działającą od 2015 roku na rzecz
        profesjonalizacji pomocy społecznej. Za podstawowe narzędzie uznaliśmy
        superwizję – stąd nasze działanie koncentruja się na rozwijaniu tej
        formy pracy i promowaniu superwizji pracy socjalnej w systemie polskiej
        pomocy społecznej. Pracujemy nad standaryzowaniem procesu superwizji,
        prowadzimy badania efektywności superwizji pracy socjalnej, inicjujemy
        dyskusję nad etycznym wymiarem superwizji. Naszą statutową misją jest
        praca nad rozwojem superwizji pracy socjalnej oraz profesjonalizacja
        pomocy społecznej. Stąd nasze działania w obszarze edukacji –
        opracowujemy i prowadzimy specjalistyczne szkolenia dla pracowników
        pomocy społecznej oparte na badaniach potrzeb oraz wieloletnim
        doświadczeniu naszych współpracowników. Polskie Towarzystwo Superwizji
        Pracy Socjalnej zrzesza specjalistów – zarówno certyfikowanych
        superwizorów/superwizorki pracy socjalnej, jak i osoby zajmujące się
        szkoleniami w obszarze pomocy społecznej, metodyków pracy socjalnej oraz
        osoby zajmujące się pomocą społeczną z perspektywy naukowe
      </SingleArticle> */}
      <div className="my-10">
        <ParagraphWithImageOnTheLeft
          // title="O nas"
          title={about.fields.title || ""}
          // buttonTitle="Nasze projekty"
          // buttonLink="/projekty"
          buttonTitle={about.fields.buttonTitle || ""}
          buttonLink={about.fields.buttonLink || ""}
          // img="/onas3.jpg"
          isOnAboutPage
        >
          {documentToReactComponents(about.fields.body)}

          {/* <p className=" font-bold">
            Jesteśmy organizacją pozarządową działającą od 2015 roku na rzecz
            profesjonalizacji pomocy społecznej. Za podstawowe narzędzie
            uznaliśmy superwizję – stąd nasze działanie koncentruja się na
            rozwijaniu tej formy pracy i promowaniu superwizji pracy socjalnej w
            systemie polskiej pomocy społecznej.
          </p>
          <p>
            Pracujemy nad standaryzowaniem procesu superwizji, prowadzimy
            badania efektywności superwizji pracy socjalnej, inicjujemy dyskusję
            nad etycznym wymiarem superwizji.
          </p>
          <p>
            Naszą statutową misją jest praca nad rozwojem superwizji pracy
            socjalnej oraz profesjonalizacja pomocy społecznej. Stąd nasze
            działania w obszarze edukacji – opracowujemy i prowadzimy
            specjalistyczne szkolenia dla pracowników pomocy społecznej oparte
            na badaniach potrzeb oraz wieloletnim doświadczeniu naszych
            współpracowników.
          </p>
          <p>
            Polskie Towarzystwo Superwizji Pracy Socjalnej zrzesza specjalistów
            – zarówno certyfikowanych superwizorów/superwizorki pracy socjalnej,
            jak i osoby zajmujące się szkoleniami w obszarze pomocy społecznej,
            metodyków pracy socjalnej oraz osoby zajmujące się pomocą społeczną
            z perspektywy naukowej.
          </p> */}
        </ParagraphWithImageOnTheLeft>
      </div>
    </div>
  );
}
