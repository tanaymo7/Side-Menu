import { useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import { motion,AnimatePresence } from "framer-motion";
import Nav from "./components/navbar/Nav";

const variants = {
  open: {
    width: 480,
    height: 650,
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, delay: 0.35,ease: [0.83, 0, 0.17, 1] },
  },
  closed: {
    width: 100,
    height: 40,
    top: 0,
    right: 0,
    transition: { duration: 0.75, delay: 0.35, ease: [0.83, 0, 0.17, 1] },
  },
};
function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="header">
      <motion.div
        className="menu-card"
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        >

        <AnimatePresence>
        { isActive && <Nav/>}                                                      
        </AnimatePresence>
        </motion.div>
      
      <Button isActive={isActive} setIsActive={setIsActive}></Button>
    </div>
  );
}

export default App;
