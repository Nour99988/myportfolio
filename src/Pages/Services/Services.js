import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Hooks/Navbar/Navbar";
import usestyle from "../../Hooks/style/usestyle";

const Services = () => {
  const { variant } = usestyle();
  return (
    <>
      <Navbar />
      {/* <motion.div
        initial={{ y: -1500 }}
        animate={{ y: 0 }}
        exit={{ x: "100vw", transition: { duration: 0.2 } }}
        transition={{ duration: 0.2, ease: "easeInOut", type: "spring", stiffness: "120" }}
      > */}
      <motion.div
        variants={variant}
        initial="initial"
        animate="animate"
        exit="exit"
        // transition="transition"
        className="services page"
      >
        <div className="contener">
          <p className="span-line ">PORTFOLIO</p>
          <div className="big-header">MY WORKS</div>
          <div className="content"></div>
        </div>
      </motion.div>
    </>
  );
};

export default Services;
