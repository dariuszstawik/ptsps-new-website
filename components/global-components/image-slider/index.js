"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    // nextArrow: (
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="24"
    //     height="24"
    //     viewBox="0 0 24 24"
    //     fill="none"
    //     stroke="black"
    //     strokeWidth="2"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     className="lucide lucide-chevron-right"
    //   >
    //     <path d="m9 18 6-6-6-6" />
    //   </svg>
    // ),
    // prevArrow: <ChevronLeft />,
  };

  return (
    <div>
      <Slider {...settings}>
        {/* <img src="/unicef1.jpg" alt="unicef1" />
        <img src="/unicef2.jpg" alt="unicef2" /> */}
        <img src="/unicef3.jpg" alt="unicef3" />
        {/* <img src="/unicef4.jpg" alt="unicef4" /> */}
        <img src="/unicef5.jpg" alt="unicef5" />
        <img src="/unicef6.jpg" alt="unicef6" />
        <img src="/unicef7.jpg" alt="unicef7" />
      </Slider>
    </div>
  );
}
