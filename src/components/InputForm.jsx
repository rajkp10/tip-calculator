import React from "react";
import { Field, Formik } from "formik";
import personsvg from "../images/icon-person.svg";
import dollarsvg from "../images/icon-dollar.svg";
import { useGlobalContext } from "./context";

function InputForm() {
  const { evaluateTip } = useGlobalContext();

  return (
    <div className="md:h-full md:w-1/2">
      <Formik
        initialValues={{ bill: "", tip: "", people: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.bill || values.bill === "0") {
            errors.bill = "Can't be zero";
          }
          if (!values.people || values.people === "0") {
            errors.people = "Can't be zero";
          }
          return errors;
        }}
        onSubmit={(values) => {
          evaluateTip(
            parseFloat(values.bill),
            parseFloat(values.tip),
            parseFloat(values.people)
          );
        }}
      >
        {({ errors, handleChange, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className="h-full flex flex-col justify-between space-y-8"
          >
            <div className="flex flex-col justify-between space-y-2">
              <div className="flex justify-between">
                <label
                  htmlFor="bill"
                  className="text-lg font-semibold text-DarkGrayishCyan"
                >
                  Bill
                </label>
                <span className="text-sm text-red-600">{errors.bill}</span>
              </div>
              <div className="relative">
                <img
                  src={dollarsvg}
                  alt=""
                  className="absolute h-1/2 top-3 left-3"
                />
                <Field
                  type="text"
                  name="bill"
                  id="bill"
                  placeholder="0"
                  className="w-full px-4 py-2 text-VeryDarkCyan bg-VeryLightGrayishCyan text-right rounded-md focus:outline-2 outline-StrongCyan cursor-pointer"
                  onChange={(e) => {
                    handleChange(e);
                    setTimeout(() => handleSubmit(), 500);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-lg font-semibold text-DarkGrayishCyan">
                Select Tip %
              </span>
              <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-4">
                <label
                  htmlFor="5"
                  className="inline-flex items-center justify-center text-xl font-bold bg-VeryDarkCyan text-White rounded-md
                  hover:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:cursor-pointer"
                >
                  5%
                </label>
                <Field
                  type="radio"
                  name="tip"
                  id="5"
                  value="5"
                  className="hidden"
                />
                <label
                  htmlFor="10"
                  className="inline-flex items-center justify-center text-xl font-bold bg-VeryDarkCyan text-White rounded-md
                  hover:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:cursor-pointer"
                >
                  10%
                </label>
                <Field
                  type="radio"
                  name="tip"
                  id="10"
                  value="10"
                  className="hidden"
                />
                <label
                  htmlFor="15"
                  className="inline-flex items-center justify-center text-xl font-bold bg-VeryDarkCyan text-White rounded-md
                  hover:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:cursor-pointer"
                >
                  15%
                </label>
                <Field
                  type="radio"
                  name="tip"
                  id="15"
                  value="15"
                  className="hidden"
                />
                <label
                  htmlFor="25"
                  className="inline-flex items-center justify-center text-xl font-bold bg-VeryDarkCyan text-White rounded-md
                  hover:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:cursor-pointer"
                >
                  25%
                </label>
                <Field
                  type="radio"
                  name="tip"
                  id="25"
                  value="25"
                  className="hidden"
                />
                <label
                  htmlFor="50"
                  className="inline-flex items-center justify-center text-xl font-bold bg-VeryDarkCyan text-White rounded-md
                  hover:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:cursor-pointer"
                >
                  50%
                </label>
                <Field
                  type="radio"
                  name="tip"
                  id="50"
                  value="50"
                  className="hidden"
                />
                <Field
                  type="text"
                  name="tip"
                  id="custom"
                  placeholder="Custom"
                  className="p-2 text-2xl font-bold text-VeryDarkCyan bg-VeryLightGrayishCyan text-center rounded-md focus:outline-2 outline-StrongCyan cursor-pointer"
                  onChange={(e) => {
                    handleChange(e);
                    console.log(e.target.value);
                    setTimeout(() => handleSubmit(), 500);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-baseline">
                <label
                  htmlFor="people"
                  className="text-lg font-semibold text-DarkGrayishCyan"
                >
                  Number of People
                </label>
                <span className="text-sm text-red-600">{errors.people}</span>
              </div>
              <div className="relative">
                <img
                  src={personsvg}
                  alt=""
                  className="absolute h-1/2 top-3 left-3"
                />
                <Field
                  type="text"
                  name="people"
                  id="people"
                  placeholder="0"
                  className="w-full px-4 py-2 text-VeryDarkCyan bg-VeryLightGrayishCyan focus:outline-2 outline-StrongCyan text-right rounded-md cursor-pointer"
                  onChange={(e) => {
                    handleChange(e);
                    setTimeout(() => handleSubmit(), 500);
                  }}
                />
              </div>
            </div>
            {/* <button
              type="submit"
              className="py-2 text-2xl rounded-md text-StrongCyan bg-VeryDarkCyan"
            >
              submit
            </button> */}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default InputForm;
