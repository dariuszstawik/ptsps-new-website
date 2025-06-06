"use client";
import ProjectCard from "../project-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronLeftSquare, ChevronRight } from "lucide-react";
import TestimonialCard from "../testimonial-card";
import SectionTitle from "../section-title";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function TestimonialCarousel({ testimonials }) {
  const settingsLg = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: (
      <img
        width="60"
        height="60"
        src="https://img.icons8.com/ios-glyphs/60/chevron-left.png"
        alt="chevron-left"
      />
    ),
    nextArrow: (
      <img
        width="60"
        height="60"
        src="https://img.icons8.com/ios-glyphs/60/chevron-right.png"
        alt="chevron-right"
      />
    ),
  };

  const settingsSm = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: (
      <img
        width="60"
        height="60"
        src="https://img.icons8.com/ios-glyphs/60/chevron-left.png"
        alt="chevron-left"
      />
    ),
    nextArrow: (
      <img
        width="60"
        height="60"
        src="https://img.icons8.com/ios-glyphs/60/chevron-right.png"
        alt="chevron-right"
      />
    ),
  };

  return (
    <section className="bg-white pb-10 px-0 lg:p-6 pt-6 lg:pt-10 overflow-x-hidden">
      <div className="hidden lg:block">
        <Slider {...settingsLg}>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              name={testimonial.fields.name}
              title={testimonial.fields.role}
              img={testimonial.fields.image.fields.file.url}
            >
              {documentToReactComponents(testimonial.fields.body)}
            </TestimonialCard>
          ))}

          {/* <TestimonialCard
            name="Beata Kisiel"
            title="Pracowniczka socjalna"
            img="/Beata-Kisiel.jpg"
          >
            Superwizja pracy socjalnej to dla mnie cenne narzędzie. Podczas
            spotkań superwizyjnych mam poczucie wsparcia, zespołowej „burzy
            mózgów” i szukania rozwiązań. Czuję się bezpieczna wiedząc, że nie
            będę oceniana ani krytykowana za dotychczasowe działania podejmowane
            w ramach pracy z rodzinami. Uczestnictwo w tych spotkaniach pozwala
            na zdobycie wiedzy poprzez naukę na konkretnych przykładach. Ważne
            jest to, że z każdego spotkania wychodzę z propozycjami nowych
            rozwiązań, co ułatwia mi dalszą pracę.
          </TestimonialCard>
          <TestimonialCard
            name="Małgorzata Aleksandrowicz"
            title="Dyrektorka Centrum Usług Społecznych w Myślenicach"
            img="/Malgorzata-Aleksandrowicz.jpg"
          >
            W kalendarzu naszego ośrodka, superwizja dla pracowników socjalnych,
            asystentów rodziny i kadry zarządzającej od lat zajmuje stałe i
            ważne miejsce. Dla mnie to czas refleksji nad omawianą sytuacją,
            czas na ujawnienie własnych uczuć, sformułowanie oczekiwań i impuls
            do zaplanowania dalszych działań, realizacji celów, wdrażania zmian.
            Ta istotna forma wsparcia jest narzędziem doskonalenia naszych
            kompetencji zawodowych, pozyskiwania wiedzy i umiejętności,
            umożliwiającym wymianę doświadczeń oraz budowanie relacji w grupie.
          </TestimonialCard>
          <TestimonialCard
            name="Dr hab. Jerzy Krzyszkowski"
            title="Prof. Uniwersytetu Jana Długosza w Częstochowie"
            img="/Jerzy-Krzyszkowski.jpg"
          >
            Superwizja jest ważnym narzędziem zarządzania zasobami ludzkimi w
            jednostkach organizacyjnych pomocy społecznej. Może ona istotnie
            ułatwić, pomóc w zmianie stylu kierowania poprzez m.in. zwiększenie
            partycypacji pracowników w zarządzaniu, tworzenie zespołów
            zadaniowych czy uelastycznienie struktur organizacyjnych.
          </TestimonialCard>
          <TestimonialCard
            name="Ewa Błędowska"
            title="Kierowniczka Działu Pomocy Środowiskowej MOPS w Wodzisławiu Śląskim"
            img="/Ewa-Bledowska.jpg"
          >
            Superwizja to niewątpliwie zwiększanie samoświadomości w pracy
            zawodowej lecz nie tylko – dla mnie to także rozwój samej siebie,
            możliwość przeanalizowania własnych postępowań, działań, zachowań.
            Mówiąc krótko – superwizuj się a otworzysz przed sobą nowe ścieżki.
          </TestimonialCard>
          <TestimonialCard
            name="Dr hab. Izabela Krasiejko"
            title="Prof. Uniwersytetu Jana Długosza w Częstochowie"
            img="/Izabela-Krasiejko.jpg"
          >
            Superwizja pracy socjalno-wychowawczej i terapeutycznej umożliwia
            refleksję nad metodycznym działaniem asystenta z rodziną i poziomem
            współpracy z kooperantami. Służy zarówno podniesieniu jakości
            usługi, jak i profesjonalizacji zawodu asystent rodziny.
            Ogólnopolskie Stowarzyszenie Asystentów Rodziny czyni starania, by
            zapis o obowiązku pracodawcy do zagwarantowania asystentom rodziny i
            koordynatorom zespołu asysty rodzinnej korzystania z superwizji
            znalazł się w ustawie o wspieraniu rodziny i systemie pieczy
            zastępczej.
          </TestimonialCard>
          <TestimonialCard
            name="Paweł Maczyński"
            title="Przewodniczący, Polska Federacja Związkowa Pracowników Socjalnych i Pomocy Społecznej"
            img="/Pawel-Maczynski.jpg"
          >
            Potrzebujemy wspólnie zadbać, by przywrócić zaufanie do superwizji
            wśród pracowników socjalnych i uczynić superwizję faktycznie
            dostępną dla wszystkich pomagających.
          </TestimonialCard> */}
        </Slider>
      </div>

      <div className="lg:hidden">
        <Slider {...settingsSm}>
          <TestimonialCard
            name="Beata Kisiel"
            title="Pracowniczka socjalna"
            img="/Beata-Kisiel.jpg"
          >
            Superwizja pracy socjalnej to dla mnie cenne narzędzie. Podczas
            spotkań superwizyjnych mam poczucie wsparcia, zespołowej „burzy
            mózgów” i szukania rozwiązań. Czuję się bezpieczna wiedząc, że nie
            będę oceniana ani krytykowana za dotychczasowe działania podejmowane
            w ramach pracy z rodzinami. Uczestnictwo w tych spotkaniach pozwala
            na zdobycie wiedzy poprzez naukę na konkretnych przykładach. Ważne
            jest to, że z każdego spotkania wychodzę z propozycjami nowych
            rozwiązań, co ułatwia mi dalszą pracę.
          </TestimonialCard>
          <TestimonialCard
            name="Małgorzata Aleksandrowicz"
            title="Dyrektorka Centrum Usług Społecznych w Myślenicach"
            img="/Malgorzata-Aleksandrowicz.jpg"
          >
            W kalendarzu naszego ośrodka, superwizja dla pracowników socjalnych,
            asystentów rodziny i kadry zarządzającej od lat zajmuje stałe i
            ważne miejsce. Dla mnie to czas refleksji nad omawianą sytuacją,
            czas na ujawnienie własnych uczuć, sformułowanie oczekiwań i impuls
            do zaplanowania dalszych działań, realizacji celów, wdrażania zmian.
            Ta istotna forma wsparcia jest narzędziem doskonalenia naszych
            kompetencji zawodowych, pozyskiwania wiedzy i umiejętności,
            umożliwiającym wymianę doświadczeń oraz budowanie relacji w grupie.
          </TestimonialCard>
          <TestimonialCard
            name="Dr hab. Jerzy Krzyszkowski"
            title="Prof. Uniwersytetu Jana Długosza w Częstochowie"
            img="/Jerzy-Krzyszkowski.jpg"
          >
            Superwizja jest ważnym narzędziem zarządzania zasobami ludzkimi w
            jednostkach organizacyjnych pomocy społecznej. Może ona istotnie
            ułatwić, pomóc w zmianie stylu kierowania poprzez m.in. zwiększenie
            partycypacji pracowników w zarządzaniu, tworzenie zespołów
            zadaniowych czy uelastycznienie struktur organizacyjnych.
          </TestimonialCard>
          <TestimonialCard
            name="Ewa Błędowska"
            title="Kierowniczka Działu Pomocy Środowiskowej MOPS w Wodzisławiu Śląskim"
            img="/Ewa-Bledowska.jpg"
          >
            Superwizja to niewątpliwie zwiększanie samoświadomości w pracy
            zawodowej lecz nie tylko – dla mnie to także rozwój samej siebie,
            możliwość przeanalizowania własnych postępowań, działań, zachowań.
            Mówiąc krótko – superwizuj się a otworzysz przed sobą nowe ścieżki.
          </TestimonialCard>
          <TestimonialCard
            name="Dr hab. Izabela Krasiejko"
            title="Prof. Uniwersytetu Jana Długosza w Częstochowie"
            img="/Izabela-Krasiejko.jpg"
          >
            Superwizja pracy socjalno-wychowawczej i terapeutycznej umożliwia
            refleksję nad metodycznym działaniem asystenta z rodziną i poziomem
            współpracy z kooperantami. Służy zarówno podniesieniu jakości
            usługi, jak i profesjonalizacji zawodu asystent rodziny.
            Ogólnopolskie Stowarzyszenie Asystentów Rodziny czyni starania, by
            zapis o obowiązku pracodawcy do zagwarantowania asystentom rodziny i
            koordynatorom zespołu asysty rodzinnej korzystania z superwizji
            znalazł się w ustawie o wspieraniu rodziny i systemie pieczy
            zastępczej.
          </TestimonialCard>
          <TestimonialCard
            name="Paweł Maczyński"
            title="Przewodniczący, Polska Federacja Związkowa Pracowników Socjalnych i Pomocy Społecznej"
            img="/Pawel-Maczynski.jpg"
          >
            Potrzebujemy wspólnie zadbać, by przywrócić zaufanie do superwizji
            wśród pracowników socjalnych i uczynić superwizję faktycznie
            dostępną dla wszystkich pomagających.
          </TestimonialCard>
          {/* <TestimonialCard
            name="Beata Kisiel"
            title="Pracowniczka socjalna"
            img="/Beata-Kisiel.jpg"
          >
            Superwizja pracy socjalnej to dla mnie cenne narzędzie. Podczas
            spotkań superwizyjnych mam poczucie wsparcia, zespołowej „burzy
            mózgów” i szukania rozwiązań. Czuję się bezpieczna wiedząc, że nie
            będę oceniana ani krytykowana za dotychczasowe działania podejmowane
            w ramach pracy z rodzinami. Uczestnictwo w tych spotkaniach pozwala
            na zdobycie wiedzy poprzez naukę na konkretnych przykładach. Ważne
            jest to, że z każdego spotkania wychodzę z propozycjami nowych
            rozwiązań, co ułatwia mi dalszą pracę.
          </TestimonialCard>
          <TestimonialCard
            name="Małgorzata Aleksandrowicz"
            title="Dyrektorka Centrum Usług Społecznych w Myślenicach"
            img="/Malgorzata-Aleksandrowicz.jpg"
          >
            W kalendarzu naszego ośrodka, superwizja dla pracowników socjalnych,
            asystentów rodziny i kadry zarządzającej od lat zajmuje stałe i
            ważne miejsce. Dla mnie to czas refleksji nad omawianą sytuacją,
            czas na ujawnienie własnych uczuć, sformułowanie oczekiwań i impuls
            do zaplanowania dalszych działań, realizacji celów, wdrażania zmian.
            Ta istotna forma wsparcia jest narzędziem doskonalenia naszych
            kompetencji zawodowych, pozyskiwania wiedzy i umiejętności,
            umożliwiającym wymianę doświadczeń oraz budowanie relacji w grupie.
          </TestimonialCard>
          <TestimonialCard
            name="Dr hab. Jerzy Krzyszkowski"
            title="Prof. Uniwersytetu Jana Długosza w Częstochowie"
            img="/Jerzy-Krzyszkowski.jpg"
          >
            Superwizja jest ważnym narzędziem zarządzania zasobami ludzkimi w
            jednostkach organizacyjnych pomocy społecznej. Może ona istotnie
            ułatwić, pomóc w zmianie stylu kierowania poprzez m.in. zwiększenie
            partycypacji pracowników w zarządzaniu, tworzenie zespołów
            zadaniowych czy uelastycznienie struktur organizacyjnych.
          </TestimonialCard>
          <TestimonialCard
            name="Ewa Błędowska"
            title="Kierowniczka Działu Pomocy Środowiskowej MOPS w Wodzisławiu Śląskim"
            img="/Ewa-Bledowska.jpg"
          >
            Superwizja to niewątpliwie zwiększanie samoświadomości w pracy
            zawodowej lecz nie tylko – dla mnie to także rozwój samej siebie,
            możliwość przeanalizowania własnych postępowań, działań, zachowań.
            Mówiąc krótko – superwizuj się a otworzysz przed sobą nowe ścieżki.
          </TestimonialCard> */}
        </Slider>
      </div>
    </section>
  );
}
