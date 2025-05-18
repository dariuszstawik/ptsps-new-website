import Link from "next/link";
import Logo from "../logo";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// async function getContentfulContent(locale) {
//   const resContact = await client.getEntries({
//     content_type: "contact",
//     locale: locale,
//   });
//   return resContact.items[0];
// }

async function getContentfulContent() {
  const resFooter = await client.getEntries({
    content_type: "footer",
  });

  return resFooter.items[0];
}

export default async function Footer() {
  const footer = await getContentfulContent();

  console.log(",,,,,,,,,,,,,,,,,,");
  console.log(footer);

  return (
    <div className="w-full my-0 py-0">
      <section className="relative bg-darkBlue mt-0 text-white mb-0 pt-16">
        <div className="pb-1 pt-0">
          <div className="container mx-auto px-10">
            <div className="flex flex-wrap mb-6 xl:mb-10 justify-between">
              <div className="mb-auto mr-4 w-full xl:w-1/4 ">
                {/* <div className="bg-slate-100 p-4 rounded mb-6 flex mr-auto">
                  <Logo className="mt-4" />
                </div> */}
                <h2 className="text-4xl lg:text-5xl pb-4">PTSPS</h2>
                <div>
                  <div>
                    {footer.fields.description}{" "}
                    {/* {footer.fields.IIColumnTitle} */}
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-1/2 flex flex-wrap -mx-3 justify-start xl:justify-end gap-10">
                <div className="mb-6 w-full md:w-1/2 xl:w-1/3 xl:mr-6 px-3">
                  <h5 className="mb-4 font-bold">
                    {footer.fields.IIColumnTitle}
                  </h5>
                  <p className="leading-loose my-0">
                    {footer.fields.IIColumnBody}
                  </p>
                  <div className="flex gap-5 mt-6">
                    {footer.fields.facebookLink && (
                      <a href={footer.fields.facebookLink} target="_blank">
                        <img
                          src="/facebook.svg"
                          alt="facebook"
                          className="w-8"
                        />
                      </a>
                    )}
                    {footer.fields.linkedinLink && (
                      <a href={footer.fields.linkedinLink} target="_blank">
                        <img
                          src="/linkedin.svg"
                          alt="linkedin"
                          className="w-8"
                        />
                      </a>
                    )}
                    {footer.fields.instagramLink && (
                      <a
                        href="https://www.instagram.com/superwizjaps/"
                        target="_blank"
                      >
                        <img src="/instagram1.svg" className="w-8" />
                      </a>
                    )}
                  </div>
                </div>
                {footer.fields.IIIColumnTitle && (
                  <div className="mb-6 w-full md:w-1/2 xl:w-1/3 px-3">
                    {/* <h5 className="mb-4 font-bold">Bezpieczny kontakt</h5>
                <p className="leading-loose my-0">Aneta Zborowska</p>
                <p className="leading-loose my-0">osobazaufania@ptsps.pl </p>
                <p className="leading-loose my-0">+48 732 988 806</p> */}
                    <h5 className="mb-4 font-bold">
                      {footer.fields.IIIColumnTitle}
                    </h5>
                    <div>
                      {documentToReactComponents(footer.fields.IIIColumnBody)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-screen flex-col justify-center items-center bg-gray-200 mt-0 pt-2 pb-4">
        <p className="text-sm mx-auto text-center">
          © 2024. PTSPS. All rights reserved. Created by{" "}
          <a
            href="https://stronyjaksiepatrzy.pl"
            target="_blank"
            className="text-primaryBlue"
          >
            Strony jak się patrzy
          </a>
        </p>

        {/* <p className="text-sm mx-auto text-center mb-2">
          <Link href="/">polityka prywatności</Link>
        </p> */}

        {/* <p className="text-sm mx-auto text-center">
          Created by{" "}
          <a
            href="https://stronyjaksiepatrzy.pl"
            target="_blank"
            className="text-primaryBlue"
          >
            Strony jak się patrzy
          </a>
        </p> */}
      </div>
    </div>
  );
}
