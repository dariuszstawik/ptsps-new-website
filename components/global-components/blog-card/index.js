"use client";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Arrow from "../arrow";

export default function BlogCard({ title, content, slug, img, href }) {
  return (
    <Fade direction="bottom" delay="30" triggerOnce>
      <div className="max-w-xl mx-auto transition duration-300 transform bg-slate-200 border rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center flex">
        <div className=" relative w-1/2">
          {/* <Image
          className="object-cover h-48 rounded-t lg:h-48 xl:h-56"
          src={img ? `https:${img.fields.file.url}` : ""}
          width={img?.fields?.file?.details?.image?.width}
          height={img?.fields?.file?.details?.image?.height}
          alt={img?.fields?.description ? img.fields.description : ""}
        /> */}
          <img
            // src="dobremiejsce008.jpg"
            src={img ? `https:${img.fields.file.url}` : ""}
            className="object-cover h-48  lg:h-48 xl:h-56 w-full"
          />
          {/* <div className=" h-6 bg-orange" /> */}
        </div>
        <div className="w-1/2 flex flex-col justify-between items-start px-6 py-8  rounded-b sm:px-8">
          <div className="flex flex-col justify-start items-start">
            <h3 className="mb-2 text-lg text-left font-semibold leading-none md:text-xl">
              {title}
            </h3>
          </div>
          <button className="relative font-medium text-orange before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-green-800 before:transition hover:before:scale-100">
            {" "}
            <Link href={href || ""}>
              dowiedz się więcej
              <Arrow />
            </Link>
          </button>
        </div>
      </div>
    </Fade>
  );
}
