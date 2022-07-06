import React from "react";
import { useGlobalContext } from "../context";

const ModalProject = () => {
  const { dataModal } = useGlobalContext();
  console.log(dataModal);
  const { title, description } = dataModal;
  console.log(title);

  return (
    <div className="modalProject">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ModalProject;
