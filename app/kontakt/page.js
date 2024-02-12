import PageHeader from "@/components/global-components/page-header";
import ParagraphWithImageOnTheLeft from "@/components/global-components/paragraph-with-image-on-the-left";
import SectionSubtitle from "@/components/global-components/section-subtitle";
import { Mail, MapPin, Phone, User } from "lucide-react";

export default function Kontakt() {
  return (
    <div>
      <PageHeader>Skontaktuj się</PageHeader>
      <div className="mb-16">
        <ParagraphWithImageOnTheLeft
          hasSubtitle
          title="Kontakt"
          img="documents31.jpg"
        >
          <div className="flex flex-col gap-8 mt-4">
            <div className="flex flex-col gap-6">
              <strong>Biuro</strong>

              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <Mail className="text-primaryBlue w-5" /> biuro@ptsps.pl
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <strong>Adres do korespondencji tradycyjnej</strong>
              <div className="flex gap-2 items-center">
                <MapPin className="text-primaryBlue" />
                <div className="">
                  <span className="block">
                    Polskie Towarzystwo Superwizji Pracy Socjalnej
                  </span>
                  <span className="block">
                    00-001 Warszawa, Skrytka Pocztowa nr 180
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <strong>Zarząd</strong>
              <div className="-ml-2">
                {/* <SectionSubtitle isAlignedLeft>Zarząd</SectionSubtitle> */}
              </div>
              <div className="flex flex-col gap-2">
                <div className="">
                  {/* <User className="text-primaryBlue" /> */}
                  Maciej Sosnowski
                </div>
                <div className="flex gap-2">
                  <Mail className="text-primaryBlue w-5" />{" "}
                  maciej.sosnowski@ptsps.pl
                  <Phone className="text-primaryBlue w-4" /> +48 663 767 573
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="">
                  {/* <User className="text-primaryBlue" />  */}
                  Marek Jaros
                </div>
                <div className="flex gap-2">
                  <Mail className="text-primaryBlue w-5" /> marek.jaros@ptsps.pl
                  <Phone className="text-primaryBlue w-4" /> +48 500 273 018
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="">
                  {/* <User className="text-primaryBlue" /> */}
                  Marek Lasota
                </div>
                <div className="flex gap-2">
                  <Mail className="text-primaryBlue w-5" />{" "}
                  marek.lasota@ptsps.pl
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <strong>Bezpieczny kontakt</strong>
              {/* <div className="-ml-2">
              <SectionSubtitle isAlignedLeft>
                Bezpieczny kontakt
              </SectionSubtitle>
            </div> */}
              <div className="flex flex-col gap-2">
                <div className="">Osoba Zaufania: Aneta Zborowska</div>
                {/* <div> Aneta Zborowska</div> */}
                <div className="flex gap-2">
                  <Mail className="text-primaryBlue w-5" />{" "}
                  osobazaufania@ptsps.pl
                  <Phone className="text-primaryBlue w-4" /> +48 732 988 806
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <strong>Numer konta (mBank)</strong>
              {/* <div className="-ml-2">
              <SectionSubtitle isAlignedLeft>
                Numer konta (mBank)
              </SectionSubtitle>
            </div> */}
              <div>51 1140 2004 0000 3202 8248 8179</div>
              <div>
                <span className="">IBAN</span> PL51 1140 2004 0000 3202 8248
                8179
              </div>
              <div>
                <span className="">BIC (SWIFT)</span> BREXPLPWMBK
              </div>
              {/* <div className="flex flex-col gap-2">
              <div className="">Osoba Zaufana: Aneta Zborowska</div>
              <div className="flex gap-2">
                <Mail className="text-primaryBlue w-5" /> osobazaufana@ptsps.pl
                <Phone className="text-primaryBlue w-4" /> +48 500 273 018
              </div>
            </div> */}
            </div>
          </div>
        </ParagraphWithImageOnTheLeft>
      </div>
    </div>
  );
}
