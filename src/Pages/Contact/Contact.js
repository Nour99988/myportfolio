import React from "react";
import "./Contact.css";
import { Share, Envelope, Telephone, GeoAlt, Linkedin, Github } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import Navbar from "../../Hooks/Navbar/Navbar";
import usestyle from "../../Hooks/style/usestyle";

const Contact = () => {
  // const variants = {
  //   initial: {},
  // };
  const { variant } = usestyle();
  return (
    <>
      <Navbar />
      {/* <motion.div
        initial={{ y: -1500 }}
        animate={{ y: 0 }}
        exit={{ x: "100vw", transition: { duration: 0.2 } }}
        transition={{ duration: 0.2, ease: "easeInOut", type: "spring", stiffness: "120" }}
        className="contact page"
      > */}
      <motion.div
        variants={variant}
        initial="initial"
        animate="animate"
        exit="exit"
        // transition="transition"
        className="contact page"
      >
        <div className="contener">
          <p className="span-line">CONTACT</p>
          <p className="big-header">CONTACT ME</p>
          <div className="content">
            <div className="information">
              <div>
                <div className="m-icon">
                  <GeoAlt />
                </div>
                <div>
                  <span className="title"> My Address </span>
                  <p> syria -----------</p>
                </div>
              </div>
              <div>
                <div className="m-icon">
                  <Share />
                </div>
                <div>
                  <span className="title"> Social Profiles</span>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/nour-kh-b843ba209"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Linkdin"
                    >
                      <Linkedin />
                    </a>
                    <a href="https://github.com/Nour99988" target="_blank" rel="noopener noreferrer" title="Github">
                      <Github />
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <div className="m-icon">
                  <Envelope />
                </div>
                <div>
                  <span className="title">Email Me</span>
                  <p>
                    <a href="ww">m.nour.kh9346@gmail.com</a>
                  </p>
                </div>
              </div>
              <div>
                <div className="m-icon">
                  <Telephone />
                </div>
                <div>
                  <p className="title">
                    Call Me <br />
                  </p>
                  <p>
                    <a href="ww.">+963 936 825 713</a>
                  </p>
                </div>
              </div>
            </div>
            {/* end infromation */}
            <div className="form">
              <form action="https://formsubmit.co/2c6b19bfe9f89bf19a2e19fa2a97f0ca" method="post">
                <input type="text" placeholder="Your Name" id="name" name="Name" className="name" />
                <input type="email" placeholder="Your Email" id="email" name="Email" className="email" />
                <input type="text" placeholder="Subject" id="subject" name="Subject" className="subject" />
                <textarea placeholder="massage" id="massage" name="massage"></textarea>
                <input type="submit" value="Send Massage" id="sub" className="submit" />
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
