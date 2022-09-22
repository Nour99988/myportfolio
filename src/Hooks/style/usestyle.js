const usestyle = () => {
  const variant = {
    initial: { y: -1500 },
    animate: { y: 0, transition: { duration: 0.2, ease: "easeInOut", type: "spring", stiffness: "100" } },
    exit: { x: "100vw", transition: { duration: 0.2 } },
    // transition: { duration: 0.2, ease: "easeInOut", type: "spring", stiffness: "100" },
  };
  const variantProgress = {
    hidden: {
      width: 0,
    },
    visible: (i) => ({
      width: i,
      transition: { duration: 3, type: "spring" },
    }),
  };
  return { variant, variantProgress };
};

export default usestyle;
