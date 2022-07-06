import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //   const getStorageLanguage = () => {
  //     let lang = "en";
  //     if (localStorage.getItem("language")) {
  //       lang = localStorage.getItem;
  //     }
  //     return lang;
  //   };

  const [dataTitle, setDataTitle] = useState("");

  const [language, setLanguage] = useState("en");

  const writeBilingualContent = (eng, fr) => {
    if (language === "en") {
      return eng;
    } else return fr;
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        writeBilingualContent,
        dataTitle,
        setDataTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
