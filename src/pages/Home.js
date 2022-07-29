import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Projects from "./Projects";
import "./Home.scss";

const Home = () => {
  const { language, setLanguage, writeBilingualContent } = useGlobalContext();
  console.log(language);
  return (
    <section>
      <div className="homeContainer">
        <h1 className="homeContainer-name">Matthieu Franck</h1>
        <h2 className="homeContainer-job">
          {writeBilingualContent(
            "I'm a Front-End Developer",
            "Je suis développeur Front-End"
          )}
        </h2>
        <div className="homeContainer-linkContainer">
          <Link to="/projects" className="homeContainer-linkContainer-link">
            {writeBilingualContent("View Projects", "Voir mes projets")}
          </Link>
          <Link to="/contact" className="homeContainer-linkContainer-link">
            {writeBilingualContent("Contact me", "Me contacter")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
