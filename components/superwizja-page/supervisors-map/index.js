"use client";

import { MapPin } from "lucide-react";

export default function SupervisorsMap({ content }) {
  const longitudeWarszawa = 21.012;
  const latitudeWarszawa = 52.229;

  const longitudeKatowice = 19.023;
  const latitudeKatowice = 50.264;

  const longitudeOnMapKatowice =
    (((longitudeKatowice - 14.12) / 10.03 - 0.02) * 100).toFixed(2).toString() +
    "%";

  const latitudeOnMapKatowice =
    (((latitudeKatowice - 49.0) / 5.83) * 100).toFixed(2).toString() + "%";

  const longitudeOnMapWarszawa =
    (((longitudeWarszawa - 14.12) / 10.03 - 0.02) * 100).toFixed(2).toString() +
    "%";

  const latitudeOnMapWarszawa =
    (((latitudeWarszawa - 49.0) / 5.83) * 100).toFixed(2).toString() + "%";

  console.log(content);
  // console.log(content.fields.location.lat, content[0].fields.location.lon);

  return (
    <div className="bg-white w-[600px] relative">
      <img
        src="/mappol1.svg"
        alt="Mapa superwizorów"
        className="w-full h-full"
      />
      <MapPin
        // style={`{ position: "absolute", top: "${latitudeOnMap}", left: "${longitudeOnMap}" }`}
        style={{
          position: "absolute",
          bottom: latitudeOnMapKatowice,
          left: longitudeOnMapKatowice,
        }}
      />
      <MapPin
        // style={`{ position: "absolute", top: "${latitudeOnMap}", left: "${longitudeOnMap}" }`}
        style={{
          position: "absolute",
          bottom: latitudeOnMapWarszawa,
          left: longitudeOnMapWarszawa,
        }}
      />
    </div>
  );
}
