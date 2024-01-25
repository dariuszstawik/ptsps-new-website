import Link from "next/link";
import SectionTitle from "../section-title";
import SectionSubtitle from "../section-subtitle";

export default function SideMenu({ itemsList, isBlue, className }) {
  return (
    <div className={`mb-10 mt-6 flex flex-col gap-6 ${className}`}>
      <img src="/unicef-logo.png" alt="unicef-logo" className="" />
      <div className="-mb-2">
        {/* <h3 className="pl-2 text-slate-800 pb-0 mb-0">Więcej o projekcie</h3> */}
        <SectionSubtitle isAlignedLeft>Więcej o projekcie</SectionSubtitle>
        {/* <SectionTitle isAlignedLeft>Więcej o projekcie</SectionTitle> */}
      </div>
      <ul
        className={`flex flex-col ${
          isBlue && "text-white bg-primaryBlue rounded"
        }`}
      >
        {itemsList.map((item) => (
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
        ))}
      </ul>
      {/* <img src="/unicef-logo.png" alt="unicef-logo" className="mt-6" /> */}
    </div>
  );
}
