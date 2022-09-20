import React from "react";
import Detail from "./Detail";

function Summary() {
  return (
    <div className="flex flex-col space-y-4 md:space-y-8">
      <Detail header="Tip Amount" subHeader="Total" amount="4.27" />
      <Detail header="Total" subHeader="person" amount="32.79" />
    </div>
  );
}

export default Summary;
