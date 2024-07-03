import SectionTitle from "@/components/global-components/section-title";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Mail, MapPin, Phone } from "lucide-react";
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
      className={`max-w-6xl  px-8 mb-16 flex flex-col gap-6 ${className}`}
    >
      {" "}
      {/* <SectionTitle isAlignedLeft={isTitleAlignedLeft}>{title}</SectionTitle> */}
      <div className="flex gap-10">
        <div className="shrink-0">
          <img
            src={supervisor.fields.image?.fields.file.url}
            className="w-[440px] h-[600px] rounded object-cover"
          />
          {/* {img && <img src={img} alt={alt ? alt : ""} className="rounded" />} */}
        </div>
        <div className="flex flex-col gap-2 pb-2 ">
          <p className="font-semibold text-5xl uppercase text-primaryBlue">
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
          <SectionTitle isAlignedLeft>obszar działania</SectionTitle>
          {documentToReactComponents(supervisor.fields.scope)}
          <SectionTitle isAlignedLeft>jednym zdaniem</SectionTitle>
          {supervisor.fields.summary}
          <SectionTitle isAlignedLeft>więcej informacji</SectionTitle>
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
