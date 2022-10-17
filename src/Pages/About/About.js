import React from "react";
// import "../../style/general-class.css";
import { ChevronRight, EmojiSmile, JournalAlbum, Headset, Award } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import "./About.css";
import Navbar from "../../Hooks/Navbar/Navbar";
import usestyle from "../../Hooks/style/usestyle";

const About = () => {
  const { variant, variantProgress } = usestyle();
  return (
    <>
      <Navbar />
      {/* <motion.div
        initial={{ y: -1500 }}
        animate={{ y: 0 }}
        exit={{ x: "100vw", transition: { duration: 0.2 } }}
        transition={{ duration: 0.2, ease: "easeInOut", type: "spring", stiffness: "120" }}
        className="about page"
      > */}

      <motion.div
        variants={variant}
        initial="initial"
        animate="animate"
        exit="exit"
        // transition="transition"
        className="about page"
      >
        <div className="contener">
          <span className="span-line">ABOUT</span>
          <div className="big-header">LEARN MORE ABOUT ME</div>
          <div className=" personal wrap">
            <div className="img">
              <img src="./img/me3.jpg" alt="me" />
            </div>
            <div className="content ">
              <div className="mid-header">
                Front End Developer <br />
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
              <div className="flex">
                <p>
                  <ChevronRight className="icon" /> <span>Birthday: </span> 1 Jan 1993
                </p>
                <p>
                  <ChevronRight /> <span>Age: </span> 30
                </p>
                <p>
                  <ChevronRight /> <span>Website: </span> www.example.com
                </p>
                <p>
                  <ChevronRight /> <span>Degree: </span> Master
                </p>
                <p>
                  <ChevronRight /> <span>Phone: </span> +963 36825713{" "}
                </p>
                <p>
                  <ChevronRight /> <span>Emai: </span> m.nour.kh9346@gmail.com
                </p>
                <p>
                  <ChevronRight /> <span>City: </span> Damascus Syria
                </p>
                <p>
                  <ChevronRight /> <span>Freelance: </span> Available
                </p>
              </div>
              <div className="footer">
                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et
                ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis
                quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat
                cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
              </div>
            </div>
          </div>
          <div className="counters">
            <div>
              <EmojiSmile className="icon" />
              <span>15 </span>
              <span> Happy Clients</span>
            </div>
            <div>
              <JournalAlbum className="icon" />
              <span>5 </span>
              <span> Projects</span>
            </div>
            <div>
              <Headset className="icon" />
              <span> 500</span>
              <span> Hours Of Support </span>
            </div>
            <div>
              <Award className="icon" />
              <span> 5</span>
              <span> Awards</span>
            </div>
          </div>
          {/* end Personal */}
          <div className="skills">
            <span className="span-line">SKILLS</span>
            <div className="skills-con">
              <div className="left">
                <div className="skill">
                  <div className="head">
                    <span> HTML : </span>
                    <span>100%</span>
                  </div>
                  <motion.div
                    variants={variantProgress}
                    initial="hidden"
                    animate="visible"
                    custom="100%"
                    className="bar"
                  />
                </div>
                <div className="skill">
                  <div className="head">
                    <span>CSS : </span>
                    <span>100%</span>
                  </div>
                  <motion.div
                    variants={variantProgress}
                    initial="hidden"
                    animate="visible"
                    custom="100%"
                    className="bar"
                  />
                </div>
                <div className="skill">
                  <div className="head">
                    <span>Javascript : </span>
                    <span>70%</span>
                  </div>
                  <motion.div
                    variants={variantProgress}
                    initial="hidden"
                    animate="visible"
                    custom="70%"
                    className="bar"
                  />
                </div>
              </div>
              <div className="right">
                <div className="skill">
                  <div className="head">
                    <span>React : </span>
                    <span>80%</span>
                  </div>
                  <motion.div
                    variants={variantProgress}
                    initial="hidden"
                    animate="visible"
                    custom="80%"
                    className="bar"
                  />
                </div>
                <div className="skill">
                  <div className="head">
                    <span>Node Js : </span>
                    <span>60%</span>
                  </div>
                  <motion.div
                    variants={variantProgress}
                    initial="hidden"
                    animate="visible"
                    custom="60%"
                    className="bar"
                  />
                </div>
                <div className="skill">
                  <div className="head">
                    <span>Express : </span>
                    <span>60%</span>
                  </div>
                  <motion.div
                    variants={variantProgress}
                    initial="hidden"
                    animate="visible"
                    custom="60%"
                    className="bar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
