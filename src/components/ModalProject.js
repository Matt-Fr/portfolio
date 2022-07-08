import React from "react";
import { useGlobalContext } from "../context";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalProject = () => {
  const { writeBilingualContent, dataModal, openModal, setOpenModal } =
    useGlobalContext();
  console.log(dataModal);
  const { title, descriptionEn, descriptionFr, picture } = dataModal;

  return (
    <div
      className={
        openModal ? "modalProject openModal" : "ModalProject closeModal"
      }
    >
      <img src={picture} alt={title} className="modalProject-img" />

      <div className="modalProject-info">
        <button
          className="modalProject-info-closeBtn"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <AiOutlineCloseCircle className="modalProject-info-closeBtn-icon"></AiOutlineCloseCircle>
        </button>
        <div>
          <h1>{title}</h1>
          <p>{writeBilingualContent(descriptionEn, descriptionFr)}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
