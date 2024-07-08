import { ArrowDown, ChevronDown } from "lucide-react";

export default function Collapse({ title, children, isInSupervisorsMap }) {
  return (
    <div className="collapse m-0 p-0">
      <input type="checkbox" className="m-0 p-0" />
      <div
        className={`collapse-title text-base ${
          isInSupervisorsMap && "text-lg mt-4 mb-2  font-semibold"
        }`}
      >
        <ChevronDown className="inline-block text-primaryBlue -ml-4 pl-0" />{" "}
        {/* <ArrowDown className="inline-block text-primaryBlue -ml-4 pl-0" />{" "} */}
        {title}
      </div>
      <div className="collapse-content w-full">{children}</div>
    </div>
  );
}
