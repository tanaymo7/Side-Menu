import "./style.css";
import { Links } from "./data.js";
import { motion } from "framer-motion";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 120,
    translateY: 80,
    translateX: -20,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.7,
      delay: 0.65 + i * 0.12,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.75, delay: 0.75 },
    },
  }),

  exit: {
    opacity: 0,
    translateY: -50,
    translateX: 30,
    transition: {
      duration: 0.65,
      delay: 0.3,
      type: "linear",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
function Nav() {
  return (
    <div className="navbar">
      <div className="nav-links">
        {Links.map((link, index) => {
          return (
            <div key={index} className="link-container">
              <motion.div
                custom={index}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a href={link.href}>{link.title}</a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Nav;
