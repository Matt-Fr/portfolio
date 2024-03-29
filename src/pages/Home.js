import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import pdf from "../assets/CV-Matthieu-Franck.pdf";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { default as AuthorPic } from "../assets/meupdatedb&w.jpg";

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
          <a
            href={pdf}
            target="_blank"
            className="homeInfoContainer-linkContainer-link downloadCv"
            rel="noopener noreferrer"
          >
            {writeBilingualContent("Download resume", "Télécharger CV")}
          </a>
        </div>
        <p className="homeInfoContainer-description">
          {writeBilingualContent(
            "After working in the tourism industry, I decided to switch to web development. I obtained a diploma to become a Front-End developer, and I discovered my passion for React. Always in search of new knowledge, I am currently learning upcoming technologies such as Next.js and TypeScript. I am particularly interested in finding a team with diverse talents, with whom I could continue to learn and develop my skills.",
            "Après avoir travaillé dans le secteur du tourisme, j'ai décidé de me reconvertir dans le développement web. J'ai suivi une formation pour devenir développeur Front-End, et j'ai découvert ma passion pour React. Toujours en quête de nouvelles connaissances, j'apprends actuellement les technologies de demain telles que Next.js et TypeScript. Je suis particulièrement intéressé par la recherche d'une équipe composée de personnes aux talents variés, avec qui je pourrais continuer à apprendre et à développer mes compétences."
          )}
        </p>
      </div>
      <div className="photoContainer">
        <img src={AuthorPic} alt="author" className="photoContainer-img" />
      </div>
      <div className="techContainer">
        <h2 className="techContainer-title">
          {writeBilingualContent("Technical skills", "Mes outils")}
        </h2>
        <div className="techContainer-articlesContainer">
          <article className="techContainer-articlesContainer-tech">
            <SiNextdotjs className="techContainer-articlesContainer-tech-icon" />
            <h3 className="techContainer-articlesContainer-tech-title">
              Next.js
            </h3>
          </article>
          <article className="techContainer-articlesContainer-tech">
            <SiTypescript className="techContainer-articlesContainer-tech-icon" />
            <h3 className="techContainer-articlesContainer-tech-title">
              Typescript
            </h3>
          </article>
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
