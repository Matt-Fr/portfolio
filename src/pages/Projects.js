import React from "react";
import { useGlobalContext } from "../context";
import dataEn from "../data";
import kasa from "../assets/kasa.jpg";
import ModalProject from "../components/ModalProject";

const Projects = () => {
  const { dataModal, setDataModal, setOpenModal } = useGlobalContext();
  return (
    <>
      <section className="sectionProjects">
        {dataEn.map((project) => {
          const { id, title, description, picture, logo } = project;
          console.log(project);
          return (
            <article
              onClick={(e) => {
                setDataModal({
                  title,
                  description,
                  picture,
                });
                console.log(dataModal);
                setOpenModal(true);
              }}
              key={id}
              className="sectionProjects-article"
            >
              <img
                src={logo}
                alt={title}
                className="sectionProjects-article-img"
              />
            </article>
          );
        })}
      </section>
      <ModalProject />
    </>
  );
};

export default Projects;
