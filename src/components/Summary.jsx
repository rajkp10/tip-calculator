import React from "react";
import Detail from "./Detail";
import { useGlobalContext } from "./context";

function Summary() {
  const { totalTip, perPersonTip } = useGlobalContext();

  return (
    <section className="flex flex-col space-y-4 md:space-y-8">
      <Detail header="Tip Amount" subHeader="person" amount={totalTip} />
      <Detail header="Total" subHeader="person" amount={perPersonTip} />
    </section>
  );
}

export default Summary;
