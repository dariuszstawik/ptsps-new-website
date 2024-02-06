"use client";
import ArticleSubtitle from "@/components/global-components/article-subtitle";
import ArticleSubtitle2 from "@/components/global-components/article-subtitle2";
import PageHeader from "@/components/global-components/page-header";
import SideMenu from "@/components/global-components/side-menu";
import SingleArticle from "@/components/global-components/single-article";

export default function JakWprowadzacSuperwizjeDoOrganizacji() {
  return (
    <div>
      <PageHeader>Superwizja</PageHeader>
      <section className="grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-8 mb-10">
        <div className="col-span-2">
          <SingleArticle
            title="Jak wprowadzać superwizję do organizacji?"
            // isTitleAlignedLeft
            // img="/unicef-logo.png"
            className="py-0"
          >
            <p>
              Zgodnie z obowiązującymi obecnie przepisami ustawy o pomocy
              społecznej (UPS) prawo do korzystania z superwizji pracy socjalnej
              prowadzonej przez superwizorów pracy socjalnej ma każdy pracownik
              socjalny (Art. 121a ust 2 UPS, Dz.U. z 2004 r., nr 64, poz. 593).
            </p>

            <p>
              Wśród superwizorów pracy socjalnej mówi się, że aby wprowadzić
              superwizora do instytucji, należy najpierw wprowadzić tam samą
              superwizję. Odpowiedzialność za powodzenie i skuteczność wsparcia
              superwizyjnego zależy w znacznym stopniu od tego, jak superwizja
              (jako istotna zmiana organizacyjna) zostanie wdrożona w danym
              Ośrodku. Zanim rozpocznie się pierwsza sesja superwizyjna, przed
              organizatorem superwizji – menadżerem jednostki organizacyjnej -
              stoi szereg zadań składających się na proces przygotowania i
              wprowadzania superwizji.
            </p>
            <p>
              Podjęcie decyzji o skorzystaniu z superwizji powinno być
              poprzedzone dyskusją na szczeblu kierowniczym i analizą problemów
              występujących w danej jednostce organizacyjnej. Do dyskusji
              powinni zostać zaproszeni pracownicy socjalni, jako przyszli,
              odbiorcy superwizji (zasada partycypacji). To oni powinni
              określić, jakiej superwizji (jakiego rodzaju wsparcia) oczekują.
              Mimo, iż superwizja pracy socjalnej jest od wielu lat jednym z
              przedmiotów na uczelniach kształcących pracowników służb
              społecznych, to zarządzający jednostką często będą pierwszymi
              osobami, które przekażą pracownikom wiedzę na temat funkcji, celów
              oraz rodzajów superwizji. W podjęciu decyzji o objęciu pracowników
              wsparciem superwizora mogą pomóc spotkania pracowników z
              superwizorami pracy socjalnej lub szkolenia zwiększające wiedzę o
              tej formie wsparcia i promujące ideę superwizji pracy socjalnej.
              Dobór superwizora to kolejny etap wdrażania zmiany. Pierwsze sesje
              superwizyjne w Ośrodku będą próbą dla superwizora i pracowników
              zainteresowanych uczestnictwem w superwizji, która powinna
              zakończyć się ewaluacją i ewentualną modyfikacją sesji,
              uwzględniającą oczekiwania uczestników tej formy wsparcia.{" "}
            </p>
            <ArticleSubtitle>Jaki superwizor pracy socjalnej?</ArticleSubtitle>
            <p>
              Obecnie podstawowymi i niestety jedynymi kryteriami stosowanym
              przez instytucje pomocy społecznej podczas poszukiwania
              superwizora pracy socjalnej są kryteria ustawowe i finansowe.
              Osoba poszukiwana przez instytucje musi posiadać certyfikat
              superwizora pracy socjalnej zgodnie z art. 121a ust 3 ustawy o
              pomocy społecznej. Ośrodki pomocy społecznej często oczekują też
              od superwizorów potwierdzenia swoich doświadczeń w postaci opinii
              referencyjnych lub rekomendacji.
            </p>
          </SingleArticle>
        </div>
        <SideMenu
          //   isBlue
          title="Więcej o superwizji"
          className="lg:mt-28"
          itemsList={[
            {
              title: "Czym jest superwizja pracy socjalnej?",
              path: "",
            },
            {
              title: "Jak wprowadzić superwizję do organizacji?",
              path: "/superwizja/jak-wprowadzic-superwizje-do-organizacji",
            },
            {
              title: "Jak finansować superwizję?",
              path: "/superwizja/jak-finansowac-superwizje?",
            },
            {
              title: "Standardy superwizji",
              path: "/superwizja/standardy-superwizji",
            },
          ]}
        />
      </section>
    </div>
  );
}
