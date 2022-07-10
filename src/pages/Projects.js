import React from "react";
import { useGlobalContext } from "../context";
import data from "../data";
import kasa from "../assets/kasa.jpg";
import ModalProject from "../components/ModalProject";

const Projects = () => {
  const { dataModal, setDataModal, setOpenModal } = useGlobalContext();
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
