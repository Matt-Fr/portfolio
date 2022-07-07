import React from "react";
import { useGlobalContext } from "../context";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalProject = () => {
  const { dataModal, openModal, setOpenModal } = useGlobalContext();
  console.log(dataModal);
  const { title, description } = dataModal;
  console.log(title);

  return (
    <div
      className={
        openModal ? "modalProject openModal" : "ModalProject closeModal"
      }
    >
      <button
        onClick={() => {
          setOpenModal(false);
        }}
      >
        <AiOutlineCloseCircle className="closeIcon"></AiOutlineCloseCircle>
      </button>

      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ModalProject;
