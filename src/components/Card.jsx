import React from "react";
import InputForm from "../components/InputForm";
import FinalShare from "./FinalShare";

function Card() {
  return (
    <div className="text-3xl w-full md:h-[60%] md:w-[55%] bg-White p-8 mt-56 md:mt-40 flex flex-col md:flex-row rounded-t-3xl md:rounded-2xl shadow-xl space-y-8 md:space-y-0 md:space-x-8">
      <InputForm />
      <FinalShare />
    </div>
  );
}

export default Card;
