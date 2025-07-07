"use client";
import Button from "@/components/global-components/button";
import SectionTitle from "@/components/global-components/section-title";
import { Lightbulb, Milestone } from "lucide-react";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";

export default function AboutSection() {
  let nbsp = "\u00A0";

  return (
    <section className="lg:mx-6">
      {/* <SectionTitle>O nas</SectionTitle> */}
      <SectionTitle isH1>
        Polskie Towarzystwo Superwizji Pracy Socjalnej
      </SectionTitle>
      <div className="flex flex-col md:flex-row gap-10 mt-16 mb-8">
        <div className="w-full md:w-1/2 px-8 py-10 bg-darkBlue text-white rounded-lg flex flex-col gap-6">
          <Slide direction="up" triggerOnce>
            {/* <Milestone /> */}
            <Lightbulb className="w-12 h-12 text-primaryBlue" />
            <h4 className="text-white font-semibold">
              Misją PTSPS jest propagowanie idei superwizji pracy socjalnej
              i&nbsp;profesjonalizacja pomocy społecznej.
            </h4>
          </Slide>
        </div>
        <div className="w-full md:w-1/2 shrink-0 flex flex-col gap-4 px-6">
          <p className="text-lg ">
            Jesteśmy organizacją pozarządową działającą od 2015 roku na rzecz
            profesjonalizacji pomocy społecznej. Polskie Towarzystwo Superwizji
            Pracy Socjalnej zrzesza specjalistów – zarówno certyfikowanych
            superwizorów/superwizorki pracy socjalnej, jak i osoby zajmujące się
            szkoleniami w obszarze pomocy społecznej, metodyków pracy socjalnej
            oraz osoby zajmujące się pomocą społeczną z perspektywy naukowej.
          </p>
          <Button className="mr-auto">
            <Link href="/organizacja/o-nas">Poznaj nas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
