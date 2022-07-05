import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const LanguageBtn = () => {
  const { language, setLanguage, writeBilingualContent } = useGlobalContext();

  return (
    <div>
      <button
        onClick={() => {
          setLanguage("en");
        }}
      >
        En
      </button>
      <button
        onClick={() => {
          setLanguage("fr");
        }}
      >
        Fr
      </button>
    </div>
  );
};

export default LanguageBtn;
