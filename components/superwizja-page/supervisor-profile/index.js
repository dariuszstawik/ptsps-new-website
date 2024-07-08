import SectionTitle from "@/components/global-components/section-title";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React, { ReactNode } from "react";

const SupervisorProfile = ({
  title,
  isTitleAlignedLeft,
  lead,
  children,
  contentfulImg,
  img,
  alt,
  hasSlider,
  className,
  supervisor,
}) => {
  return (
    <section
      className={`max-w-6xl  px-8 mb-16 flex flex-col gap-6 supervisor ${className}`}
    >
      {" "}
      {/* <SectionTitle isAlignedLeft={isTitleAlignedLeft}>{title}</SectionTitle> */}
      <div className="flex lg:gap-10">
        <div className="shrink-0 bg-gray-200 hidden lg:block">
          <img
            src={supervisor.fields.image?.fields.file.url}
            className="w-[330px] h-[450px] xl:w-[440px] xl:h-[600px] rounded object-cover border-b-darkBlue border-b-8"
          />
        </div>
        <div className="flex flex-col pb-2 ">
          <p className="font-semibold text-4xl text-primaryBlue">
            {supervisor.fields.name}
          </p>
          <p className="flex gap-2">
            <MapPin className="text-primaryBlue w-5" />
            {supervisor.fields.city}
          </p>
          <p className="flex gap-2">
            {" "}
            <Mail className="text-primaryBlue w-5" /> {supervisor.fields.email}
          </p>
          <p className="flex gap-2">
            {" "}
            <Phone className="text-primaryBlue w-4" /> {supervisor.fields.phone}
          </p>
          {supervisor.fields.urlAddress && (
            <p className="flex gap-2">
              {" "}
              <Globe className="text-primaryBlue w-4" />{" "}
              {supervisor.fields.urlAddress}
            </p>
          )}

          <div className="lg:hidden mt-4">
            <img
              src={supervisor.fields.image?.fields.file.url}
              className="w-full max-w-[440px] rounded object-cover border-b-darkBlue border-b-8"
            />
          </div>
          <h2 className=" text-xl lg:text-2xl mt-6 mb-3 after:content-[''] after:block after:w-12 after:h-1 after:bg-primaryBlue after:mt-4">
            obszar działania
          </h2>
          {documentToReactComponents(supervisor.fields.scope)}
          <h2 className=" text-xl lg:text-2xl mt-4 mb-3 after:content-[''] after:block after:w-12 after:h-1 after:bg-primaryBlue after:mt-4">
            {" "}
            jednym zdaniem
          </h2>
          {supervisor.fields.summary}
          <h2 className=" text-xl lg:text-2xl mt-6 mb-3 after:content-[''] after:block after:w-12 after:h-1 after:bg-primaryBlue after:mt-4">
            więcej informacji
          </h2>
          {documentToReactComponents(supervisor.fields.description)}
        </div>
      </div>
      <article>
        {/* <p className="font-bold">{lead}</p> */}
        {/* <div className="text-base leading-relaxed my-4 ">{children}</div> */}
      </article>
    </section>
  );
};

export default SupervisorProfile;
