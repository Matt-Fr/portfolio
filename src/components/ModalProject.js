import React from "react";
import { useGlobalContext } from "../context";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalProject = () => {
  const { dataModal, openModal, setOpenModal } = useGlobalContext();
  console.log(dataModal);
  const { title, description, picture } = dataModal;

  return (
    <div
      className={
        openModal ? "modalProject openModal" : "ModalProject closeModal"
      }
    >
      <div className="modalProject-imgContainer">
        <img
          src={picture}
          alt={title}
          className="modalProject-imgContainer-img"
        />
      </div>
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
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
