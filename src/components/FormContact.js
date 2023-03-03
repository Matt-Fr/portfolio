import React, { useState } from "react";
import { useGlobalContext } from "../context";

const FormContact = () => {
  const { writeBilingualContent } = useGlobalContext();
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    message: false,
  });

  const handleInputChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const showErrorMessages = () => {
    const newErrors = {
      firstname: !checkFirstname(),
      lastname: !checkLastname(),
      email: !checkEmail(),
      message: !checkMessage(),
    };
    setErrors(newErrors);
  };

  const checkFirstname = () => {
    return inputs.firstname.length >= 2;
  };

  const checkLastname = () => {
    return inputs.lastname.length >= 2;
  };

  const checkEmail = () => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return inputs.email.match(regexEmail) !== null;
  };

  const checkMessage = () => {
    return inputs.message.length >= 15;
  };

  const checkAll = () => {
    return (
      checkFirstname() && checkLastname() && checkEmail() && checkMessage()
    );
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    showErrorMessages();
    if (checkAll()) {
      // handle form submission
      console.log("Form submitted");
    }
  };

  return (
    <div className="contact">
      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleFormSubmit}
        className="formContact"
      >
        <h1 className="formContact-title">
          {writeBilingualContent("Contact", "Contactez-moi")}
        </h1>
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="firstName"></label>
        <input
          className={
            errors.firstname
              ? "formContact-input formContact-input-error"
              : "formContact-input"
          }
          type="text"
          name="firstname"
          onChange={handleInputChange}
          value={inputs.firstname}
          placeholder={writeBilingualContent("First name", "Prénom")}
        />
        {errors.firstname ? (
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
          onChange={handleInputChange}
          value={inputs.lastname}
          placeholder={writeBilingualContent("Last name", "Nom")}
          className={
            errors.lastname
              ? "formContact-input formContact-input-error"
              : "formContact-input"
          }
        />
        {errors.lastname ? (
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
          onChange={handleInputChange}
          value={inputs.email}
          className={
            errors.email
              ? "formContact-input formContact-input-error"
              : "formContact-input"
          }
          placeholder="Email"
        />
        {errors.email ? (
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
          onChange={handleInputChange}
          value={inputs.message}
          className={
            errors.message
              ? "formContact-input formContact-input-error"
              : "formContact-input"
          }
        ></textarea>
        {errors.message ? (
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
