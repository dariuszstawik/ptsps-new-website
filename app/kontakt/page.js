import PageHeader from "@/components/global-components/page-header";
import ParagraphWithImageOnTheLeft from "@/components/global-components/paragraph-with-image-on-the-left";
import SectionSubtitle from "@/components/global-components/section-subtitle";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Mail, MapPin, Phone, User } from "lucide-react";

async function getContentfulContent() {
  const resContact = await client.getEntries({
    content_type: "contact",
  });

  const resBoardMember = await client.getEntries({
    content_type: "boardMember",
  });

  return {
    contact: resContact.items[0],
    boardMember: resBoardMember.items,
  };
}

export default async function Kontakt() {
  const content = await getContentfulContent();
  const contact = content.contact;
  const boardMember = content.boardMember;

  return (
    <div>
      <PageHeader>Skontaktuj się</PageHeader>
      <div className="mb-16">
        <ParagraphWithImageOnTheLeft
          hasSubtitle
          title="Kontakt"
          // img="/contact.JPG"
          img={contact.fields.image.fields.file.url}
        >
          <div className="flex flex-col gap-8 mt-4">
            <div className="flex flex-col gap-6">
              <strong>Biuro</strong>

              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <Mail className="text-primaryBlue w-5" />{" "}
                  {contact.fields.office}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <strong>Adres do korespondencji tradycyjnej</strong>
              <div className="flex gap-2 items-center">
                <MapPin className="text-primaryBlue" />
                <div className="paragraphWithoutMargin">
                  {/* <span className="block">
                    Polskie Towarzystwo Superwizji Pracy Socjalnej
                  </span>
                  <span className="block">
                    00-001 Warszawa, Skrytka Pocztowa nr 382
                  </span> */}
                  {documentToReactComponents(contact.fields.mailingAddress)}
                </div>
              </div>
            </div>

            {contact.fields.isBoardContactVisible && (
              <div className="flex flex-col gap-4">
                <strong>Zarząd</strong>
                <div className="">
                  {boardMember.map((member) => (
                    <div
                      key={member.sys.id}
                      className="flex flex-col gap-2 mb-4"
                    >
                      <div className="">{member.fields.name}</div>
                      <div className="flex gap-2">
                        {member.fields.email && (
                          <>
                            <Mail className="text-primaryBlue w-5" />
                            {member.fields.email}
                          </>
                        )}
                        {member.fields.phone && (
                          <>
                            <Phone className="text-primaryBlue w-4" />
                            {member.fields.phone}
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {contact.fields.komisjaEtycznaEmail && (
              <div className="flex flex-col gap-6">
                <strong>Komisja Etyczna PTSPS</strong>

                <div className="flex flex-col gap-4">
                  <div className="flex gap-2">
                    <Mail className="text-primaryBlue w-5" />{" "}
                    {contact.fields.komisjaEtycznaEmail}
                  </div>
                </div>
              </div>
            )}

            {contact.fields.AdditionalContent && (
              <div className="flex flex-col gap-4">
                {documentToReactComponents(contact.fields.AdditionalContent)}
              </div>
            )}

            {/* <div className="flex flex-col gap-4">
              <strong>Bezpieczny kontakt</strong>
              <div className="flex flex-col gap-2">
                <div className="">Osoba Zaufania: Aneta Zborowska</div>

                <div className="flex gap-2">
                  <Mail className="text-primaryBlue w-5" />{" "}
                  osobazaufania@ptsps.pl
                  <Phone className="text-primaryBlue w-4" /> +48 732 988 806
                </div>
              </div>
            </div> */}

            <div className="flex flex-col gap-4">
              <strong>Numer konta {contact.fields.bank || ""}</strong>

              <div className="paragraphWithoutMargin">
                {documentToReactComponents(contact.fields.bankAccount)}
              </div>
            </div>
          </div>
        </ParagraphWithImageOnTheLeft>
      </div>
    </div>
  );
}
