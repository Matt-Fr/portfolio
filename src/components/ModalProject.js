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
        <div
          className={openModal ? "modalProject-bcg" : "ModalProject closeModal"}
        ></div>
        <div className="modalProject-imgContainer">
          <img
            src={picture}
            alt={title}
            className="modalProject-imgContainer-img"
          />
        </div>

        <div className="modalProject-info">
          <button
            className="modalProject-closeBtn"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <AiOutlineCloseCircle className="modalProject-closeBtn-icon"></AiOutlineCloseCircle>
          </button>
          <div className=" modalProject-info-elements">
            <h1 className="modalProject-info-elements-title">{title}</h1>
            <p className="modalProject-info-elements-description">
              {writeBilingualContent(descriptionEn, descriptionFr)}
            </p>
            <h3 className="modalProject-info-elements-about">
              {writeBilingualContent("about", "info")}
            </h3>
            <div className="modalProject-info-elements-tags">
              {tags &&
                tags.map((tag) => {
                  return (
                    <span className="modalProject-info-elements-tags-tag">
                      {tag}
                    </span>
                  );
                })}
            </div>
            <div className="modalProject-info-elements-links">
              <a
                className="modalProject-info-elements-links-link"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                className="modalProject-info-elements-links-link"
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
