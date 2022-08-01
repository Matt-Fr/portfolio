import React from "react";
import FormContact from "../components/FormContact";
import InfoContact from "../components/InfoContact";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contactSection">
      <InfoContact />
      <FormContact />
    </section>
  );
};

export default Contact;
