"use client";
import Link from "next/link";
import SectionTitle from "../section-title";
import SectionSubtitle from "../section-subtitle";

export default function SideMenu({
  title,
  itemsList,
  img,
  alt,
  isBlue,
  className,
}) {
  const sortedItemsList = itemsList.sort((a, b) => a.order - b.order);

  console.log(sortedItemsList);

  return (
    <div className={`mb-10 mt-6 flex flex-col gap-6 ${className}`}>
      {img && <img src={img} alt={alt ? alt : ""} className="" />}

      <div className="-mb-2">
        <SectionSubtitle isAlignedLeft>{title}</SectionSubtitle>
      </div>
      <ul
        className={`flex flex-col ${
          isBlue && "text-white bg-primaryBlue rounded"
        }`}
      >
        {sortedItemsList

          .map((item) => (
            <li
              key={item.title}
              className={`text-lg p-4 border-b-2 m-0 ${
                isBlue
                  ? "hover:bg-white hover:text-slate-800"
                  : "hover:bg-primaryBlue hover:text-white"
              } `}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))
          .sort((a, b) => a.order - b.order)}
      </ul>
    </div>
  );
}
