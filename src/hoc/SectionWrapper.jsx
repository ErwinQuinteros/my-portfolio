import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section
        id="projects"
        className="relative z-50 bg-[#030618] border-[#353951] border-t"
      >
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
        </div>
        <div className={`${styles.bgSections} `}>
          <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative z-0 mx-auto"
          >
            <span className="hash-span" id={idName}>
              &nbsp;
            </span>

            <Component />
          </motion.section>
        </div>
      </section>
    );
  };

export default StarWrapper;
