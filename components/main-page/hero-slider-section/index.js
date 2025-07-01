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
    <div
      className="slider"
      style={{
        maxWidth: "100vw",
        width: "100%",
        minHeight: "400px",
        overflow: "hidden",
      }}
    >
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
      </Slider>
    </div>
  );
}
