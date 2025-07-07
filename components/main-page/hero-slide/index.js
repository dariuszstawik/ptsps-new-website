import Button from "@/components/global-components/button";
import SectionTitle from "@/components/global-components/section-title";
import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";

export default function HeroSlide({
  title,
  children,
  buttonTitle,
  buttonHref,
  img,
}) {
  return (
    <div className="w-full lg:h-screen pt-28 pr-0 flex flex-col lg:flex-row bg-darkBlue">
      <div className="w-full lg:w-2/5 h-full flex flex-col justify-center items-start gap-10 px-10 lg:pl-28 lg:pr-20 py-10">
        {/* <Slide direction="up"> */}
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-white z-40 lg:leading-relaxed uppercase">
            {title}
          </h2>
          <div className="mt-4 w-20 h-1 rounded-sm bg-white" />
        </div>

        <div className="text:lg lg:text-xl text-white leading-relaxed z-40">
          {children}
        </div>

        <Link href={buttonHref}>
          <Button>{buttonTitle}</Button>
        </Link>
        {/* </Slide> */}
      </div>
      <div className="w-full lg:w-3/5 h-[300px] lg:h-full flex shrink-0">
        {/* <img src={img} alt="" className="object-cover w-full" /> */}
        <Image
          src={`https:${img.fields.file.url}`}
          alt={img.fields.file.description || title || ""}
          width={img.fields.file.details.image.width}
          height={img.fields.file.details.image.height}
          className="object-cover w-full h-[300px] lg:h-full"
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>
      {/* <div className="w-full lg:w-3/5 aspect-[2.4/1] relative shrink-0">
        <Image
          src={`https:${img.fields.file.url}`}
          alt={img.fields.file.description || title || ""}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div> */}
    </div>
  );
}
