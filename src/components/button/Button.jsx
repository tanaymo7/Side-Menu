import "./style.css";
import { motion } from "framer-motion";

export default function Button({ isActive, setIsActive }) {
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div onClick={() => toggleActive()} className="btn">
      <motion.div
        className="slider"
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}
      >
        <div className="elm">
          <PerspectiveText label={"Menu"} />
        </div>
        <div className="elm">
          <PerspectiveText label={"Close"} />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({label}) {
  return (
    <div className="perspective-text">
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
