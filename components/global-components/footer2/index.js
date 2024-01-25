"use client";
import Link from "next/link";
import { footerData } from "./footerData";
import Logo from "../logo";

const Footer2 = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer aria-label="Site Footer" className="bg-darkBlue">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <Link
            className="inline-block rounded-full bg-primaryBlue p-2 text-white shadow transition sm:p-3 lg:p-4"
            href="#websiteTop"
            onClick={handleScroll}
          >
            <span className="sr-only">Back to top</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 bg-primaryBlue"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center bg-slate-100 pl-6 py-6 rounded lg:justify-start">
              <Logo />
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white lg:text-left">
              {/* Zapraszamy do Centrum Społecznościowego w Katowicach - znajdziecie
              nas przy ul. Kordeckiego 5. */}
              Polskie Towarzystwo Superwizji Pracy Socjalnej działa od 2015 roku
              na rzecz profesjonalizacji pomocy społecznej.
            </p>
          </div>

          <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
            <ul className="list-none flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12">
              {footerData.map(({ title, path }, i) => {
                return (
                  <li key={i}>
                    <Link
                      className="text-white transition hover:text-gray-700/75"
                      href={path}
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer2;
