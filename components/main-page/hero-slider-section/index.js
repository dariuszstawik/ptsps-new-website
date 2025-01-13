"use client";
import Button from "@/components/global-components/button";
import SectionTitle from "@/components/global-components/section-title";
import Link from "next/link";
import HeroSlide from "../hero-slide";
import Slider from "react-slick";

export default function HeroSliderSection({ slider }) {
  const settingsLg = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 5000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="slider">
      <Slider {...settingsLg}>
        {slider.map((item) => (
          <HeroSlide
            key={item.sys.id}
            title={item.fields.title}
            buttonTitle={item.fields.buttonTitle}
            buttonHref={item.fields.buttonLink}
            img={item.fields.image.fields.file.url}
          >
            {item.fields.body}
          </HeroSlide>
        ))}

        {/* <HeroSlide
          title="Unicef 2022-2024"
          buttonTitle="Więcej o projekcie"
          buttonHref="/projekty/unicef-2022-2024"
          img="/onas3.jpg"
        >
          Wspieramy pracowników socjalnych poprzez superwizje i szkolenia, tak
          aby mogli efektywnie pomagać osobom z&nbsp;Ukrainy, które schroniły
          się w naszym kraju.
        </HeroSlide>

        <HeroSlide
          title="Znajdź superwizora"
          buttonTitle="Zobacz więcej"
          buttonHref="/superwizja/lista-superwizorow"
          img="/znajdz-superwizora2.jpg"
        >
          Sprawdź listę superwizorów pracy socjalnej i&nbsp;znajdź specjalistę
          ze swojego regionu.
        </HeroSlide>

        <HeroSlide
          title="Biblioteka"
          buttonTitle="Zobacz więcej"
          buttonHref="/biblioteka"
          img="/onas4.jpg"
        >
          Pobierz bezpłatnie ostatnie numery magazynu "SPS: Superwizja Pracy
          Socjalnej"
        </HeroSlide> */}
      </Slider>
    </div>
  );
}
