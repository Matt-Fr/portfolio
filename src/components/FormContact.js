import React from "react";

import { useState } from "react";
import { useGlobalContext } from "../context";

const FormContact = () => {
  const { writeBilingualContent } = useGlobalContext();
  const [firstname, setFirstame] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorFirstname, setErrorFirstame] = useState(false);
  const [errorLastname, setErrorLastname] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

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

  const showErrorMessages = () => {
    if (!firstname) {
      setErrorFirstame(true);
    } else {
      setErrorFirstame(false);
    }

    if (!lastname) {
      setErrorLastname(true);
    } else {
      setErrorLastname(false);
    }
    if (!email) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
    if (!message) {
      setErrorMessage(true);
    }
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

  // peut etre tout revoir en créant des fonctions pour les classnames comme pour moviefinder

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

  const checkAll = () => {
    if (checkFirstname() && checkLastname() && checkEmail() && checkMessage())
      return true;
    else return false;
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
        <h1 className="formContact-title">
          {writeBilingualContent("Contact", "Contactez-moi")}
        </h1>
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="firstName"></label>
        <input
          className={
            errorFirstname
              ? "formContact-input formContact-input-error"
              : "formContact-input"
          }
          type="text"
          name="firstname"
          onChange={handleFirstname}
          placeholder={writeBilingualContent("First name", "Prénom")}
        />
        {errorFirstname ? (
          <span className="formContact-errorMsg">
            {writeBilingualContent(
              "Please write your first name",
              "Écrivez votre prénom"
            )}
          </span>
        ) : (
          ""
        )}

        <label htmlFor="lastname"></label>
        <input
          type="text"
          name="lastname"
          onChange={handleLastname}
          placeholder={writeBilingualContent("Last name", "Nom")}
          className={
            errorLastname
              ? "formContact-input formContact-input-error"
              : "formContact-input"
          }
        />
        {errorLastname ? (
          <span className="formContact-errorMsg">
            {writeBilingualContent(
              "Please write your last name",
              "Écrivez votre nom de famille"
            )}
          </span>
        ) : (
          ""
        )}
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
          className={
            errorEmail
              ? "formContact-input formContact-input-error"
              : "formContact-input"
          }
          placeholder="Email"
        />
        {errorEmail ? (
          <span className="formContact-errorMsg">
            {writeBilingualContent(
              "Write a valid Email address",
              "Écrivez une adresse email valide"
            )}
          </span>
        ) : (
          ""
        )}
        <label htmlFor="message"></label>
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleMessage}
          className={
            errorMessage
              ? "formContact-input formContact-input-error"
              : "formContact-input"
          }
        ></textarea>
        {errorMessage ? (
          <span className="formContact-errorMsg">
            {writeBilingualContent(
              "Must be at least 15 characters",
              "Écrivez au moins 15 caractères"
            )}
          </span>
        ) : (
          ""
        )}

        <button
          type={checkAll() ? "submit" : "button"}
          className={
            checkAll() ? "formContact-btn submitBtn" : "formContact-btn fakeBtn"
          }
          onClick={showErrorMessages}
        >
          {writeBilingualContent("send", "Envoyer")}
        </button>
      </form>
    </div>
  );
};

export default FormContact;
