import React from "react";
import Links from "../../Hooks/Links/Links";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}

      <div
        // initial={{ y: -1500 }}
        // animate={{ y: 0 }}
        // exit={{ y: "-100vh", x: "45%", transition: { duration: 0.2 } }}
        // transition={{ duration: 0.2, ease: "easeInOut", type: "spring", stiffness: "120" }}
        className="home"
      >
        <div className="content">
          <motion.p
            initial={{ y: "-45vh" }}
            animate={{ y: 0 }}
            style={{}}
            exit={{ y: "-45vh", transition: { duration: 0.2 }, fontSize: "36px" }}
            transition={{ y: { duration: 0.2 }, ease: "easeInOut", type: "spring", stiffness: "120" }}
            className="name"
          >
            Nour Khattab
          </motion.p>
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw", transition: { duration: 0.2 } }}
            transition={{ x: { duration: 0.2 }, ease: "easeInOut", type: "spring", stiffness: "120" }}
            className="desc"
          >
            I'm a Frontend Developer from syria <br />
          </motion.h1>
          <motion.div
            initial={{ y: "-48vh", x: "48vw" }}
            animate={{ y: 0, x: 0 }}
            transition={{
              x: { duration: 0.2 },
              y: { duration: 0.2 },
              ease: "easeInOut",
              type: "spring",
              stiffness: "120",
            }}
            exit={{ y: "-48vh", x: "48vw", transition: { duration: 0.2 } }}
          >
            <Links />
          </motion.div>
        </div>
        <div className="homeMobile">
          <p className="name">Nour Khattab</p>
          <h2 className="desc">I'm a Frontend Developer from syria</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
