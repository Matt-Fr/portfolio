import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalContext } from "../context";

const FormContact = () => {
  const { writeBilingualContent } = useGlobalContext();
  const [firstname, setFirstame] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstname = (input) => {
    setFirstame(input.target.value);
  };
  const handleLastname = (input) => {
    setLastname(input.target.value);
  };
  const handleEmail = (input) => {
    setEmail(input.target.value);
  };
  const handleMessage = (input) => {
    setMessage(input.target.value);
  };

  return (
    <div className="contact">
      <form name="contact" method="post" data-netlify="true" onSubmit="submit">
        <input type="hidden" name="form-name" value="contact" />
        <label for="firstName"></label>
        <input
          type="text"
          name="firstname"
          onChange={handleFirstname}
          placeholder={writeBilingualContent("Firstname", "Prénom")}
        />
        <label for="lastname"></label>
        <input
          type="text"
          name="lastname"
          onChange={handleLastname}
          placeholder={writeBilingualContent("Lastname", "Nom")}
        />
        <label for="company"></label>
        <input
          type="text"
          name="company"
          placeholder={writeBilingualContent(
            "Company (optional)",
            "Entreprise (optionnel)"
          )}
        />
        <label for="email"></label>
        <input
          type="email"
          name="email"
          onChange={handleEmail}
          placeholder="Email"
        />
        <label for="message"></label>
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleMessage}
        ></textarea>
        {firstname ? (
          <button type="submit">
            {writeBilingualContent("send", "Envoyer")}
          </button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default FormContact;
