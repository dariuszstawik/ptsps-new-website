import Arrow from "@/components/global-components/arrow";
import { BellPlus } from "lucide-react";
import Link from "next/link";

export default function NewsCard() {
  return (
    <Link href="/projekty/unicef-2022-2024">
      <div className="min-w-96 flex justify-between gap-4 items-center py-3 px-10 border-2 border-primaryOrange rounded-lg bg-gray-200  z-200">
        <span className="bg-primaryBlue px-2 py-2 rounded-lg text-white">
          <BellPlus />
          {/* Aktualne */}
        </span>{" "}
        <span className="flex flex-nowrap items-center gap-2">
          <h2 className="text-base">AKTUALNY PROJEKT: Unicef 2022-2024 </h2>{" "}
          <Arrow isBlack />
        </span>
      </div>
    </Link>
  );
}
