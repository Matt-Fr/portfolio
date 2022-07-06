import React from "react";
import { useGlobalContext } from "../context";
import dataEn from "../data";
import kasa from "../assets/kasa.jpg";
import ModalProject from "../components/ModalProject";

const Projects = () => {
  const { dataModal, setDataModal } = useGlobalContext();
  return (
    <>
      <section className="sectionProjects">
        {dataEn.map((project) => {
          const { id, title, description, picture } = project;
          console.log(project);
          return (
            <article
              onClick={(e) => {
                setDataModal({ title: title, description: description });
                console.log(dataModal);
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
      <ModalProject></ModalProject>
    </>
  );
};

export default Projects;
