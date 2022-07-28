import React from "react";
import { useGlobalContext } from "../context";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const InfoContact = () => {
  const { writeBilingualContent } = useGlobalContext();
  return (
    <section className="contactSection-info">
      <a
        href="https://github.com/Matt-Fr"
        target="_blank"
        rel="noopener noreferrer"
        className="contactSection-info-link"
      >
        <FaGithub className="contactSection-info-link-icon" />
        <h3 className="contactSection-info-link-title">
          {writeBilingualContent("My Github", "Mon Github")}
        </h3>
      </a>
      <a
        href="https://www.linkedin.com/in/matthieu-franck/"
        target="_blank"
        rel="noopener noreferrer"
        className="contactSection-info-link"
      >
        <FaLinkedin className="contactSection-info-link-icon" />
        <h3 className="contactSection-info-link-title">
          {writeBilingualContent("Find me on Linkedin", "Mon Linkedin")}
        </h3>
      </a>

      <a
        href="mailto:matthieu_franck@orange.fr"
        className="contactSection-info-link"
      >
        <GrMail className="contactSection-info-link-icon" />
        <h3 className="contactSection-info-link-title">
          {writeBilingualContent(
            "or send me an Email",
            "Écrivez-moi par Email"
          )}
        </h3>
      </a>
    </section>
  );
};

export default InfoContact;
