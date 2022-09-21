import React from "react";
import Dollar from "../images/icon-dollar.svg";

function Detail({ header, subHeader, amount }) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <h4 className="text-lg text-White">{header}</h4>
        <span className="text-sm text-DarkGrayishCyan font-semibold">
          / {subHeader}
        </span>
      </div>
      <div className="flex justify-center items-baseline space-x-1">
        <img src={Dollar} alt="" className="h-1/2 md:h-3/5" />
        <h1 className="text-3xl md:text-4xl font-bold text-StrongCyan">
          {amount}
        </h1>
      </div>
    </div>
  );
}

export default Detail;
