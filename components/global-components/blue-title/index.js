export default function BlueTitle({ children, className }) {
  return (
    <div className={`inline-block px-3 bg-primaryBlue mr-auto ${className}`}>
      <h3 className="text-white my-1">{children}</h3>
    </div>
  );
}
