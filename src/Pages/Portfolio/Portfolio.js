import React from "react";
import "./Portfolio.css";
import { Link45deg } from "react-bootstrap-icons";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../Hooks/Navbar/Navbar";
// import { Link } from "react-router-dom";

const Portfolio = () => {
  const openModal = () => {};
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ y: -1500 }}
        animate={{ y: 0 }}
        exit={{ x: "100vw", transition: { duration: 0.2 } }}
        transition={{ duration: 0.2, ease: "easeInOut", type: "spring", stiffness: "100" }}
        className="portfolio page"
      >
        <div className="contener">
          <p className="span-line ">PORTFOLIO</p>
          <div className="big-header">MY WORKS</div>
          <div className="content">
            <div className="card">
              <div className="img">
                <img src="./img/portfolio/project-1.png" alt="pro" />
              </div>
              <div className="details">
                <a href="nour99988/github.io/ecomm2" title="visit website">
                  +
                </a>
                <p onClick={openModal} title="Project Details">
                  <Link45deg />
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Portfolio;
