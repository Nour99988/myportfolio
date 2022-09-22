import React from "react";
import "./Resume.css";
import { motion } from "framer-motion";
import Navbar from "../../Hooks/Navbar/Navbar";
import usestyle from "../../Hooks/style/usestyle";

const Resume = () => {
  const { variant } = usestyle();

  return (
    <>
      <Navbar />
      {/* <motion.div
        initial={{ y: -1500 }}
        animate={{ y: 0 }}
        exit={{ x: "100vw", transition: { duration: 0.2 } }}
        transition={{ duration: 0.2, ease: "easeInOut", type: "spring", stiffness: "120" }}
        className="resume page"
      > */}
      <motion.div
        variants={variant}
        initial="initial"
        animate="animate"
        exit="exit"
        // transition="transition"
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
                <div className="description">
                  <p>
                    I was working at Focalx agency form april 2022 <br />* I bulit
                    <a href="https://www.focal-x.com" target="_blank" rel="noopener noreferrer">
                      Focalx's website
                    </a>
                    using vanilla javascript and pure css
                  </p>
                  <p>
                    And I worked with team Scrum, to built dashboard to manage employees and inters using cutting-edge
                    technologies like ES7, React.js, Redux and more.{" "}
                  </p>{" "}
                  <p>
                    I contributed to building{" "}
                    <a href="https://alwansystem.com/" target="_blank" rel="noopener noreferrer">
                      {" "}
                      alwan's website,
                    </a>{" "}
                    I used javascript and css.
                  </p>
                  <p>
                    Developing completely isolated, reusable, unit tested and if needed visually tested components.{" "}
                  </p>
                  <p>
                    Followed a framework scrum workflow: daily standups, weekly sprint review, sprint planning and
                    sprint retrospective meetings.
                  </p>
                  <p>I am supervisor of trainees in Focalx</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;
