import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import "./Home.scss";

const Home = () => {
  const { language, writeBilingualContent } = useGlobalContext();
  console.log(language);
  return (
    <section className="homeSection">
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
      <div className="techContainer">
        <h2 className="techContainer-title">
          {writeBilingualContent("Technical skills", "Mes outils")}
        </h2>
        <div className="techContainer-articlesContainer">
          <article className="techContainer-articlesContainer-tech">
            <FaReact className="techContainer-articlesContainer-tech-icon" />
            <h3 className="techContainer-articlesContainer-tech-title">
              React
            </h3>
          </article>
          <article className="techContainer-articlesContainer-tech">
            <IoLogoJavascript className="techContainer-articlesContainer-tech-icon" />
            <h3 className="techContainer-articlesContainer-tech-title">
              Javascript
            </h3>
          </article>
          <article className="techContainer-articlesContainer-tech">
            <FaGitAlt className="techContainer-articlesContainer-tech-icon" />
            <h3 className="techContainer-articlesContainer-tech-title">Git</h3>
          </article>
          <article className="techContainer-articlesContainer-tech">
            <FaSass className="techContainer-articlesContainer-tech-icon" />
            <h3 className="techContainer-articlesContainer-tech-title">Sass</h3>
          </article>
          <article className="techContainer-articlesContainer-tech">
            <FaHtml5 className="techContainer-articlesContainer-tech-icon" />
            <h3 className="techContainer-articlesContainer-tech-title">
              HTML5
            </h3>
          </article>
          <article className="techContainer-articlesContainer-tech">
            <FaCss3 className="techContainer-articlesContainer-tech-icon" />
            <h3 className="techContainer-articlesContainer-tech-title">CSS3</h3>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Home;
