import React from "react";
import "./Resume.css";
import { motion } from "framer-motion";
import Navbar from "../../Hooks/Navbar/Navbar";

const Resume = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ y: -1500 }}
        animate={{ y: 0 }}
        exit={{ x: "100vw", transition: { duration: 0.2 } }}
        transition={{ duration: 0.2, ease: "easeInOut", type: "spring", stiffness: "120" }}
        className="resume page"
      >
        <div className="contener">
          <span className="span-line">RESUME</span>
          <div className="big-header">CHECK MY RESUME</div>
          <div className="content">
            <div className="education ">
              <p className="mid-white-header">Education</p>
              <div className="left-line items">
                <p className=" mid-header-circle">BACHELOR OF Information Technology</p>
              </div>
            </div>
            <div className="experience">
              <p className="mid-white-header">Experience</p>
              <div className="left-line items">
                <p className=" mid-header-circle">Frontend Developer</p>

                <p className="date">2022 - Present</p>
                <div>sdsdsd</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;
