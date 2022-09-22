import React from "react";
import { Field, Formik } from "formik";
import personsvg from "../images/icon-person.svg";
import dollarsvg from "../images/icon-dollar.svg";
import { useGlobalContext } from "./context";

function InputForm() {
  const { evaluateTip, formikRef } = useGlobalContext();

  return (
    <div className="md:h-full md:w-1/2">
      <Formik
        innerRef={formikRef}
        initialValues={{ bill: "", tip: "", people: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.bill || values.bill === "0") {
            errors.bill = "Can't be zero";
          }
          if (!values.tip) {
            errors.tip = "Can't be zero";
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
                  type="number"
                  name="bill"
                  id="bill"
                  placeholder="0"
                  className={`w-full px-4 py-2 font-bold text-VeryDarkCyan bg-VeryLightGrayishCyan text-right rounded-md focus:outline-2 outline-StrongCyan cursor-pointer ${
                    errors.bill ? "border-2 border-red-500" : "border-none"
                  }`}
                  step="0.01"
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
                <div>
                  <Field
                    type="radio"
                    name="tip"
                    id="5"
                    value="5"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="5"
                    className="inline-flex items-center justify-center h-full w-full text-xl font-bold bg-VeryDarkCyan text-White rounded-md
                  hover:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:cursor-pointer group-checked:bg-StrongCyan peer-checked:bg-StrongCyan peer-checked:text-VeryDarkCyan"
                    onClick={() => {
                      setTimeout(() => handleSubmit(), 500);
                    }}
                  >
                    5%
                  </label>
                </div>
                <div>
                  <Field
                    type="radio"
                    name="tip"
                    id="10"
                    value="10"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="10"
                    className="inline-flex items-center justify-center h-full w-full text-xl font-bold bg-VeryDarkCyan text-White rounded-md
                  hover:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:cursor-pointer group-checked:bg-StrongCyan peer-checked:bg-StrongCyan peer-checked:text-VeryDarkCyan"
                    onClick={() => {
                      setTimeout(() => handleSubmit(), 500);
                    }}
                  >
                    10%
                  </label>
                </div>
                <div>
                  <Field
                    type="radio"
                    name="tip"
                    id="15"
                    value="15"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="15"
                    className="inline-flex items-center justify-center h-full w-full text-xl font-bold bg-VeryDarkCyan text-White rounded-md
                  hover:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:cursor-pointer group-checked:bg-StrongCyan peer-checked:bg-StrongCyan peer-checked:text-VeryDarkCyan"
                    onClick={() => {
                      setTimeout(() => handleSubmit(), 500);
                    }}
                  >
                    15%
                  </label>
                </div>
                <div>
                  <Field
                    type="radio"
                    name="tip"
                    id="25"
                    value="25"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="25"
                    className="inline-flex items-center justify-center h-full w-full text-xl font-bold bg-VeryDarkCyan text-White rounded-md
                  hover:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:cursor-pointer group-checked:bg-StrongCyan peer-checked:bg-StrongCyan peer-checked:text-VeryDarkCyan"
                    onClick={() => {
                      setTimeout(() => handleSubmit(), 500);
                    }}
                  >
                    25%
                  </label>
                </div>
                <div>
                  <Field
                    type="radio"
                    name="tip"
                    id="50"
                    value="50"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="50"
                    className="inline-flex items-center justify-center h-full w-full text-xl font-bold bg-VeryDarkCyan text-White rounded-md
                  hover:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:cursor-pointer group-checked:bg-StrongCyan peer-checked:bg-StrongCyan peer-checked:text-VeryDarkCyan"
                    onClick={() => {
                      setTimeout(() => handleSubmit(), 500);
                    }}
                  >
                    50%
                  </label>
                </div>
                <Field
                  type="number"
                  name="tip"
                  id="custom"
                  placeholder="Custom"
                  step="0.01"
                  className="p-2 text-2xl font-bold text-VeryDarkCyan bg-VeryLightGrayishCyan text-center rounded-md focus:outline-2 outline-StrongCyan cursor-pointer"
                  onChange={(e) => {
                    handleChange(e);
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
                  type="number"
                  name="people"
                  id="people"
                  placeholder="0"
                  step="1"
                  className={`w-full px-4 py-2 font-bold text-VeryDarkCyan bg-VeryLightGrayishCyan focus:outline-2 outline-StrongCyan text-right rounded-md cursor-pointer ${
                    errors.people ? "border-2 border-red-500" : "border-none"
                  }`}
                  onChange={(e) => {
                    handleChange(e);
                    setTimeout(() => handleSubmit(), 500);
                  }}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default InputForm;
