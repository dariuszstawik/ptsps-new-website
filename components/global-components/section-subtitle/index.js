export default function SectionSubtitle({
  children,
  isWhite,
  isAlignedLeft,
  className,
}) {
  return (
    <div
      className={`mt-0 mb-2 pl-2 flex flex-col ${className} ${
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
      <h3
        className={`mb-2 text-slate-800 ${
          isAlignedLeft ? "text-left" : "text-center"
        } ${isWhite && "text-white"}`}
      >
        {" "}
        {children}
      </h3>
      <div
        className={` w-12 h-1 rounded-sm ${
          isWhite ? "bg-primaryGreen" : "bg-primaryBlue"
        }`}
      />
    </div>
  );
}
