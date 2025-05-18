export default function SectionTitle({
  children,
  isWhite,
  isAlignedLeft,
  isNotUppercase,
  isH1,
}) {
  return (
    <div
      className={` mb-6 flex flex-col ${
        !isAlignedLeft && "justify-center items-center"
      } gap-2`}
    >
      {/* <p
        className={`${
          isWhite ? "text-white" : "text-primaryBlue"
        } text-lg my-0`}
      >
        PTSPS
      </p> */}

      {isNotUppercase ? (
        <h3
          className={`mt-0 mb-0 text-slate-800 ${
            isAlignedLeft ? "text-left" : "text-center"
          } ${isWhite && "text-white"}`}
        >
          {" "}
          {children}
        </h3>
      ) : isH1 ? (
        <h1
          className={`text-2xl lg:text-3xl uppercase font-semibold ${
            isAlignedLeft ? "text-left" : "text-center"
          } ${isWhite && "text-white"}`}
        >
          {" "}
          {children}
        </h1>
      ) : (
        <h2
          className={`uppercase font-semibold ${
            isAlignedLeft ? "text-left" : "text-center"
          } ${isWhite && "text-white"}`}
        >
          {" "}
          {children}
        </h2>
      )}

      <div
        className={`mt-4 w-20 h-1 rounded-sm ${
          isWhite ? "bg-white" : "bg-primaryBlue"
        }`}
      />
    </div>
  );
}
