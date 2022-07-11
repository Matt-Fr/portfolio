import React from "react";
import { useGlobalContext } from "../context";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalProject = () => {
  const { writeBilingualContent, dataModal, openModal, setOpenModal } =
    useGlobalContext();
  const {
    title,
    descriptionEn,
    descriptionFr,
    picture,
    tags,
    demo,
    linkGithub,
  } = dataModal;

  return (
    <>
      <div
        className={
          openModal
            ? "backgroundModal backgroundModalOpen"
            : "backgroundModal backgroundModalClose"
        }
        onClick={() => {
          setOpenModal(false);
        }}
      ></div>
      <div
        className={
          openModal ? "modalProject openModal" : "ModalProject closeModal"
        }
      >
        <img src={picture} alt={title} className="modalProject-img" />

        <div className="modalProject-info">
          <button
            className="modalProject-closeBtn"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <AiOutlineCloseCircle className="modalProject-closeBtn-icon"></AiOutlineCloseCircle>
          </button>
          <div className=" modalProject-info">
            <h1 className="modalProject-info-title">{title}</h1>
            <p className="modalProject-info-description">
              {writeBilingualContent(descriptionEn, descriptionFr)}
            </p>
            <h3 className="modalProject-info-about">
              {writeBilingualContent("about", "info")}
            </h3>
            <div className="modalProject-info-tags">
              {tags &&
                tags.map((tag) => {
                  return (
                    <span className="modalProject-info-tags-tag">{tag}</span>
                  );
                })}
            </div>
            <div className="modalProject-info-links">
              <a
                className="modalProject-info-links-link"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                className="modalProject-info-links-link"
                href={linkGithub}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalProject;
