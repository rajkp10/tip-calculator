import React, { useState, useContext, useRef } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [totalTip, setTotalTip] = useState(0.0);
  const [perPersonTip, setPerPersonTip] = useState(0.0);
  const formikRef = useRef();

  const evaluateTip = (bill, tip, person) => {
    setTotalTip(((bill * tip) / 100).toFixed(2));
    setPerPersonTip(((bill * tip) / 100 / person).toFixed(2));
  };

  const handleReset = () => {
    setTotalTip(0.0);
    setPerPersonTip(0.0);
    formikRef.current?.resetForm();
  };

  return (
    <AppContext.Provider
      value={{ totalTip, perPersonTip, evaluateTip, handleReset, formikRef }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
