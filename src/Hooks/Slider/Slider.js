import React, { useState, useRef, useEffect } from "react";
import "./Slider.css";
import { motion } from "framer-motion";
import images from "../images/images";

const Slider = () => {
  console.log(images.alwan[0]);
  const test = images.alwan.map((ele) => {
    return (
      <motion.div className="img" key={ele}>
        <img src={ele} alt="img" />
      </motion.div>
    );
  });

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  return (
    <div className="slider">
      {/* <img src="./img/portfolio/alwan/1.png" /> */}
      {/* {test} */}
      <motion.div ref={carousel} className="carousel">
        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={"grabbing"}
        >
          {test}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
