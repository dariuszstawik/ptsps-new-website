const PageHeader = ({ children }) => {
  return (
    <div
      className="mt-28 relative w-screen px-32 py-32 bg-primary flex after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-darkBlue after:opacity-85"
      // className="mt-28 relative w-screen px-32 py-28 bg-primaryBlue flex"
      style={{
        backgroundImage: 'url("/header3.jpg")',
        backgroundPosition: "center",
      }}
    >
      <h1 className="uppercase text-3xl lg:text-4xl text-white font-semibold z-20">
        {children}
      </h1>
    </div>
  );
};

export default PageHeader;
