"use client";

import Button from "@/components/global-components/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MapPin2 from "../map-pin";
import Collapse from "@/components/global-components/collapse";

export default function SupervisorsMap({ content }) {
  const [isHovered, setIsHovered] = useState(null);
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const changeRegion = (e) => {
    setRegion(e.target.value);
    setCity("");
  };

  const changeCity = (e) => {
    setCity(e.target.value);
    setRegion("");
  };

  const changeCityThroughMapPin = (city) => {
    setCity(city);
    setRegion("");
  };

  // const handleHover = () => {
  //   setIsHovered(!isHovered);
  // };

  // const longitudeWarszawa = 21.012;
  // const latitudeWarszawa = 52.229;

  // const longitudeKatowice = 19.023;
  // const latitudeKatowice = 50.264;

  // const longitudeOnMapKatowice =
  //   (((longitudeKatowice - 14.12) / 10.03 - 0.02) * 100).toFixed(2).toString() +
  //   "%";

  // const latitudeOnMapKatowice =
  //   (((latitudeKatowice - 49.0) / 5.83) * 100).toFixed(2).toString() + "%";

  // const longitudeOnMapWarszawa =
  //   (((longitudeWarszawa - 14.12) / 10.03 - 0.02) * 100).toFixed(2).toString() +
  //   "%";

  // const latitudeOnMapWarszawa =
  //   (((latitudeWarszawa - 49.0) / 5.83) * 100).toFixed(2).toString() + "%";

  // console.log(content);
  // console.log(content.fields.location.lat, content[0].fields.location.lon);
  console.log(isHovered);

  return (
    <div className="w-full flex gap-20">
      <div className="bg-white h-[80vh] relative mb-auto shrink-0">
        <img
          src="/mappol1.svg"
          alt="Mapa superwizorów"
          className="w-full h-full hidden xl:block"
        />

        <ul>
          {content.map((supervisor) => (
            <li
              key={supervisor.sys.id}
              style={{
                position: "absolute",
                bottom:
                  (
                    ((supervisor.fields.location.lat - 49.0) / 5.83) *
                    100
                  ).toFixed(2) + "%",
                left:
                  (
                    ((supervisor.fields.location.lon - 14.12) / 10.03 - 0.02) *
                    100
                  ).toFixed(2) + "%",
              }}
            >
              <div
                onClick={() => changeCityThroughMapPin(supervisor.fields.city)}
                onMouseEnter={() => setIsHovered(supervisor.sys.id)}
                onMouseLeave={() => setIsHovered(null)}
                className="relative"
              >
                <MapPin2
                  // onMouseEnter={() => setIsHovered(supervisor.sys.id)}
                  // onMouseLeave={() => setIsHovered(null)}
                  className={`${
                    supervisor.fields.city === city && "text-primaryYellow"
                  } cursor-pointer

                  `}
                />
                {isHovered === supervisor.sys.id && (
                  <div className="absolute -top-14 left-0 bg-white p-1 text-sm rounded">
                    {supervisor.fields.city}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* <MapPin
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
        /> */}
      </div>
      <div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div>
            <h3 className="text-lg mt-4 mb-2  font-semibold">Województwo </h3>
            <select
              onChange={changeRegion}
              value={region}
              className="border border-primaryBlue rounded-md p-2"
            >
              <option value="">Wybierz</option>
              <option value="dolnośląskie">Dolnośląskie</option>
              <option value="kujawsko-pomorskie">Kujawsko-pomorskie</option>
              <option value="lubelskie">Lubelskie</option>
              <option value="lubuskie">Lubuskie</option>
              <option value="łódzkie">Łódzkie</option>
              <option value="małopolskie">Małopolskie</option>
              <option value="mazowieckie">Mazowieckie</option>
              <option value="opolskie">Opolskie</option>
              <option value="podkarpackie">Podkarpackie</option>
              <option value="podlaskie">Podlaskie</option>
              <option value="pomorskie">Pomorskie</option>
              <option value="śląskie">Śląskie</option>
              <option value="świętokrzyskie">Świętokrzyskie</option>
              <option value="warmińsko-mazurskie">Warmińsko-mazurskie</option>
              <option value="wielkopolskie">Wielkopolskie</option>
              <option value="zachodniopomorskie">Zachodniopomorskie</option>
            </select>
          </div>
          <div className="">
            <h3 className="text-lg mt-4 mb-2 font-semibold">Miasto </h3>
            <select
              onChange={changeCity}
              value={city}
              className="border border-primaryBlue rounded-md p-2"
            >
              <option value="">Wybierz</option>
              {content.map((supervisor) => (
                <option key={supervisor.sys.id} value={supervisor.fields.city}>
                  {supervisor.fields.city}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mx-auto my-4 hidden xl:block">
          Aby wyświetlić listę superwizorów dostępnych w danej lokalizacji,
          kliknij na pinezkę na mapie lub wybierz poniżej odpowiednie
          województwo lub miasto.
        </div>

        <ul>
          {/* {content
            .filter((supervisor) =>
              // region
              //   ? region.toUpperCase() ===
              //     supervisor.fields.region.toUpperCase()
              //   : city.toUpperCase() === supervisor.fields.city.toUpperCase()
              switch (true) {
                case region:
                  return region.toUpperCase() === supervisor.fields.region.toUpperCase();
                case city:
                  return city.toUpperCase() === supervisor.fields.city.toUpperCase();
                default:
                  return supervisor;
              }
              
            ) */}
          {/* {content
            .filter((supervisor) => {
              switch (true) {
                case region:
                  return (
                    region.toUpperCase() ===
                    supervisor.fields.region.toUpperCase()
                  );
                case city:
                  return (
                    city.toUpperCase() === supervisor.fields.city.toUpperCase()
                  );
                default:
                  return true; // Return true for supervisors that don't match region or city
              }
            }) */}
          {content
            .filter((supervisor) => {
              if (region) {
                return (
                  region.toUpperCase() ===
                  supervisor.fields.region.toUpperCase()
                );
              } else if (city) {
                return (
                  city.toUpperCase() === supervisor.fields.city.toUpperCase()
                );
              } else {
                return false; // Jeśli ani region, ani city nie jest zdefiniowane, odfiltruj wszystko
              }
            })
            .map((supervisor) => (
              <li key={supervisor.sys.id} className="flex flex-col mt-6 w-full">
                {/* <img
                  src={supervisor.fields.image?.fields.file.url}
                  className="w-24 h-24 rounded-full object-cover"
                /> */}
                <div className="pb-2 flex flex-col gap-2">
                  {/* <p className="font-semibold text-base text-primaryBlue m-0"> */}
                  <h3 className="text-lg m-0 text-primaryBlue font-semibold">
                    {supervisor.fields.name}
                  </h3>

                  <div className="flex flex-col lg:flex-row gap-2 lg:justify-between">
                    <p className="flex gap-2 m-0">
                      <MapPin className="text-primaryBlue w-5" />
                      {supervisor.fields.city}
                    </p>
                    {/* <p className="flex gap-2">
                    {" "}
                    <Mail className="text-primaryBlue w-5" />{" "}
                    {supervisor.fields.email}
                  </p>
                  <p className="flex gap-2">
                    {" "}
                    <Phone className="text-primaryBlue w-4" />{" "}
                    {supervisor.fields.phone}
                  </p> */}
                    <Link
                      href={`/superwizja/lista-superwizorow/${supervisor.fields.slug}`}
                    >
                      <button className="text-primaryBlue ml-auto">
                        wyświetl profil &rarr;
                      </button>
                    </Link>
                  </div>
                </div>
                <hr className="mt-2 w-full" />
              </li>
            ))}

          {/* <Collapse
            title="W tym rejonie działają również..."
            isInSupervisorsMap
          >
            <ul>
              {content
                .filter((supervisor) => {
                  if (region) {
                    return supervisor.fields.mapScope
                      ? supervisor.fields.mapScope
                          .toString()
                          .toUpperCase()
                          .includes(["_", region.toUpperCase(), "_"].join(""))
                      : "";
                  } else if (city) {
                    return (
                      city.toUpperCase() ===
                      supervisor.fields.city.toUpperCase()
                    );
                  } else {
                    return false; // Jeśli ani region, ani city nie jest zdefiniowane, odfiltruj wszystko
                  }
                })
                .map((supervisor) => (
                  <li
                    key={supervisor.sys.id}
                    className="flex flex-col mt-6 w-full"
                  >
                    <div className="pb-2 flex flex-col gap-2">
                      <h3 className="text-lg m-0 text-primaryBlue font-semibold">
                        {supervisor.fields.name}
                      </h3>
                      <div className="flex justify-between">
                        <p className="flex gap-2 m-0">
                          <MapPin className="text-primaryBlue w-5" />
                          {supervisor.fields.city}
                        </p>

                        <Link
                          href={`/superwizja/lista-superwizorow/${supervisor.fields.slug}`}
                        >
                          <button className="text-primaryBlue ml-auto">
                            wyświetl profil &rarr;
                          </button>
                        </Link>
                      </div>
                    </div>
                    <hr className="mt-2 w-full" />
                  </li>
                ))}
            </ul>
          </Collapse> */}
        </ul>
      </div>
    </div>
  );
}
