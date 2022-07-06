import React from "react";
import { useGlobalContext } from "../context";

const ModalProject = () => {
  const { dataTitle } = useGlobalContext();

  return <div className="modalProject">{dataTitle}</div>;
};

export default ModalProject;
