import React from "react";
import { useGlobalContext } from "../context";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./ModalProjects.scss";
import { useEffect } from "react";

const ModalProject = () => {
  const {
    writeBilingualContent,
    dataModal,
    openModal,
    setOpenModal,
    setCloseHamburger,
  } = useGlobalContext();

  useEffect(() => {
    if (openModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);
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
          className={
            openModal ? "modalProject-info visible" : "modalProject-info"
          }
        >
          <button
            className="modalProject-closeBtn"
            onClick={() => {
              setOpenModal(false);
              setCloseHamburger(false);
            }}
          >
            <AiOutlineCloseCircle className="modalProject-closeBtn-icon"></AiOutlineCloseCircle>
          </button>
          <div className=" modalProject-info-elements">
            <h1 className="modalProject-info-elements-title">{title}</h1>

            <div className="modalProject-info-elements-tags">
              {tags &&
                tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="modalProject-info-elements-tags-tag"
                    >
                      {tag}
                    </span>
                  );
                })}
            </div>
            <p className="modalProject-info-elements-description">
              {writeBilingualContent(descriptionEn, descriptionFr)}
            </p>
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
        <div
          className={
            openModal
              ? "modalProject-imgContainer visible"
              : "modalProject-imgContainer"
          }
        >
          <img
            src={picture}
            alt={title}
            className="modalProject-imgContainer-img"
          />
        </div>
      </div>
    </>
  );
};

export default ModalProject;
