export default function Arrow({ isBlack }) {
  return (
    <svg
      className={`h-4 w-4 rtl:rotate-180 inline ${
        !isBlack && "text-primaryBlue"
      }  ml-1 my-auto`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}
