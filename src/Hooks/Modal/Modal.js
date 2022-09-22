import React, { useRef, useEffect, useState } from "react";
import "./Modal.css";
import { X } from "react-bootstrap-icons";
const Modal = ({ closeModal, project }) => {
  const projects = [
    {
      name: "Ecommece Project",
      client: "1",
      Projectdate: "1",
      ProjectURL: "1",
      pojectDesc: "1",
    },
    {
      name: "focalx",
      client: "2",
      Projectdate: "2",
      ProjectURL: "2",
      pojectDesc: "2",
    },
  ];
  const image = useRef();

  return (
    <>
      <div className="backdrop" onClick={() => closeModal()}></div>
      <div className="overlay contener">
        <div className="header">
          <p className="title">{projects[project].name}</p>
          <p className="close" onClick={() => closeModal()}>
            <X />
          </p>
        </div>
        <div className="content">
          <div className="img" ref={image}>
            <img src={`./img/portfolio/project-${project}.png`} id="test" alt="Ecommerce" />
          </div>
          <div className="desc">
            <p>Project information</p>
            <p>
              ptoject: <span>{projects[project].name}</span>
            </p>
            <p>
              Client: <span>{projects[project].name}</span>
            </p>
            <p>
              Project date: <span>{projects[project].name}</span>
            </p>
            <p>
              Project URL: <span>{projects[project].name}</span>
            </p>
            <p>
              Project descripion: <span>{projects[project].name}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
