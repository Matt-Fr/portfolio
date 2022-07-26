import React from "react";

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

  const checkFirstname = () => {
    if (firstname.length >= 2) {
      return true;
    }
  };
  const checkLastname = () => {
    if (lastname.length >= 2) {
      return true;
    }
  };

  const checkEmail = () => {
    //eslint-disable-next-line
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  };

  const checkMessage = () => {
    if (message.length >= 15) {
      return true;
    }
  };

  return (
    <div className="contact">
      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit="submit"
        className="formContact"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="firstName"></label>
        <input
          className="formContact-input"
          type="text"
          name="firstname"
          onChange={handleFirstname}
          placeholder={writeBilingualContent("Firstname", "Prénom")}
        />
        <label htmlFor="lastname"></label>
        <input
          type="text"
          name="lastname"
          onChange={handleLastname}
          placeholder={writeBilingualContent("Lastname", "Nom")}
          className="formContact-input"
        />
        <label htmlFor="company"></label>
        <input
          type="text"
          name="company"
          className="formContact-input"
          placeholder={writeBilingualContent(
            "Company (optional)",
            "Entreprise (optionnel)"
          )}
        />
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          onChange={handleEmail}
          className="formContact-input"
          placeholder="Email"
        />
        <label htmlFor="message"></label>
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleMessage}
          className="formContact-input"
        ></textarea>
        {checkFirstname() &&
        checkLastname() &&
        checkEmail() &&
        checkMessage() ? (
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
