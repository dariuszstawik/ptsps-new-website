import Image from "next/image";

export default function LibraryCard({ title, img, file }) {
  return (
    <div>
      <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm xl:w-96">
        <Image
          className="w-contain object-cover h-[40%] rounded-t-lg"
          src={img ? `https:${img.fields.file.url}` : ""}
          width={img?.fields?.file?.details?.image?.width}
          height={img?.fields?.file?.details?.image?.height}
          alt={img?.fields?.description || "okładka"}
        />

        <div class="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900">{title} </h3>
          </a>

          <a
            href={file}
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Pobierz
            <span
              ariaHidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </a>
        </div>
      </article>
    </div>
  );
}
