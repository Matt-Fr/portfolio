import React from "react";
import "./Error.scss";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Error = () => {
  const { writeBilingualContent } = useGlobalContext();
  return (
    <section className="errorSection">
      <h1 className="errorSection-title">
        {writeBilingualContent("Error 404", "Erreur 404")}
      </h1>
      <Link className="errorSection-link" to="/">
        {writeBilingualContent("Go back home !!", "Retournes à l'accueil !!")}
      </Link>
    </section>
  );
};

export default Error;
