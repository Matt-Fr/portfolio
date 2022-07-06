import React, { useState } from "react";
import { useGlobalContext } from "../context";
import dataEn from "../data";
import kasa from "../assets/kasa.jpg";

const Projects = () => {
  return (
    <section className="sectionProjects">
      {dataEn.map((project) => {
        const { id, title, description, picture } = project;
        console.log(project);
        return (
          <article
            onClick={(e) => {
              console.log(e.currentTarget);
            }}
            key={id}
            className="sectionProjects-article"
          >
            <h1>{title}</h1>
            <img
              src={kasa}
              alt={title}
              className="sectionProjects-article-img"
            />
          </article>
        );
      })}
    </section>
  );
};

export default Projects;
