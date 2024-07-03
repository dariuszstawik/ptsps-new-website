import Image from "next/image";
import React, { ReactNode } from "react";
import SectionTitle from "../section-title";
import ImageSlider from "../image-slider";

const SingleArticle = ({
  title,
  isTitleAlignedLeft,
  lead,
  children,
  contentfulImg,
  img,
  alt,
  hasSlider,
  className,
}) => {
  return (
    <section
      className={`max-w-4xl mx-auto px-8 mb-16 flex flex-col gap-6 ${className}`}
    >
      {" "}
      <SectionTitle isAlignedLeft={isTitleAlignedLeft}>{title}</SectionTitle>
      {/* <h2>{title}</h2> */}
      {/* <SectionTitle isAlignedLeft={isTitleAlignedLeft}>{title}</SectionTitle> */}
      <div>
        {/* <Image
          src={img?.fields?.file?.url ? "https:" + img.fields.file.url : ""}
          width={img?.fields?.file?.details?.image?.width}
          height={img?.fields?.file?.details?.image?.height}
          className="w-full object-cover rounded-lg my-10"
          alt={img?.fields?.description ? img.fields.description : ""}
        /> */}
        {/* <img
          scr="/wspolne.jpg"
          className="w-full object-cover rounded-lg my-10"
          alt="wspolne"
        /> */}
        <div>
          {contentfulImg && (
            <img
              src={
                contentfulImg?.fields.file.url
                  ? contentfulImg.fields.file.url
                  : ""
              }
              alt={
                contentfulImg.fields.file.description
                  ? contentfulImg.fields.file.description
                  : ""
              }
              style={{ width: "600px", height: "440px", objectFit: "cover" }}
              className="rounded"
            />
          )}
          {img && <img src={img} alt={alt ? alt : ""} className="rounded" />}

          {hasSlider && <ImageSlider />}
        </div>
      </div>
      <article>
        <p className="font-bold">{lead}</p>
        <div className="text-base leading-relaxed my-4 ">{children}</div>
      </article>
    </section>
  );
};

export default SingleArticle;
