"use client";
import CountUp from "react-countup";

export default function Counter({ end, decimals }) {
  return (
    <h1 className="">
      <CountUp
        end={end}
        duration={5}
        separator=" "
        decimals={decimals}
        decimal=","
      />
    </h1>
  );
}
