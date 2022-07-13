import { useState } from "react";
import { useGlobalContext } from "../context";

const LanguageBtn = () => {
  const { language, setLanguage, writeBilingualContent } = useGlobalContext();
  const [isEnActive, setIsEnActive] = useState(true);

  return (
    <div className="langBtns">
      <button
        className={
          isEnActive ? "langBtns-btn langBtns-btn-active" : "langBtns-btn"
        }
        onClick={() => {
          setLanguage("en");
          setIsEnActive(true);
        }}
      >
        En
      </button>
      <button
        className={
          isEnActive ? "langBtns-btn" : "langBtns-btn langBtns-btn-active"
        }
        onClick={() => {
          setLanguage("fr");
          setIsEnActive(false);
        }}
      >
        Fr
      </button>
    </div>
  );
};

export default LanguageBtn;
