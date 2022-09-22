import React, { useRef, useState } from "react";
import "./Portfolio.css";
import { Link45deg } from "react-bootstrap-icons";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../Hooks/Navbar/Navbar";
import Modal from "../../Hooks/Modal/Modal";
// import { Link } from "react-router-dom";
import usestyle from "../../Hooks/style/usestyle";
const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const { variant } = usestyle();
  const [project, setProject] = useState(0);
  const contener = useRef();
  const handelShowModal = (project) => {
    setProject(project);
    setShowModal(true);
    contener.current.hidden = true;
  };
  const handelcloseModal = () => {
    setShowModal(false);
    contener.current.hidden = false;
  };
  return (
    <>
      <Navbar />
      {/* <motion.div
        initial={{ y: -1500 }}
        animate={{ y: 0 }}
        exit={{ x: "100vw", transition: { duration: 0.2 } }}
        transition={{ duration: 0.2, ease: "easeInOut", type: "spring", stiffness: "100" }}
        className="portfolio page"
      > */}
      <motion.div
        variants={variant}
        initial="initial"
        animate="animate"
        exit="exit"
        // transition="transition"
        className="portfolio page"
      >
        <div className="contener" ref={contener}>
          <p className="span-line ">PORTFOLIO</p>
          <div className="big-header">MY WORKS</div>
          <div className="content">
            <div className="card">
              <div className="img">
                <img src="./img/portfolio/project-0.png" alt="pro" />
              </div>
              <div className="details">
                <a
                  href="https://nour99988/github.io/ecomm2"
                  title="visit website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +
                </a>
                <p onClick={() => handelShowModal("0")} title="Project Details">
                  <Link45deg />
                </p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src="./img/portfolio/project-1.png" alt="pro" />
              </div>
              <div className="details">
                <a href="https://www.focal-x.com" title="visit website" target="_blank" rel="noopener noreferrer">
                  +
                </a>
                <p onClick={() => handelShowModal("1")} title="Project Details">
                  <Link45deg />
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {showModal && <Modal project={project} closeModal={handelcloseModal} />}
    </>
  );
};

export default Portfolio;
