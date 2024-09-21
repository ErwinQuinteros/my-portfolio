import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <div id="projects" className="bg-[#111827]">
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative z-0 mx-auto max-w-7xl"
        >
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>

          <Component />
        </motion.section>
      </div>
    );
  };

export default StarWrapper;
