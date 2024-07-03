"use client";

import Button from "@/components/global-components/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MapPin2 from "../map-pin";

export default function SupervisorsMap({ content }) {
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");

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

  console.log(content);
  // console.log(content.fields.location.lat, content[0].fields.location.lon);

  return (
    <div className="w-full flex  gap-20">
      <div className="bg-white h-[80vh] relative mb-auto shrink-0">
        <img
          src="/mappol1.svg"
          alt="Mapa superwizorów"
          className="w-full h-full"
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
              <MapPin2
                onClick={() => changeCityThroughMapPin(supervisor.fields.city)}
                className={`${
                  supervisor.fields.city === city && "text-primaryYellow"
                } cursor-pointer`}
              />
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
        <select
          onChange={changeRegion}
          value={region}
          className="border border-primaryBlue rounded-md p-2"
        >
          <option value="">Wszystkie</option>
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

        <select
          onChange={changeCity}
          value={city}
          className="border border-primaryBlue rounded-md p-2"
        >
          <option value="">Wszystkie</option>
          {content.map((supervisor) => (
            <option key={supervisor.sys.id} value={supervisor.fields.city}>
              {supervisor.fields.city}
            </option>
          ))}
        </select>

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
                return true; // Jeśli ani region, ani city nie jest zdefiniowane, odfiltruj wszystko
              }
            })
            .map((supervisor) => (
              <li
                key={supervisor.sys.id}
                className="flex gap-10 items-center mt-8"
              >
                <img
                  src={supervisor.fields.image?.fields.file.url}
                  className="w-40 h-40 rounded-full object-cover"
                />
                <div className="pb-2">
                  <p className="font-semibold text-xl text-primaryBlue">
                    {supervisor.fields.name}
                  </p>
                  <p className="flex gap-2">
                    <MapPin className="text-primaryBlue w-5" />
                    {supervisor.fields.city}
                  </p>
                  <p className="flex gap-2">
                    {" "}
                    <Mail className="text-primaryBlue w-5" />{" "}
                    {supervisor.fields.email}
                  </p>
                  <p className="flex gap-2">
                    {" "}
                    <Phone className="text-primaryBlue w-4" />{" "}
                    {supervisor.fields.phone}
                  </p>
                  <Link
                    href={`/superwizja/lista-superwizorow/${supervisor.fields.slug}`}
                  >
                    <button className="text-primaryBlue font-semibold">
                      czytaj więcej &rarr;
                    </button>
                  </Link>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
