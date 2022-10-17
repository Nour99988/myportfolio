import logo from "./logo.svg";
import "./style/App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import About from "./Pages/About/About";
import Navbar from "./Hooks/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import NavbarForMobile from "./Hooks/NavbarForMobile/NavbarForMobile";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div className="background">
        <img src="./img/bg1.jpg" alt="cover" />
      </div>

      <AnimatePresence exitBeforeEnter>
        <NavbarForMobile />
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
