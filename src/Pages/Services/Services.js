import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Hooks/Navbar/Navbar";

const Services = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ y: -1500 }}
        animate={{ y: 0 }}
        exit={{ x: "100vw", transition: { duration: 0.2 } }}
        transition={{ duration: 0.2, ease: "easeInOut", type: "spring", stiffness: "120" }}
      >
        Services
      </motion.div>
    </>
  );
};

export default Services;
