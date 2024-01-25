import Button from "@/components/global-components/button";
import PageHeader from "@/components/global-components/page-header";
import ParagraphWithImageOnTheLeft from "@/components/global-components/paragraph-with-image-on-the-left";
import ParagraphWithImageOnTheRight from "@/components/global-components/paragraph-with-image-on-the-right";
import SectionTitle from "@/components/global-components/section-title";

export default function Projekty() {
  return (
    <div>
      <PageHeader>Projekty</PageHeader>
      {/* <SectionTitle>Projekty</SectionTitle> */}
      <div className="mb-16">
        <ParagraphWithImageOnTheLeft
          title="Wsparcie rozwoju pracowników polskiego systemu pomocy społecznej"
          img="/unicef-logo.png"
          buttonTitle="Więcej o projekcie"
          buttonLink="/projekty/unicef-2022-2024"
        >
          Projekt realizowany we współpracy z Biurem Reagowania na Potrzeby
          Uchodźców UNICEF. Jest odpowiedzią na kryzys uchodźczy związany z
          wybuchem pełnoskalowej wojny w Ukrainie. Skala migracji z Ukrainy do
          Polski spowodowała znaczne obciążenie naszego systemu pomocy
          społecznej i postawiła przed pracownikami pomocy społecznej nowe
          zadania i nowe wymagania. Celem projektu jest wsparcie pracowników
          (superwizyjne i edukacyjne), tak by mogli efektywnie pomagać osobom z
          Ukrainy, które schroniły się w naszym kraju. Podstawowe działania to
          uruchomienie i prowadzenie przez dziesięć miesięcy stu osiemdziesięciu
          grup superwizyjnych dla pracowników pomocy społecznej oraz opracowanie
          dwudziestu programów specjalistycznych szkoleń i przeprowadzenie ich
          dla osiemdziesięciu grup pracowników w największych miastach –
          skupiskach migrantów z Ukrainy.
        </ParagraphWithImageOnTheLeft>

        <ParagraphWithImageOnTheRight
          title="Kodeks Etyczny"
          img="documents41.jpg"
          buttonTitle="Więcej o projekcie"
          buttonLink="/projekty/kodeks-etyczny"
        >
          Wraz z wejściem w życie rozporządzenia Ministra Rodziny, Pracy i
          Polityki Społecznej z 20 grudnia 2016 roku określającego kryteria
          merytoryczne, które musi spełniać osoba chcąca uzyskać certyfikat
          superwizora pracy socjalnej oraz standardy szkolenia superwizorów
          pracy socjalnej, superwizja pracy socjalnej zyskała status
          samodzielnego zawodu. Zawód ten, ze względu na szczególnie wrażliwy
          charakter zagadnień, których dotyczy superwizja z całą pewnością można
          przypisać do kategorii zawodów zaufania publicznego. Mamy bowiem tu
          przynajmniej trzy współzależne i niezwykle delikatne obszary – trudne
          doświadczenia uczestników superwizji (nierzadko związane przecież
          również z osobistymi uwarunkowaniami), problemy życiowe klientów
          pomocy społecznej oraz kwestie relacji wewnątrz instytucji pomocowych
          (również bywają dość skomplikowane). Współwystępowanie i wzajemne
          przenikanie się tych trzech sfer tworzy specyficzną przestrzeń, w
          której trudno bezpiecznie się poruszać bez wyraźnych wskazówek.
          Dlatego podjęliśmy się zadania opracowania kodeksu etyki dla osób
          zajmujących się superwizją pracy socjalnej. W 2023 roku PTSPS
          formalnie przyjęło Kodeks Etyczny Osób Superwizujących Pracę Socjalną
          jako obowiązujący wszystkich członków zajmujących się superwizją i
          rekomendowany dla wszystkich superwizorów pracy socjalnej.
        </ParagraphWithImageOnTheRight>
      </div>
    </div>
  );
}
