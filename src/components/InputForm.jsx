import React from "react";
import { Formik } from "formik";

function InputForm() {
  const handleSubmit = () => {};
  return (
    <div className="md:h-full md:w-1/2">
      <Formik
        initialValues={{ bill: "", tip: "", people: "" }}
        validate={(values) => {
          const errors = {};
          if (values.people === "0") {
            errors.bill = `Can't be zero`;
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          isSubmitting,
          touched,
          handleBlur,
          handleChange,
        }) => (
          <form
            onSubit={handleSubmit}
            className="h-full flex flex-col justify-between space-y-8"
          >
            <div className="flex flex-col justify-between space-y-2">
              <label
                htmlFor="bill"
                className="text-lg font-semibold text-DarkGrayishCyan"
              >
                Bill
              </label>
              <input
                type="text"
                name="bill"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bill}
                placeholder="0"
                className="px-4 py-2 text-VeryDarkCyan bg-VeryLightGrayishCyan text-right rounded-md focus:outline-2 outline-StrongCyan cursor-pointer"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-lg font-semibold text-DarkGrayishCyan">
                Select Tip %
              </span>
              <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-4">
                <label
                  htmlFor="tip"
                  className="inline-flex items-center justify-center text-xl font-bold bg-VeryDarkCyan text-White rounded-md
                  hover:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:cursor-pointer"
                >
                  5%
                </label>
                <input type="radio" name="tip" id="" className="hidden" />
                <label
                  htmlFor="tip"
                  className="inline-flex items-center justify-center text-xl font-bold bg-VeryDarkCyan text-White rounded-md
                  hover:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:cursor-pointer"
                >
                  10%
                </label>
                <input type="radio" name="tip" id="" className="hidden" />
                <label
                  htmlFor="tip"
                  className="inline-flex items-center justify-center text-xl font-bold bg-VeryDarkCyan text-White rounded-md
                  hover:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:cursor-pointer"
                >
                  15%
                </label>
                <input type="radio" name="tip" id="" className="hidden" />
                <label
                  htmlFor="tip"
                  className="inline-flex items-center justify-center text-xl font-bold bg-VeryDarkCyan text-White rounded-md
                  hover:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:cursor-pointer"
                >
                  20%
                </label>
                <input type="radio" name="tip" id="" className="hidden" />
                <label
                  htmlFor="tip"
                  className="inline-flex items-center justify-center text-xl font-bold bg-VeryDarkCyan text-White rounded-md
                  hover:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:cursor-pointer"
                >
                  25%
                </label>
                <input type="radio" name="tip" id="" className="hidden" />
                <input
                  type="text"
                  name="tip"
                  id=""
                  placeholder="Custom"
                  className="p-2 text-2xl bg-VeryLightGrayishCyan text-center rounded-md focus:outline-2 outline-StrongCyan cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <label
                  htmlFor="people"
                  className="text-lg font-semibold text-DarkGrayishCyan"
                >
                  Number of People
                </label>
              </div>
              <input
                type="text"
                name="people"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.people}
                placeholder="0"
                className="px-4 py-2 text-VeryDarkCyan bg-VeryLightGrayishCyan focus:outline-2 outline-StrongCyan text-right rounded-sm cursor-pointer"
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default InputForm;
