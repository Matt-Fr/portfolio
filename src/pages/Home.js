import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Projects from "./Projects";

const Home = () => {
  const { language, setLanguage, writeBilingualContent } = useGlobalContext();
  console.log(language);
  return (
    <section>
      <h1>
        {writeBilingualContent(
          "hey, my name is MattFR, check out my projects",
          "hey je m'appelle matt, regarde mes projets"
        )}
      </h1>
      <Link to="/projects">
        {writeBilingualContent("View Projects", "Voir mes projets")}
      </Link>
    </section>
  );
};

export default Home;
