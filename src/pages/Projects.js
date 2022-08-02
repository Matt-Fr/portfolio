import React from "react";
import { useGlobalContext } from "../context";
import data from "../data";
import ModalProject from "../components/ModalProject";
import "./Projects.scss";
import { useEffect } from "react";

const Projects = () => {
  const { setDataModal, setOpenModal, openModal } = useGlobalContext();

  useEffect(() => {
    if (openModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  return (
    <>
      <section className="sectionProjects">
        {data.map((project) => {
          const {
            id,
            title,
            descriptionEn,
            descriptionFr,
            picture,
            logo,
            tags,
            demo,
            linkGithub,
          } = project;

          return (
            <article
              onClick={(e) => {
                setDataModal({
                  title,
                  descriptionEn,
                  descriptionFr,
                  picture,
                  tags,
                  demo,
                  linkGithub,
                });

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
