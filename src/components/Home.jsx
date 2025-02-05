import "../scss/layout/Home.scss";
import { motion } from "framer-motion";
import Droplets from "./Droplets";
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="home-container"
    >
      <motion.h1
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: 0.5, ease: "easeInOut" }}
        className="home-title"
      >
        ¡Hola, soy Silvia!
      </motion.h1>

     <Droplets/>
    </motion.div>
  );
}

export default Home;
