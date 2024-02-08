import Image from "next/image";
import Link from "next/link";

export default function Logo({ hasWhiteBackground }) {
  return (
    <Link href="/" className="">
      <div className={hasWhiteBackground && "bg-white rounded"}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={260}
          height={60}
          className="w-96"
        />
      </div>
    </Link>
  );
}
