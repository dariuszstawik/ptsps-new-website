"use client";
import Image from "next/image";
import Button from "../../global-components/button";
import NewsCard from "../news-card";
import { Fade, Slide } from "react-awesome-reveal";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-[800px] xl:h-screen relative flex flex-col justify-center items-center bg-[url('/wspolne.jpg')] bg-cover before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-darkBlue before:opacity-85">
      <div className="w-[90%] lg:w-[60%] h-full flex flex-col justify-center items-center gap-6">
        <h1 className="text-2xl lg:text-4xl font-bold text-white z-40 text-center lg:leading-relaxed uppercase">
          Wyznaczamy nowe kierunki superwizji pracy socjalnej
          {/* Naszą misją jest propagowanie idei superwizji pracy socjalnej i
          profesjonalizacja pomocy społecznej */}
        </h1>
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text:lg lg:text-xl text-white text-center leading-relaxed z-40">
            "Patrz na wszystkie trudności jako na możliwości stworzenia czegoś
            nowego, uczenia się i wzrastania dzięki kreatywnemu reagowaniu"
          </h2>
          <p className="text-white z-40"> - Virginia Satir</p>
        </div>
        <Link href="/organizacja/o-nas">
          <Button>Poznaj nas</Button>
        </Link>

        <div className="absolute bottom-16 right-16 hidden md:block">
          <NewsCard />
        </div>
      </div>
    </section>

    // <div className="mt-32 relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    //   <img
    //     src="/wspolne.jpg"
    //     alt=""
    //     className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    //   />
    //   <div
    //     className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
    //     ariaHidden="true"
    //   >
    //     <div
    //       className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
    //       style={{
    //         clipPath:
    //           "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    //       }}
    //     ></div>
    //   </div>
    //   <div
    //     className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
    //     ariaHidden="true"
    //   >
    //     <div
    //       className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
    //       style={{
    //         clipPath:
    //           "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    //       }}
    //     ></div>
    //   </div>
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="mx-auto max-w-2xl lg:mx-0">
    //       <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
    //         Work with us
    //       </h2>
    //       <p className="mt-6 text-lg leading-8 text-gray-300">
    //         Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
    //         lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
    //         fugiat aliqua.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}
