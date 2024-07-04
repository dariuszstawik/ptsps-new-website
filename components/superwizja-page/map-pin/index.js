export default function MapPin2({
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <img
      src="/map-pin2.svg"
      alt="Map pin"
      className={`w-4  ${className}`}
      onClick={onClick}
      // onHover={onHover}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
}
