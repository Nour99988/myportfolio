import React from "react";
import "Modal.css";

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
      name: "Ecommece Project2",
      client: "2",
      Projectdate: "2",
      ProjectURL: "2",
      pojectDesc: "2",
    },
  ];
  return (
    <div className="backdrop">
      <div className="overlay">
        <div className="content">
          <div className="img">
            <p>{projects[project].name}</p>
            <img src={`./img/portfolio/project-${project}.png`} alt="Ecommerce" />
          </div>
          <div>
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
    </div>
  );
};

export default Modal;
