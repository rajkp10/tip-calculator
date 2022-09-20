import React from "react";
import Summary from "./Summary";

function FinalShare() {
  return (
    <div className="md:w-1/2 px-6 py-6 md:p-8 rounded-xl bg-VeryDarkCyan flex flex-col space-y-4 md:space-y-0 justify-between">
      <Summary />
      <button className="h-10 rounded-md bg-StrongCyan text-VeryDarkCyan text-lg font-semibold uppercase hover:bg-LightGrayishCyan">
        reset
      </button>
    </div>
  );
}

export default FinalShare;