import Link from "next/link";
import Logo from "../logo";

// async function getContentfulContent(locale) {
//   const resContact = await client.getEntries({
//     content_type: "contact",
//     locale: locale,
//   });
//   return resContact.items[0];
// }

export default function Footer() {
  return (
    <div>
      <section className="relative bg-darkBlue mt-0 text-white h-auto mb-0">
        <div className="pb-12 pt-0">
          <div className="container mx-auto px-10">
            <div className="flex flex-wrap mb-6 xl:mb-10 justify-between">
              <div className="mb-auto mr-4 w-full xl:w-1/4 ">
                <div className="bg-slate-100 p-4 rounded mb-6 flex mr-auto">
                  <Logo className="mt-4" />
                </div>
                <div>
                  <p>
                    {" "}
                    Polskie Towarzystwo Superwizji Pracy Socjalnej działa od
                    2015 roku na rzecz profesjonalizacji pomocy społecznej.
                  </p>
                </div>
              </div>
              {/* <div className="mb-5 w-full xl:w-1/5">
                <h4 className="mb-2">
                  Polskie Towarzystwo Superwizji Pracy Socjalnej
                </h4>
                <p>
                  {" "}
                  Polskie Towarzystwo Superwizji Pracy Socjalnej działa od 2015
                  roku na rzecz profesjonalizacji pomocy społecznej.
                </p>
                <div className="flex gap-8 mt-6">
                  <a href="https://www.facebook.com/kopalnia" target="_blank">
                    <img src="/facebook.png" className="w-8" />
                  </a>
                  <a
                    href="https://www.youtube.com/@fundacjakopalniainicjatyw5380"
                    target="_blank"
                  >
                    <img src="/youtube.png" className="w-8" />
                  </a>
                  <a
                    href="https://www.flickr.com/photos/153333342@N06/"
                    target="_blank"
                  >
                    <img src="/flickr.png" className="w-8" />
                  </a>
                </div>
              </div> */}
              <div className="w-full xl:w-1/2 flex flex-wrap -mx-3 justify-start xl:justify-end gap-10">
                <div className="mb-6 w-full md:w-1/2 xl:w-1/3 xl:mr-6 px-3">
                  <h5 className="mb-4 font-bold">Biuro</h5>
                  <p className="leading-loose my-0">biuro@ptsps.pl</p>
                  <div className="flex gap-5 mt-6">
                    <a
                      href="https://www.facebook.com/superwizja.pracy.socjalnej"
                      target="_blank"
                    >
                      <img src="/facebook.svg" alt="facebook" className="w-8" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/polskie-towarzystwo-superwizji-pracy-socjalnej/"
                      target="_blank"
                    >
                      <img src="/linkedin.svg" alt="linkedin" className="w-8" />
                    </a>
                    {/* <a
                      href="https://www.instagram.com/superwizjaps/"
                      target="_blank"
                    >
                      <img src="/instagram1.svg" className="w-8" />
                    </a> */}
                  </div>
                </div>
                <div className="mb-6 w-full md:w-1/2 xl:w-1/3 px-3">
                  <h5 className="mb-4 font-bold">Bezpieczny kontakt</h5>
                  {/* <p className="leading-loose my-0">Osoba zaufana:</p> */}
                  <p className="leading-loose my-0">Aneta Zborowska</p>
                  <p className="leading-loose my-0">osobazaufania@ptsps.pl </p>
                  <p className="leading-loose my-0">+48 500 273 018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-screen flex-col justify-center items-center bg-gray-200 mt-0 py-8">
        <p className="text-sm mx-auto text-center mb-2">
          © 2024. PTSPS. All rights reserved.
        </p>

        {/* <p className="text-sm mx-auto text-center mb-2">
          <Link href="/">polityka prywatności</Link>
        </p> */}

        <p className="text-sm mx-auto text-center">
          Created by{" "}
          <a
            href="https://stronyjaksiepatrzy.pl"
            target="_blank"
            className="text-primaryBlue"
          >
            Strony jak się patrzy
          </a>
        </p>
      </div>
    </div>
  );
}

// import Link from "next/link";
// import Logo from "../logo";

// export default function Footer() {
//   return (
//     <div>
//       <section className="relative bg-darkBlue mt-32 text-white h-auto mb-0">
//         <div className="pb-12 pt-0">
//           <div className="container mx-auto px-10">
//             <div className="flex flex-wrap mb-6 lg:mb-10">
//               <div className="mb-auto w-full lg:w-1/5">
//                 <Logo className="mt-4 w-64" hasWhiteBackground />
//               </div>
//               <div className="mb-5 w-full lg:w-1/5">
//                 <h4 className="mb-2">
//                   Polskie Towarzystwo SuperwizjiPracy Socjalnej
//                 </h4>
//                 <p>Wyznaczamy nowe kierunki superwizji pracy socjalnej</p>
//                 <div className="flex gap-8 mt-6">
//                   <a href="https://www.facebook.com/kopalnia" target="_blank">
//                     <img src="/facebook.png" className="w-8" />
//                   </a>
//                   <a
//                     href="https://www.youtube.com/@fundacjakopalniainicjatyw5380"
//                     target="_blank"
//                   >
//                     <img src="/youtube.png" className="w-8" />
//                   </a>
//                   <a
//                     href="https://www.flickr.com/photos/153333342@N06/"
//                     target="_blank"
//                   >
//                     <img src="/flickr.png" className="w-8" />
//                   </a>
//                 </div>
//               </div>
//               <div className="w-full lg:w-3/5 flex flex-wrap -mx-3 justify-end">
//                 <div className="mb-6 w-full md:w-1/2 lg:w-1/4 lg:mr-6 px-3">
//                   <h5 className="mb-4 font-bold">Biuro</h5>
//                   <p className="leading-loose my-0">ul. 15 Grudnia 3/26</p>
//                   <p className="leading-loose my-0">42-500 Będzin</p>
//                 </div>
//                 <div className="mb-6 w-full md:w-1/2 lg:w-1/4 px-3">
//                   <h5 className="mb-4 font-bold">Kontakt</h5>
//                   <p className="leading-loose my-0">info.kopalnia@gmail.com</p>
//                   <p className="leading-loose my-0">tel. 660 461 849</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="w-screen flex-col justify-center items-center bg-gray-200 mt-1 py-8">
//         <p className="text-sm mx-auto text-center mb-2">
//           © 2023. PTSPS. All rights reserved.
//         </p>

//         <p className="text-sm mx-auto text-center mb-2">
//           <Link href="/">polityka prywatności</Link>
//         </p>

//         <p className="text-sm mx-auto text-center">
//           Created by{" "}
//           <a
//             href="https://stronyjaksiepatrzy.pl"
//             target="_blank"
//             className="text-primaryBlue"
//           >
//             Strony jak się patrzy
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }
