// "use client";
// import Button from "@/components/global-components/button";
// import SectionTitle from "@/components/global-components/section-title";
// import Link from "next/link";
// import HeroSlide from "../hero-slide";
// import Slider from "react-slick";

// export default function HeroSliderSection({ slider }) {
//   const settingsLg = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 1500,
//     autoplaySpeed: 5000,
//     fade: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     adaptiveHeight: false,
//   };
//   return (
//     <div
//       // className="slider"
//       // style={{
//       //   maxWidth: "100vw",
//       //   width: "100%",
//       //   minHeight: "400px",
//       //   overflow: "hidden",
//       // }}
//       className="slider w-full overflow-hidden relative"
//       style={{ minHeight: "400px", height: "100vh" }}
//     >
//       <Slider {...settingsLg}>
//         {slider.map((item) => (
//           <HeroSlide
//             key={item.sys.id}
//             title={item.fields.title}
//             buttonTitle={item.fields.buttonTitle}
//             buttonHref={item.fields.buttonLink}
//             // img={item.fields.image.fields.file.url}
//             img={item.fields.image ? item.fields.image : ""}
//           >
//             {item.fields.body}
//           </HeroSlide>
//         ))}
//       </Slider>
//     </div>
//   );
// }

"use client";
import Button from "@/components/global-components/button";
import SectionTitle from "@/components/global-components/section-title";
import Link from "next/link";
import HeroSlide from "../hero-slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSliderSection({ slider }) {
  return (
    <div
      // className="slider w-full overflow-hidden relative"
      className="slider w-full overflow-hidden relative  lg:h-screen"
      // style={{ minHeight: "400px", height: "100vh" }}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1500}
        loop={true}
        slidesPerView={1}
        className="w-full h-full"
      >
        {slider.map((item) => (
          <SwiperSlide key={item.sys.id}>
            <HeroSlide
              title={item.fields.title}
              buttonTitle={item.fields.buttonTitle}
              buttonHref={item.fields.buttonLink}
              img={item.fields.image ? item.fields.image : ""}
            >
              {item.fields.body}
            </HeroSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
