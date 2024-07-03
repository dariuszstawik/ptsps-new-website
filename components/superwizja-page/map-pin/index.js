export default function MapPin2({ className, onClick }) {
  return (
    <img
      src="/map-pin2.svg"
      alt="Map pin"
      className={`w-4  ${className}`}
      onClick={onClick}
    />
  );
}
