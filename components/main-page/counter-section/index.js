"use client";
import { Fade } from "react-awesome-reveal";
import Counter from "../../global-components/counter";
import SectionTitle from "../../global-components/section-title";

export default function CounterSection() {
  return (
    <section>
      <div className="mb-16 mt-4">
        <SectionTitle>Superwizja w liczbach</SectionTitle>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <Fade direction="up" cascade triggerOnce>
          <div className="w-96 flex flex-col justify-center items-center gap-6 bg-slate-200 border-0 border-darkBlue rounded-lg px-6 py-16 shadow">
            <span className="flex text-primaryBlue font-bold">
              <Counter end={20000} />
            </span>
            <span className="text-center text-xl">
              liczba pracowników socjalnych
              <span className="block text-primaryBlue">w Polsce</span>
            </span>
          </div>
          <div className="w-96 flex flex-col justify-center items-center gap-6 bg-slate-200 border-0 border-darkBlue rounded-lg px-6 py-16 shadow">
            <span className="flex text-primaryBlue font-bold">
              <Counter end={16} />
              <h1>%</h1>
            </span>
            <span className="text-center text-xl">
              {" "}
              procent pracowników socjalnych
              <span className="block text-primaryBlue">
                objętych superwizją{" "}
              </span>
            </span>
          </div>
          <div className="w-96 flex flex-col justify-center items-center gap-6 bg-slate-200 border-0 border-darkBlue rounded-lg px-6 py-16 shadow">
            <span className="flex text-primaryBlue font-bold">
              <Counter end={8.5} decimals={1} />
              <h1>%</h1>
            </span>
            <span className="text-center text-xl">
              {" "}
              procent pracowników socjalnych
              <span className="block text-primaryBlue">
                objętych superwizją PTSPS
              </span>
            </span>
          </div>
        </Fade>
      </div>
    </section>
  );
}
