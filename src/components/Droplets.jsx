import { motion } from "framer-motion";
import "../scss/layout/Droplets.scss";

function Droplets() {
  return (
    <motion.div>
      <div className="droplets-container">
        <div className="droplet"></div>
        <div className="droplet"></div>
        <div className="droplet"></div>
      </div>
    </motion.div>
  );
}

export default Droplets;
