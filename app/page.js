import Footer from "@/components/global-components/footer";
import FullwidthParagraphWithImageOnLeft from "@/components/global-components/fullwidth-paragraph-with-Image-on-left";
import ParagraphWithImageOnTheLeft from "@/components/global-components/paragraph-with-image-on-the-left";
import SectionTitle from "@/components/global-components/section-title";
import TestimonialsCarousel from "@/components/global-components/testimonial-carousel";
import AboutSection from "@/components/main-page/about-section";
import CounterSection from "@/components/main-page/counter-section";
import HeroSection from "@/components/main-page/hero-section";
import HeroSliderSection from "@/components/main-page/hero-slider-section";
import LogoCarousel from "@/components/main-page/logo-carousel";
import NewsCard from "@/components/main-page/news-card";
import ProjectsSection from "@/components/main-page/projects-section";
import Testimonials from "@/components/main-page/testimonials";
import { TeamSection } from "@/components/organizacja-page/team-section";
import SupervisorsMap from "@/components/superwizja-page/supervisors-map";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <HeroSection /> */}
      <HeroSliderSection />
      {/* <div className="my-10 px-4 md:hidden">
        <NewsCard />
      </div> */}
      <div className="mb-32">
        <AboutSection />
        <CounterSection />
      </div>
      {/* <ProjectsSection /> */}

      <div className="bg-darkBlue py-8">
        <ParagraphWithImageOnTheLeft
          title="Czym jest superwizja pracy socjalnej?"
          img="onas4.jpg"
          hasBlueBackground
          buttonTitle={"Więcej o superwizji"}
          buttonLink={"/superwizja"}
        >
          {/* Superwizja pracy socjalnej to szczególny, wieloaspektowy ogląd pracy
        służący rozwiązaniu trudności merytorycznych i emocjonalnych związanych
        z wykonywaniem pracy. Poszukujesz superwizora, metodyka lub szkoleniowca
        w obszarze pracy socjalnej i pomocy społecznej? Znajdziesz go u nas! W
        naszej bazie znajduje się obecnie 54 certyfikowanych superwizorów pracy
        socjalnej oraz 35 metodyków i szkoleniowców w obszarze pracy socjalnej. */}
          Superwizja pracy socjalnej to szczególny, wieloaspektowy ogląd pracy
          służący rozwiązaniu trudności merytorycznych i emocjonalnych
          związanych z wykonywaniem pracy. To dwustronny proces pomagający
          poszerzać świadomość, rozwijać umiejętności, osiągać lepsze wyniki,
          działać poprzez rzetelną ocenę, omówienie problemów, ukierunkowaną
          praktykę i sprzężenie zwrotne (feedback). Warunkiem powodzenia tak
          zaplanowanego przedsięwzięcia jest zgoda uczestników superwizji na
          ujawnienie swoich doświadczeń w pracy z ludźmi i na ich analizę (Wódz,
          Leśniak-Berek, 2007)
          <span className="block h-4" />
        </ParagraphWithImageOnTheLeft>
      </div>
      {/* <Testimonials /> */}

      <section className="p-16 py-20">
        <SectionTitle>Okiem ekspertów i praktyków</SectionTitle>
        <TestimonialsCarousel />
      </section>
      {/* <TeamSection /> */}
      {/* <TestimonialsCarousel /> */}

      <section className="p-10 pt-24 bg-slate-200">
        <SectionTitle>Aktualny projekt</SectionTitle>
        <ParagraphWithImageOnTheLeft
          title="Wsparcie rozwoju pracowników polskiego systemu pomocy społecznej"
          img="/unicef-logo.png"
          buttonTitle="Więcej o projekcie"
          buttonLink="/projekty/unicef-2022-2024"
          hasSectionSubtitle
          // hasBlueBackground
        >
          Projekt realizowany we współpracy z Biurem Reagowania na Potrzeby
          Uchodźców UNICEF. Jest odpowiedzią na kryzys uchodźczy związany z
          wybuchem pełnoskalowej wojny w Ukrainie. Skala migracji z Ukrainy do
          Polski spowodowała znaczne obciążenie naszego systemu pomocy
          społecznej i postawiła przed pracownikami pomocy społecznej nowe
          zadania i nowe wymagania. Celem projektu jest wsparcie pracowników
          (superwizyjne i edukacyjne), tak by mogli efektywnie pomagać osobom z
          Ukrainy, które schroniły się w naszym kraju.
          {/* Podstawowe działania to uruchomienie i
        prowadzenie przez dziesięć miesięcy stu osiemdziesięciu grup
        superwizyjnych dla pracowników pomocy społecznej oraz opracowanie
        dwudziestu programów specjalistycznych szkoleń i przeprowadzenie ich dla
        osiemdziesięciu grup pracowników w największych miastach – skupiskach
        migrantów z Ukrainy. */}
        </ParagraphWithImageOnTheLeft>
        {/* <SupervisorsMap /> */}
      </section>
      <section className="p-16 pt-20 pb-12 overflow-x-hidden">
        <SectionTitle>Współpraca</SectionTitle>
        <LogoCarousel />
      </section>
    </div>
  );
}
