"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LogoCarousel() {
  const settingsLg = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  const settingsSm = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="bg-white py-10 px-0 lg:p-8 lg:pt-4">
      <div className="hidden lg:block">
        <Slider {...settingsLg}>
          <div className="w-56 h-56  flex content-center p-8">
            <a href="https://unicef.pl/" target="_blank">
              <img
                src="/logo-unicef.jpg"
                alt="logo Unicef"
                className="mx-auto max-h-[75%]"
              />
            </a>
          </div>

          <div className="w-56 h-56 flex content-center p-8">
            <a href="https://www.facebook.com/superwizorzy/" target="_blank">
              <img
                src="/logo-scsps.jpg"
                alt="logo Unicef"
                className="mx-auto max-h-[85%]"
              />
            </a>
          </div>

          <div className="w-56 h-56 flex content-center p-8">
            <a href="https://www.facebook.com/Superwizornia/" target="_blank">
              <img
                src="/logo-superwizornia.jpg"
                alt="logo Unicef"
                className="mx-auto max-h-[85%]"
              />
            </a>
          </div>
          <div className="w-56 h-56 flex content-center p-8">
            <a
              href="https://www.superwizjapomocyspolecznej.pl/"
              target="_blank"
            >
              <img
                src="/logo-pracownia-superwizji.jpg"
                alt="logo Unicef"
                className="mx-auto max-h-[85%]"
              />
            </a>
          </div>
          <div className="w-56 h-56 flex content-center p-8">
            <a href="https://federacja-socjalnych.pl/" target="_blank">
              <img
                src="/logo-pfz.png"
                alt="logo Unicef"
                className="mx-auto max-h-[85%]"
              />
            </a>
          </div>
          <div className="w-56 h-56  flex content-center p-8">
            <a href="https://www.osar.com.pl/" target="_blank">
              <img
                src="/logo-osar.jpg"
                alt="logo Unicef"
                className="mx-auto max-h-[80%]"
              />
            </a>
          </div>
        </Slider>
      </div>

      <div className="block lg:hidden">
        <Slider {...settingsSm}>
          <div className="w-56 h-56  flex content-center p-8">
            <a href="https://unicef.pl/" target="_blank">
              <img
                src="/logo-unicef.jpg"
                alt="logo Unicef"
                className="mx-auto max-h-[75%]"
              />
            </a>
          </div>

          <div className="w-56 h-56 flex content-center p-8">
            <a href="https://www.facebook.com/superwizorzy/" target="_blank">
              <img
                src="/logo-scsps.jpg"
                alt="logo Unicef"
                className="mx-auto max-h-[85%]"
              />
            </a>
          </div>

          <div className="w-56 h-56 flex content-center p-8">
            <a href="https://www.facebook.com/Superwizornia/" target="_blank">
              <img
                src="/logo-superwizornia.jpg"
                alt="logo Unicef"
                className="mx-auto max-h-[85%]"
              />
            </a>
          </div>
          <div className="w-56 h-56 flex content-center p-8">
            <a
              href="https://www.superwizjapomocyspolecznej.pl/"
              target="_blank"
            >
              <img
                src="/logo-pracownia-superwizji.jpg"
                alt="logo Unicef"
                className="mx-auto max-h-[85%]"
              />
            </a>
          </div>
          <div className="w-56 h-56 flex content-center p-8">
            <a href="https://federacja-socjalnych.pl/" target="_blank">
              <img
                src="/logo-pfz.png"
                alt="logo Unicef"
                className="mx-auto max-h-[85%]"
              />
            </a>
          </div>
          <div className="w-56 h-56  flex content-center p-8">
            <a href="https://www.osar.com.pl/" target="_blank">
              <img
                src="/logo-osar.jpg"
                alt="logo Unicef"
                className="mx-auto max-h-[80%]"
              />
            </a>
          </div>
        </Slider>
      </div>
    </section>
  );
}
