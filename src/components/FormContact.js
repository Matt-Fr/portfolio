import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalContext } from "../context";

const FormContact = () => {
  const { language, setLanguage, writeBilingualContent } = useGlobalContext();
  const [name, setName] = useState("");

  const handleChange = (input) => {
    setName(input.target.value);
  };
  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="contact">
      <form name="contact" method="post" data-netlify="true" onSubmit="submit">
        <input type="hidden" name="form-name" value="contact" />
        <label for="firstName"></label>
        <input
          type="text"
          name="firstname"
          onChange={handleChange}
          placeholder={writeBilingualContent("Firstname", "Prénom")}
        />
        <label for="lastname"></label>
        <input
          type="text"
          name="lastname"
          // onChange={handleChange}
          placeholder={writeBilingualContent("Lastname", "Nom")}
        />
        <label for="company"></label>
        <input
          type="text"
          name="company"
          // onChange={handleChange}
          placeholder={writeBilingualContent(
            "Company (optional)",
            "Entreprise (optionnel)"
          )}
        />
        <label for="email"></label>
        <input type="email" name="email" placeholder="Email" />
        <label for="message"></label>
        <textarea name="message" placeholder="Message"></textarea>
        {name ? (
          <button type="submit">
            {writeBilingualContent("send", "Envoyer")}
          </button>
        ) : (
          ""
        )}
        {/* <button type="submit">
          {writeBilingualContent("send", "Envoyer")}
        </button> */}
      </form>
    </div>
  );
};

export default FormContact;
