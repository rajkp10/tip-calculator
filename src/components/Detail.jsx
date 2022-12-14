import React from "react";
import Dollar from "../images/icon-dollar.svg";

function Detail({ header, subHeader, amount }) {
  return (
    <section className="flex justify-between">
      <summary className="flex flex-col">
        <h4 className="text-lg text-White">{header}</h4>
        <span className="text-sm text-DarkGrayishCyan font-semibold">
          / {subHeader}
        </span>
      </summary>
      <summary className="flex justify-center items-baseline space-x-1">
        <img src={Dollar} alt="" className="h-1/2 md:h-3/5" />
        <h1 className="text-3xl md:text-4xl font-bold text-StrongCyan">
          {amount}
        </h1>
      </summary>
    </section>
  );
}

export default Detail;
