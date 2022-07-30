import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

import "./Home.scss";

const Home = () => {
  const { language, writeBilingualContent } = useGlobalContext();
  console.log(language);
  return (
    <section>
      <div className="homeInfoContainer">
        <h1 className="homeInfoContainer-name">Matthieu Franck</h1>
        <h2 className="homeInfoContainer-job">
          {writeBilingualContent(
            "I'm a Front-End Developer",
            "Je suis développeur Front-End"
          )}
        </h2>
        <div className="homeInfoContainer-linkContainer">
          <Link to="/projects" className="homeInfoContainer-linkContainer-link">
            {writeBilingualContent("View Projects", "Voir mes projets")}
          </Link>
          <Link to="/contact" className="homeInfoContainer-linkContainer-link">
            {writeBilingualContent("Contact me", "Me contacter")}
          </Link>
        </div>
      </div>
      <div className=""></div>
    </section>
  );
};

export default Home;
