"use client";
import CountUp from "react-countup";

export default function Counter({ end, decimals }) {
  return (
    <div className="text-4xl lg:text-5xl">
      <CountUp
        end={end}
        duration={5}
        separator=" "
        decimals={decimals}
        decimal=","
      />
    </div>
  );
}
