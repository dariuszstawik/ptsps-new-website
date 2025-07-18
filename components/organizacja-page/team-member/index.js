export default function TeamMember({ name, role, children, img }) {
  return (
    <div>
      <img
        className="object-cover w-40 h-40 rounded-full shadow"
        src={img}
        alt="Zdjęcie profilowe"
      />
      <div className="flex flex-col justify-center mt-2">
        <p className="text-lg font-bold">{name}</p>
        <p className="mb-4 text-sm text-primaryBlue">{role}</p>
        <div className="text-sm tracking-wide text-gray-800">{children}</div>
      </div>
    </div>
  );
}
